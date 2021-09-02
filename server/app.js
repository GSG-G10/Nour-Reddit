require('env2')('./.env');
const path = require('path');
const express = require('express');
const compresion = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./routes/auth');

const app = express();

app.set('PORT', process.env.PORT || 3000);
app.disable('x-powered-by');
app.use(express.json());
app.use(cookieParser());
app.use(compresion());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
});

module.exports = app;
