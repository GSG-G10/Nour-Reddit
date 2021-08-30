const express = require('express');
const signUser = require('../postgres/query/signup');
const { registerValidation } = require('../controllers/validation');

const routerRegister = express.Router();

routerRegister.post('/register', async (req, res) => {
  // validate data before we make a user

  const { name, email, password } = req.body;
  const { rows } = await signUser(
    name, email, password,
  );
  console.log(rows);
});

module.exports = routerRegister;
