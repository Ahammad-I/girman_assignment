
import Role from '../models/Role.js';
import { auditController } from '../controllers/auditController.js';

export const checkPermission = (requiredPermission) => {
  return async (req, res, next) => {
    try {
      const user = req.user;
      const role = await Role.findOne({ name: user.role });

      if (!role) {
        await auditController.createAuditLog(
          user._id,
          'ACCESS_ATTEMPT',
          requiredPermission,
          'DENIED'
        );
        return res.status(403).json({
          success: false,
          message: 'Role not found'
        });
      }

      if (role.name === 'admin' || role.permissions.includes(requiredPermission)) {
        await auditController.createAuditLog(
          user._id,
          'ACCESS_ATTEMPT',
          requiredPermission,
          'GRANTED'
        );
        next();
      } else {
        await auditController.createAuditLog(
          user._id,
          'ACCESS_ATTEMPT',
          requiredPermission,
          'DENIED'
        );
        res.status(403).json({
          success: false,
          message: 'Insufficient permissions'
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Permission check failed'
      });
    }
  };
};
