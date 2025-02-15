import Joi from 'joi';

export const validators = {
  userSchema: Joi.object({
    username: Joi.string().required().min(3).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
    role: Joi.string().valid('admin', 'supervisor', 'staff')
  }),

  roleSchema: Joi.object({
    roleId: Joi.string().required(),
    permissions: Joi.array().items(Joi.string()).required()
  }),

  permissionSchema: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    resource: Joi.string().required(),
    action: Joi.string().valid('create', 'read', 'update', 'delete').required()
  })
};
export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });