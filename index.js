const Gpio  = require('pigpio').Gpio;
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/teabo', function (req, res) {
  res.send('Hola Esposi Te abo mucho, eres mi favorita!!');
});

app.post('/led', function (req, res) {
  
  let dutyCycle = 0;

  const led = new Gpio (18, {mode: Gpio .OUTPUT});

  setInterval(() => {
    led.pwmWrite(dutyCycle);

    dutyCycle += 5;
    if (dutyCycle > 255) {
      dutyCycle = 0;
    }
}, 20);

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


//proxy22.rt3.io:34912
