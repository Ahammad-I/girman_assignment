// config/config.js
export const config = {
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    jwtExpiration: '24h',
    roles: {
      ADMIN: 'admin',
      SUPERVISOR: 'supervisor',
      STAFF: 'staff'
    },
    defaultPermissions: {
      admin: ['API_ONE', 'API_TWO', 'API_THREE', 'MANAGE_USERS', 'MANAGE_ROLES', 'MANAGE_PERMISSIONS'],
      supervisor: ['API_ONE', 'API_TWO', 'API_THREE'],
      staff: ['API_ONE', 'API_TWO']
    }
  };