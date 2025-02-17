 
import User from '../models/User.js';
import { config } from '../config/config.js';

export const userController = {
  
  createUser: async (req, res) => {
    try {
      const { username, email, password, role } = req.body;
      
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({
          success: false,
          message: 'User already exists'
        });
      }

      const user = await User.create({
        username,
        email,
        password,
        role: 'user'
      });

      res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  },

  // Get all users
  getUsers: async (req, res) => {
    try {
      const users = await User.find().select('-password');
      res.json({
        success: true,
        data: users
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
   
 
        
   
};