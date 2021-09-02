const express = require('express');
const bcrypt = require('bcrypt');
const emailExists = require('../postgres/query/emailExists');
const { loginValidation } = require('../utils/validation');

const routerlogin = async (req, res) => {
  // validate data before we login in
  const { error } = await loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
};

module.exports = routerlogin;
