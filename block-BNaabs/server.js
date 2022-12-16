var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get(' /users/:asdf', (req, res) => {
  var username = req.params.asdf;
  res.send(username);
});
app.listen(3000, () => {
  console.log('server listening to port 3k');
});
