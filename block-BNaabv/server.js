var express = require('express');
var loggger = require('morgan');
var cookieparser = require('cookie-parser');

var app = express();

// middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(loggger('dev'));
app.use(cookieparser());

app.use((req, res, next) => {
  res.cookie('name', 'honeysingh');
  next();
});

app.get('/', (req, res) => {
  res.send(`<h2>Welcome to express</h2>`);
});
app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
  res.send(req.body);
});
app.post('/json', (req, res) => {
  res.send(req.body);
});

app.get('/users/:username', (req, res) => {
  var username = req.params.username;
  res.send(username);
});

app.use('/admin', (req, res, next) => {
  next(unauthorised);
});

app.use((req, res, next) => {
  res.send('Page not found');
  next();
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('listening to 3k ');
});
