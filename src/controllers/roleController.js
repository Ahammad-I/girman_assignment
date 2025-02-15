 // controllers/roleController.js
import Role from '../models/Role.js';
// import { config } from '../config/config.js';

export const roleController = {
  // Get all roles
  getRoles: async (req, res) => {
    try {
      const roles = await Role.find().populate('permissions');
      res.json({
        success: true,
        data: roles
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  },

  // Update role permissions
  updateRolePermissions: async (req, res) => {
    try {
      const { roleId, permissions,description} = req.body;

      const role = await Role.findByIdAndUpdate(
        roleId,
        { permissions,description },
        { new: true }
      );

      if (!role) {
        return res.status(404).json({
          success: false,
          message: 'Role not found'
        });
      }

      res.json({
        success: true,
        message: 'Role permissions updated successfully',
        data: role
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  },

  createRole: async (req, res) => {
    try {
      const { name, permissions, description } = req.body;

      const existingRole = await Role.findOne({ name });
      if (existingRole) {
        return res.status(400).json({
          success: false,
          message: 'Role already exists'
        });
      }

      const newRole = new Role({ name, permissions, description });
      await newRole.save();

      res.status(201).json({
        success: true,
        message: 'Role created successfully',
        data: newRole
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
  

  getRolePermissions: async (req, res) => {
    try {
        const { roleId } = req.params;

        // Find the role and populate permissions
        const role = await Role.findById(roleId).populate('permissions');

        if (!role) {
            return res.status(404).json({ success: false, message: 'Role not found' });
        }

        res.json({ success: true, role: role.name, permissions: role.permissions });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}




};
