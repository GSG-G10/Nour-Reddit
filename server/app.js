require('env2')('./.env');
const path = require('path');
const express = require('express');
const compresion = require('compression');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const { privateRoute } = require('./middlewares/privateRoute');
const { createPost } = require('./controllers/createPostController');

const app = express();

app.set('PORT', process.env.PORT || 3000);
app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.json());
app.use(compresion());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', authRoutes);
app.use('/', postRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
// app.get('/post', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'post.html'));
// });
// app.post('/post', privateRoute, createPost);

module.exports = app;
