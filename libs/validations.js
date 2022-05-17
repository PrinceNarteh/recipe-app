import Joi from "joi";

export const registrationSchema = Joi.object({
  firstName: Joi.string().min(2).required().messages({
    "string.min": "First name length must be at least 2 characters long",
    "any.required": "First Name is required",
  }),
  lastName: Joi.string().min(2).required().messages({
    "string.min": "Last name length must be at least 2 characters long",
    "any.required": "Last Name is required",
  }),
  username: Joi.string().min(2).required().messages({
    "string.min": "Username length must be at least 2 characters long",
    "any.required": "Username is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password length must be at least  characters long",
    "any.required": "Password is required",
  }),
});

export const loginSchema = Joi.object({
  username: Joi.string().min(2).required().messages({
    "string.min": "Username length must be at least 2 characters long",
    "any.required": "Username is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password length must be at least  characters long",
    "any.required": "Password is required",
  }),
});

export const menuSchema = Joi.object({
  food: Joi.string().min(2).required(),
  type: Joi.string().valid("continental", "local").required(),
  password: Joi.string().valid("breakfast", "lunch", "supper").required(),
});
