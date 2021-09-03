const logoutRouter = (req, res) => {
  res.clearCookie('authToken');
  res.redirect('/');
};

module.exports = logoutRouter;
