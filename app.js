var express = require('express');
var app = express();


//set view directory
app.set('views', './views')
app.set('view engine', 'jade')

//routes
app.get('/', function (req, res) {
  res.render('index');
})

//start server
app.listen(3000)