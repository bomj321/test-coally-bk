const Joi = require("joi");

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

const loginUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  getUserSchema,
  loginUserSchema,
};
