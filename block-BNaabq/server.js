// Create a basic express server
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookieparser');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use(cookieParser());
app.use(logger('dev'));

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.use('/about', (req, res, next) => {
  res.cookie('username', 'suraj');
  res.end('About Page');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(4000, () => {
  console.log('Server listening to port 4k');
});
