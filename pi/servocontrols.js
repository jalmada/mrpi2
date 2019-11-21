const Gpio = require('pigpio').Gpio;

const rpio = require('rpio');

var options = {
    gpiomem: false,          /* Use /dev/gpiomem */
    mapping: 'gpio',    /* Use the P1-P40 numbering scheme */
    mock: undefined,        /* Emulate specific hardware in mock mode */
}

rpio.init(options);

const pinNo = 4 //This is using the normal PCI positions not the Board

export default {
    MoveServo : (degreesPosition) => {

        rpio.init(options);


        let servoPin = new Gpio(pinNo, {mode: Gpio.OUTPUT});
        let modulation = rpio.open(pinNo, rpio.PWM);

    }
}
