const Gpio = require('pigpio').Gpio;
//const pi = Gpio.
const pinNo = 4 //This is using the normal PCI positions not the Board


export default {
    MoveServo : (degreesPosition) => {
        let servoPin = new Gpio(pinNo, {mode: Gpio.OUTPUT});
        let modulation = Gpio.PWM(7, 60)


    }
}