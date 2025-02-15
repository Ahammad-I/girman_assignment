 // controllers/permissionController.js
 import Permission from '../models/Permission.js';
 
 export const permissionController = {
   // Get all permissions
   getPermissions: async (req, res) => {
     try {
       const permissions = await Permission.find();
       res.json({
         success: true,
         data: permissions
       });
     } catch (error) {
       res.status(500).json({
         success: false,
         message: error.message
       });
     }
   },
 
   // Create new permission
   createPermission: async (req, res) => {
     try {
       const { name, description, resource, action } = req.body;
       
       const permissionExists = await Permission.findOne({ resource, action });
       if (permissionExists) {
         return res.status(400).json({
           success: false,
           message: 'Permission already exists'
         });
       }
 
       const permission = await Permission.create({
         name,
         description,
         resource,
         action
       });
 
       res.status(201).json({
         success: true,
         message: 'Permission created successfully',
         data: permission
       });
     } catch (error) {
       res.status(500).json({
         success: false,
         message: error.message
       });
     }
   }
 };
 