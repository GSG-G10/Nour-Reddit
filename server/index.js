const express = require('express');
const path = require('path');
const registerRouter = require('./controllers/register');
const loginRouter = require('./controllers/login');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route middleware
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

app.post('/login', loginRouter);
app.post('/register', registerRouter);

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
});

// app.post('/register', (req, res) => {
//   console.log(req.body);
// });

// app.post('/register', async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     users.push({
//       id: Date.now().toString(),
//       name: req.body.name,
//       email: req.body.email,
//       password: hashedPassword,
//     });
//     res.redirect('/login');
//   } catch {
//     res.redirect('/register');
//   }
// });

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`app is running at http://localhost:${port}`);
});
