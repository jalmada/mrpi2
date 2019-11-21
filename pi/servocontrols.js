const raspi = require('raspi');
const pwm = require('raspi-soft-pwm');
var servo = new pwm.SoftPWM('GPIO4',60);
var lock = false;
function clear() {
    servo.write(0);
    console.log("Servo Moved")    
}

function clear(){
    lock = false;
}

module.exports = {
    MoveServo : (degreesPosition) => {    
        if(!lock){
            lock = true;
        } else {
            return;
        }

        raspi.init(() => {
            let duty = ((degreesPosition/21) + 2.5)/100;
            servo.write(duty);
            setTimeout(clear, 1000);
        });
    }
}
