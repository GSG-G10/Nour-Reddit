const connection = require('../config/connection');

exports.getUserPosts = (userId) => {
  const sql = {
    text: 'SELECT content FROM posts user_id VALUES($1)',
    values: [userId],
  };

  return connection.query(sql);
};
