exports.logoutRouter = (req, res) => {
  res.clearCookie('authToken');
  res.redirect('/');
};
