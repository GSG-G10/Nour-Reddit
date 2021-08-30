const connection = require('../config/connection');

const signup = (username, email, password) => {
  const sql = {
    text: 'INSERT INTO users (username, password, email) VALUES($1,$2,$3) RETURNING *',
    values: [username, password, email],
  };

  return connection.query(sql);
};

module.exports = signup;
