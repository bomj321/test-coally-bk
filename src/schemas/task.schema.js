const Joi = require("joi");

const id = Joi.string().min(1);
const title = Joi.string().min(1);
const description = Joi.string().min(1);
const state = Joi.string().min(1);

const createTaskSchema = Joi.object({
  title: title.required(),
  description: description.required(),
  state: state.required(),
});

const updateTaskSchema = Joi.object({
  title,
  description,
  state,
});

const getTaskSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createTaskSchema,
  updateTaskSchema,
  getTaskSchema,
};
