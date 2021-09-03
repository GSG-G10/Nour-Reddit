const path = require('path');
const { addPost } = require('../postgres/query/postsQueries');

exports.createPost = async (req, res) => {
  const { id } = req.user;
  const { title, content, subreddit } = req.body;

  try {
    await addPost(title, content, subreddit, id);
  } catch (err) {
    console.log(err);
    res.status(500).send('Sorry, internal server error 500!');
  }
};

exports.createPostGet = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'pages', 'post.html'));
};
