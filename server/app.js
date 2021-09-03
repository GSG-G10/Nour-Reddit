require('env2')('./.env');
const path = require('path');
const express = require('express');
const compresion = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./routes/auth');
const { private } = require('./middlewares/privateRoute');

const app = express();

app.set('PORT', process.env.PORT || 3000);
app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.json());
app.use(compresion());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
app.get('/post',private ,(req, res) => {
  console.log(req.user.username);
  res.json('HIIII Auth!');
});



module.exports = app;
