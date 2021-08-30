const express = require('express');
const bcrypt = require('bcrypt');
const signUser = require('../postgres/query/signup');
const registerValidation = require('../controllers/validation');

const routerRegister = express.Router();

routerRegister.post('/register', async (req, res) => {
  // validate data before we make a user
  const { error } = await registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { username, email, password } = req.body;
  try {
    await signUser(username, email, password);
    res.redirect('./');
  } catch (err) {
    const msg = err.detail.split('=')[1];
    res.status(400).send(msg);
  }
});

module.exports = routerRegister;
