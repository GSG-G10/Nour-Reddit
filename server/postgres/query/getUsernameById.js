const connection = require('../config/connection');

exports.getUserPosts = (username) => {
  const sql = {
    text: 'SELECT id FROM users username VALUES($1)',
    values: [username],
  };

  return connection.query(sql);
};
