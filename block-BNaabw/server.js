var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  var count = res.cookies.count;
  if (count) {
    res.cookie('count', count + 1);
  } else {
    res.cookie('count', 1);
  }
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/blog.html');
});

app.use((req, res, next) => {
  res.send('Page not found');
});

app.listen(4000, () => {
  console.log('server listening to port 4k');
});
