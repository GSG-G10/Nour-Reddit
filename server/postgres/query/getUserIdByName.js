const connection = require('../config/connection');

exports.getUserId = async (username) => {
  const sql = {
    text: 'SELECT id FROM users WHERE username = $1',
    values: [username],
  };

  const ret = await connection.query(sql);
  return ret.rows[0].id;
};
