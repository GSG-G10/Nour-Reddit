const connection = require('../config/connection');

exports.getUserPosts = (userId) => {
  const sql = {
    text: 'SELECT content FROM posts WHERE user_id = $1',
    values: [userId],
  };

  return connection.query(sql);
};
