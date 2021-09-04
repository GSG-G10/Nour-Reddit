const connection = require('../config/connection');

exports.getUserId = (username) => {
  const sql = {
    text: 'SELECT id FROM users username VALUES($1)',
    values: [username],
  };

  return connection.query(sql);
};
