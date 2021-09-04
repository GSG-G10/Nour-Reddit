const router = require('express').Router();

const { createPost, createPostGet } = require('../controllers/createPostController');
const { privateRoute } = require('../middlewares/privateRoute');

router.post('/post', privateRoute, createPost);
router.get('/post', privateRoute, createPostGet);

module.exports = router;
