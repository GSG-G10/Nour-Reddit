const joi = require('joi');

const registerValidation = (data) => {
  const schema = joi.object({
    username: joi.string().alphanum().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });

  return joi.validate(data, schema);
};

const loginValidation = (data) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });

  return joi.validate(data, schema);
};

module.exports = { registerValidation, loginValidation };
