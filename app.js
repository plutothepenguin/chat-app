var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var messages = [];
app.use(bodyParser.urlencoded({extended: true}));



app.get('/', function(req, res) {
  res.render('home.ejs', {messages: messages});
})
app.post('/send', function(req, res) {
  messages.push(req.body.text);
  res.redirect('/');
})
app.listen(3000, function() {
  console.log('Server started.');
});
