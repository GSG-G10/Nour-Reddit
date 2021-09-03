const router = require('express').Router();

const registerRouter = require('../controllers/registerController');
const loginRouter = require('../controllers/loginController');
const logoutRouter = require('../controllers/logoutController');

router.post('/register', registerRouter);
router.post('/login', loginRouter);
router.get('/logout', logoutRouter);

module.exports = router;
