const connection = require('../config/connection');

exports.addPost = (title, text, subreddit, userId) => {
  const sql = {
    text: 'INSERT INTO posts (title, content, subreddit, user_id  ) VALUES($1,$2,$3,$4) RETURNING *',
    values: [title, text, subreddit, userId],
  };

  return connection.query(sql);
};
