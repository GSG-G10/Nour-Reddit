const path = require('path');
const bcrypt = require('bcrypt');
const emailExists = require('../postgres/query/emailExists');
const { loginValidation } = require('../utils/validation');
const { createToken } = require('../utils/createToken');

exports.loginPost = async (req, res) => {
  // validate data before we log in
  const { error } = await loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if the email exists
  const user = await emailExists(req.body.email);
  if (user.rowCount === 0) return res.status(400).json({ success: false, msg: 'Invalid Email, you have to sign up first!' });

  // check password
  const dbPassword = user.rows[0].password;
  const validPassword = await bcrypt.compare(req.body.password, dbPassword);
  if (!validPassword) return res.status(400).json({ success: false, msg: 'Incorrect password' });

  // create token and store it in cookies
  const { id, username } = user.rows[0];
  createToken(id, username, process.env.TOKEN_SERCRET, res);
  res.redirect('/');
};

exports.loginGet = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'pages', 'login.html'));
};
