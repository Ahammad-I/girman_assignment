import { auditController } from '../controllers/auditController.js';

export const auditLog = (resourceName) => {
  return async (req, res, next) => {
    // Store the original send function
    const originalSend = res.send;
    const startTime = Date.now();

    // Override the send function
    res.send = async function (body) {
      const responseBody = typeof body === 'string' ? JSON.parse(body) : body;
      const userId = req.user?._id;
      
      // Create audit log entry
      await auditController.createAuditLog(
        userId,
        `${req.method} ${req.path}`,
        resourceName,
        responseBody.success ? 'GRANTED' : 'DENIED',
        {
          requestBody: req.body,
          responseStatus: res.statusCode,
          duration: Date.now() - startTime,
          userAgent: req.headers['user-agent'],
          ipAddress: req.ip
        }
      );

      // Call the original send function
      return originalSend.call(this, body);
    };

    next();
  };
};