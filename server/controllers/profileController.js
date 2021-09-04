exports.profile = async (req, res) => {
  const { authToken } = req.cookies;
  if (authToken) {
    const username = req.params.user;
    // retrieve user's posts from database
    res.json({ username });
  }
};
