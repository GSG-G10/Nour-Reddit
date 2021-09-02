const jwt = require('jsonwebtoken');

exports.createToken = (id, username, secret, res) => {
  const token = jwt.sign({ id, username }, secret);
  // store token in cookies
  res.cookie('authToken', token, {
    maxAge: 9999,
    httpOnly: true,
    secure: true,
  });
  return token;
};
