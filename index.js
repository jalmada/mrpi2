var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var servocontrols = require('./pi/servocontrols.js');

app.use(express.static('public'));
app.use(bodyParser.json())

app.get('/teabo', function (req, res) {
  res.send('Hola Esposi Te abo mucho, eres mi favorita!!');
});

app.post('/move', function (req, res) {

  console.log(req.body);
  servocontrols.MoveServo(parseInt(req.body));
  res.send('Servo Moved!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
