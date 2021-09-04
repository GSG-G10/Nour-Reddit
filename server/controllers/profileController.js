const { getUserPosts } = require('../postgres/query/getUserPosts');
const { getUserId } = require('../postgres/query/getUserIdByName');

exports.profile = async (req, res) => {
  const { authToken } = req.cookies;
  if (authToken) {
    const username = req.params.user;
    const userId = await getUserId(username);
    // retrieve user's posts from database
    const posts = await getUserPosts(userId);
    res.json(posts);
  }
};
