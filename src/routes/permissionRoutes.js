 import express from 'express';
 import { permissionController } from '../controllers/permissionController.js';
 import { auth } from '../middleware/auth.js';
 import { checkPermission } from '../middleware/rbac.js';
 
 const router = express.Router();
 
 router.get('/', auth, checkPermission('READ_PERMISSIONS'), permissionController.getPermissions);
  
//  router.get('/permissions', permissionController.getPermissions);
 router.post('/', auth, checkPermission('CREATE_PERMISSION'), permissionController.createPermission);
//  router.post('/permissions', permissionController.createPermission);
 
 export default router;