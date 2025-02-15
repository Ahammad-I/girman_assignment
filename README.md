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
- `POST /api/users` - Create new user
- `GET /api/users` - Get all users
- `PUT /api/users/:id/role` - Update user role

### Role Management
- `GET /api/roles` - Get all roles
- `PUT /api/roles/:id/permissions` - Update role permissions

### Permission Management
- `GET /api/permissions` - Get all permissions
- `POST /api/permissions` - Create new permission

### Audit Logging (Bonus)
- `GET /api/audit` - Get audit logs
- Query parameter: `hours` (default: 24) to specify time range

 
 
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
```

 
 
```
 
```

## Deployment
The application is deployed on [Platform Name] and can be accessed at:
[Deployment URL]

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
[Your Name]

 