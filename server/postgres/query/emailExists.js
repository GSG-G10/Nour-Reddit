const connection = require('../config/connection');

const emailExists = (email) => {
  const sql = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  };

  return connection.query(sql);
};

module.exports = emailExists;
