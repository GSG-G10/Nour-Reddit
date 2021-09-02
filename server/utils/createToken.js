const jwt = require('jsonwebtoken');

const createToken = (id, username, secret, res) => {
  const token = jwt.sign({ id, username }, secret);
  // store token in cookies
  res.cookie('auth-token', token, {
    maxAge: 9999,
    httpOnly: true,
    secure: true,
  });
  return token;
};

module.exports = createToken;
