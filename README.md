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
- `POST     http://localhost:3000/api/auth/register ` - Create new user
- `GET   http://localhost:3000/api/auth/users` - Get all users
- `POST http://localhost:3000/api/auth/login` -  Login User
-`POST http://localhost:3000/api/auth/login` - Login Admin

### Role Management
-`POST http://localhost:3000/api/roles  - Create Role
- `GET http://localhost:3000/api/roles  - Get all roles
- `PATCH  http://localhost:3000/api/roles/permissions` - Update role permissions

### Permission Management
-POST    http://localhost:3000/api/permissions    - Create permission
- `GET  http://localhost:3000/api/permissions` - Get all permissions
- `GET http://localhost:3000/api/roles/:roleid/permissions` -  Get all permissions of a specific user 

### Audit Logging 
- `GET http://localhost:3000/api/audit/audit-logs` - Get audit logs
- Query parameter: `hours` (default: 24) to specify time range

### POST 
-POST  http://localhost:3000/api/posts  - Create Post 
- GET http://localhost:3000/api/posts/  - Get all posts
- GET http://localhost:3000/api/posts/:postId  - Get all posts by a specific user 
- PUT http://localhost:3000/api/posts/:postId  -update post 
- Delete http://localhost:3000/api/posts/:postId - delete post 


 

SAMPLE ADMIN RECORD TO TEST ALL API'S
    "message": "Login successful",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2FmYThlYTJmMTdiOGMxZDBhNjhjNmYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3Mzk2MTE4MjgsImV4cCI6MTczOTY5ODIyOH0.lXnxbYaJf4W06mFR-TTqzG8TpgQWTGs5itbQkWnssXI",
        "user": {
            "id": "67afa8ea2f17b8c1d0a68c6f",
            "username": "Admin",
            "email": "admin@gmail.com",
            "role": "admin"
        }
    }
}
 SAMPLE USER RECORD TO TEST API'S

 {
  "username": "Admin",
  "email": "admin@gmail.com",
    "password": "admin@123",
  "role": "user"  // Optional, defaults to "staff"
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

## Testing
Run the test suite:
```bash
npm test


## Deployment
The application is deployed on [Platform Name] and can be accessed at:
https://ec2-44-201-75-136.compute-1.amazonaws.com

## Postman Collection
Import the Postman collection for testing the APIs:
[Postman Collection Link]

## Contributing
1. Create a feature branch from master
2. Make your changes
3. Create a pull request with detailed description
4. Ensure all tests pass
5. Request code review

## Author
Nadendla Ahammad Hussain

 