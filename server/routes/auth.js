const router = require('express').Router();

const registerRouter = require('../controllers/registerController');
const loginRouter = require('../controllers/loginController');

router.post('/register', registerRouter);
router.post('/login', loginRouter);

module.exports = router;
