var Gpio = require('onoff').Gpio; 
var express = require('express');
var app = express();
var blinkInterval = null;

var LED = new Gpio(24, 'out');;
app.use(express.static('public'));

app.get('/teabo', function (req, res) {
  res.send('Hola Esposi Te abo mucho, eres mi favorita!!');
});

app.post('/ledon', function (req, res) {
  blinkInterval = setInterval(blinkLED, 250);
});

app.post('/ledoff', function (req, res) {
  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function blinkLED() { //function to start blinking
  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }
}