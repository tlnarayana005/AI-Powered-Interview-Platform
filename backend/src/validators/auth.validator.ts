import Joi from 'joi';

const email = Joi.string().email().required();
const password = Joi.string().min(8).max(128).required();

export const registerSchema = Joi.object({
  body: Joi.object({
    fullName: Joi.string().trim().required(),
    email,
    password,
    role: Joi.string().valid('candidate', 'recruiter', 'admin').default('candidate')
  })
});

export const loginSchema = Joi.object({
  body: Joi.object({
    email,
    password
  })
});

export const emailSchema = Joi.object({
  query: Joi.object({ token: Joi.string().required() })
}).or('body', 'query');

export const passwordResetSchema = Joi.object({
  body: Joi.object({
    token: Joi.string().required(),
    password
  })
});
