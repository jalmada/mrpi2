var express = require('express');
var app = express();
var servocontrols = require('./pi/servocontrols.js');

app.use(express.static('public'));

app.get('/teabo', function (req, res) {
  res.send('Hola Esposi Te abo mucho, eres mi favorita!!');
});

app.post('/move', function (req, res) {

  servocontrols.MoveServo(100);
  res.send('Servo Moved!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
