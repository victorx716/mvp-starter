require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser');
var assets = require('../database');

var app = express();

var port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/assets', function (req, res) {
  assets.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, function() {
  console.log(`Tokenize is listening at port ${port}`);
});

