 import express from 'express';
 import { userController } from '../controllers/userController.js';
 import { auditController } from '../controllers/auditController.js';
//  import { authController } from '../controllers/authController.js';
 import { auth } from '../middleware/auth.js';
 import { checkPermission } from '../middleware/rbac.js';
 
  

 import { auditLog } from '../middleware/auditMiddleware.js';

const router = express.Router();

router.post('/register', 
  auditLog('USER_REGISTRATION'),
  userController.createUser
);

router.get('/users', 
  auth, 
  checkPermission('READ_USERS'),
  auditLog('USER_LIST'),
  userController.getUsers
);

// routes/authRoutes.js
router.post('/login', 
  auditLog('USER_LOGIN'),
  auditController.login
);

// Example enhanced error handling in controllers
export default router