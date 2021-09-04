const router = require('express').Router();

const { profile } = require('../controllers/profileController');

router.get('/:user', profile);

module.exports = router;
