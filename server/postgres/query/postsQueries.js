const connection = require('../config/connection');

exports.addPost = (title, text, userId) => {
  const sql = {
    text: 'INSERT INTO posts (title, content, user_id) VALUES($1,$2,$3) RETURNING *',
    values: [title, text, userId],
  };

  return connection.query(sql);
};
