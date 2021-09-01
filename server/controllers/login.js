const express = require('express');
const bcrypt = require('bcrypt');
const { loginValidation } = require('../utils/validation');

const routerlogin = express.Router();

routerlogin.post('/login', async (req, res) => {
  // validate data before we make a user
  const { error } = await loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
});

module.exports = routerlogin;
