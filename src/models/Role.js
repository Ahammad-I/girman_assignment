
 import mongoose from 'mongoose';
 
 const roleSchema = new mongoose.Schema({
   name: {
     type: String,
     required: true,
     unique: true,
     enum: ['admin', 'supervisor', 'staff','user']
   },
   permissions: [{
     type: String,
     ref: 'Permission'
   }],
   description: {
     type: String,
     required: true
   }
 }, {
   timestamps: true
 });
 
 export default mongoose.model('Role', roleSchema);