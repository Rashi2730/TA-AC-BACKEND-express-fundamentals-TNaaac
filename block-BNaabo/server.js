// writeCode

// Create a basic express server
var express = require('express');

var app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// Q. Write code to add express.json middleware

app.use(express.json());

// - send json data from postman using POST http method on '/json' route.

// - console.log(req.body) to see all json data in console on a POST route on '/json'.

// app.post('/json', (req, res) => {
//   console.log(req.body);
// });

// Q. Add express.urlencoded as middleware

app.use(express.urlencoded({ extended: false }));

// - send form data from postman on `/contact` route.

// - Access it using req.body on `/contact` route in our server

// app.post('/contact', (req, res) => {
//   console.log(req.body);
// });

// Q. add express.static() as middleware

// - use `public` directory for static assets

app.use(express.static(__dirname + '/public'));

// - Add images in public to
//   - public -> images -> img1.jpg
//   - public -> images -> img2.jpg
// - now request from browser on `/images/img1.jpg`
// - see whether img1.jpg is being served or not ?

yes;

// 2. Add css in public and check whether accessible or not.

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(4000, () => {
  console.log('Server listening to port 4k');
});
