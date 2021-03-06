const joi = require('joi');

exports.registerValidation = (data) => {
  const schema = joi.object({
    username: joi.string().alphanum().min(5).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });

  return schema.validate(data);
};

exports.loginValidation = (data) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });

  return schema.validate(data);
};
