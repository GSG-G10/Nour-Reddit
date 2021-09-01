const express = require('express');
const bcrypt = require('bcrypt');
const signUser = require('../postgres/query/signup');
const { registerValidation } = require('../utils/validation');

const routerRegister = express.Router();

routerRegister.post('/register', async (req, res) => {
  // validate data before we make a user
  const { error } = await registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { username, email, password } = req.body;

  // hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // add a new user to database and return error if email/user already exists
  try {
    const newUser = await signUser(username, email, hashedPassword);
    const newUserId = newUser.rows[0].id;
    res.redirect('./');
  } catch (err) {
    const msg = err.detail.split('=')[1];
    res.status(400).json({ success: false, msg });
  }
});

module.exports = routerRegister;
