 # Role-Based Access Control (RBAC) System

## Overview
A custom Role-Based Access Control (RBAC) System built with Node.js and Express to manage user roles and permissions dynamically. This system provides comprehensive user management, role-based access control, and audit logging capabilities.

## Features
- User Management (Create, Read, Update)
- Role Management (Staff, Supervisor, Admin)
- Permission Management
- Access Validation
- Audit Logging (Bonus Feature)
- RESTful API Architecture
- JWT Authentication
- MongoDB Database

## Tech Stack
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Security: bcryptjs, helmet
- Validation: express-validator

## Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd rbac-system
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. Run the application
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Documentation

### User Management
- `POST      http://ec2-44-201-75-136.compute-1.amazonaws.com/api/auth/register` - Create new user
- `GET    http://ec2-44-201-75-136.compute-1.amazonaws.com/api/auth/users` - Get all users
- `POST  http://ec2-44-201-75-136.compute-1.amazonaws.com/api/auth/login` -  Login User
-`POST  http://ec2-44-201-75-136.compute-1.amazonaws.com/api/auth/login` - Login Admin

### Role Management
-`POST  http://ec2-44-201-75-136.compute-1.amazonaws.com/api/roles  - Create Role
- `GET  http://ec2-44-201-75-136.compute-1.amazonaws.com/api/roles  -Listroles
- `PATCH   http://ec2-44-201-75-136.compute-1.amazonaws.com/api/roles/permissions` - Update role permissions

### Permission Management
-POST    http://ec2-44-201-75-136.compute-1.amazonaws.com/api/permissions    - Create permission
- `GET   http://ec2-44-201-75-136.compute-1.amazonaws.com/api/permissions` - Get all permissions
- `GET http://ec2-44-201-75-136.compute-1.amazonaws.com/api/roles/67af9b986616f04a85d12911/permissions` -  Get all permissions of a specific user 

### Audit Logging 
- `GET http://ec2-44-201-75-136.compute-1.amazonaws.com/api/audit/audit-logs` - Get audit logs
- Query parameter: `hours` (default: 24) to specify time range

### POST 
-POST  http://ec2-44-201-75-136.compute-1.amazonaws.com/api/posts  - Create Post 
- GET http://ec2-44-201-75-136.compute-1.amazonaws.com/api/posts/  - Get all posts
- GET http://ec2-44-201-75-136.compute-1.amazonaws.com/api/posts/:postId  - Get all posts by a specific user 
- PUT http://ec2-44-201-75-136.compute-1.amazonaws.com/api/posts/:postId  -update post 
- Delete http://ec2-44-201-75-136.compute-1.amazonaws.com/api/posts/:postId  - delete post 


 

SAMPLE ADMIN RECORD TO TEST ALL API'S
 {
    "success": true,
    "message": "Login successful",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2FmYThlYTJmMTdiOGMxZDBhNjhjNmYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3Mzk3Njc2NDEsImV4cCI6MTczOTg1NDA0MX0.9KhQbmDFjGjqmm7jmJgObBeNUWOV1gAyyHEW11wFXeI",
        "user": {
            "id": "67afa8ea2f17b8c1d0a68c6f",
            "username": "Admin",
            "email": "admin@gmail.com",
            "role": "admin"
        }
    }
}

```

## Git Workflow
1. Feature Branches:
   - `feature/user-management`
   - `feature/role-management`
   - `feature/permission-management`
   - `feature/audit-bonus`

2. Development Process:
   - Create feature branch from master
   - Develop and test feature
   - Create pull request for review
   - Merge to master after approval



## Deployment
The application is deployed on AWS and can be accessed at:
https://ec2-44-201-75-136.compute-1.amazonaws.com

## Postman Collection
Import the Postman collection for testing the APIs:
https://girman-assignment.postman.co/workspace/New-Team-Workspace~a0a59dfa-a284-4237-a28c-e643e2044155/collection/40174582-0b92f0ee-7eff-4f31-8e00-53f6ddcbb273?action=share&creator=40174582



## Author
Nadendla Ahammad Hussain

 