  
 
  
 
 // models/Permission.js
 import mongoose from 'mongoose';
 
 const permissionSchema = new mongoose.Schema({
   name: {
     type: String,
     required: true,
   },
   description: {
     type: String,
     required: true
   },
   resource: {
     type: String,
     required: true
   },
   action: {
     type: String,
     required: true,
     enum: ['create', 'read', 'update', 'delete']
   }
 }, {
   timestamps: true
 });
 
 export default mongoose.model('Permission', permissionSchema);