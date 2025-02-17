 
 


 

 
import express from 'express';
import { auditController } from '../controllers/auditController.js';
import { auth } from '../middleware/auth.js';
import { checkPermission } from '../middleware/rbac.js';

const router = express.Router();

router.get('/audit-logs', auth, checkPermission('READ_AUDIT_LOGS'), auditController.getAuditLogs);

export default router;

