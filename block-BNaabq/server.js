// Create a basic express server
var express = require('express');

var app = express();

var logger = require('morgan');

var cookieParser = require('cookieparser');

app.use(logger('dev'));

app.use(cookieParser());

app.use('/about', (res, req, next) => {
  console.log(req.cookies);
  res.cookie('username', 'suraj');
  next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(4000, () => {
  console.log('Server listening to port 4k');
});
