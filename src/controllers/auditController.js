
// controllers/auditController.js
import AuditLog from '../models/AuditLog.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

export const auditController = {
  // Get audit logs
  getAuditLogs: async (req, res) => {
    try {
      const { hours = 24 } = req.query;
      const startDate = new Date(Date.now() - hours * 60 * 60 * 1000);

      const logs = await AuditLog.find({
        timestamp: { $gte: startDate }
      }).sort({ timestamp: -1 });

      res.json({
        success: true,
        data: logs
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  } ,
    login: async (req, res) => {
      try {
        const { email, password } = req.body;
  
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({
            success: false,
            message: 'Invalid email or password'
          });
        }
  
        // Verify password
        const isValidPassword = await user.comparePassword(password);
        if (!isValidPassword) {
          return res.status(401).json({
            success: false,
            message: 'Invalid email or password'
          });
        }
  
        // Generate JWT token
        const token = jwt.sign(
          { 
            userId: user._id,
            role: user.role 
          },
          config.jwtSecret,
          { expiresIn: config.jwtExpiration }
        );

        // Return user info and token
        res.json({
          success: true,
          message: 'Login successful',
          data: {
            token,
            user: {
              id: user._id,
              username: user.username,
              email: user.email,
              role: user.role
            }
          }
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Login failed',
          error: error.message
        });
      }
    },
      // Create audit log
  createAuditLog: async (userId, action, resource, outcome) => {
    try {
      await AuditLog.create({
        userId,
        action,
        resource,
        outcome,
        timestamp: new Date()
      });
    } catch (error) {
      console.error('Audit log creation failed:', error);
    }
  }
};