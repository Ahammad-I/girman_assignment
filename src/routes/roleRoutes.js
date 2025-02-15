 import express from 'express';
 import { roleController } from '../controllers/roleController.js';
 import { auth } from '../middleware/auth.js';
 import { checkPermission } from '../middleware/rbac.js';
 
 const router = express.Router();
 
 router.get('/roles', auth, checkPermission('READ_ROLES'), roleController.getRoles);
 router.patch('/roles/permissions', auth, checkPermission('UPDATE_ROLE_PERMISSIONS'), roleController.updateRolePermissions);
//  router.post('/role', roleController.createRole);
 router.post('/role', auth, checkPermission('CREATE_ROLE'), roleController.createRole);
 router.get('/:roleId/permissions', auth, checkPermission('READ_ROLES'), roleController.getRolePermissions);
 export default router;