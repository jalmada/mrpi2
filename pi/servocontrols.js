const raspi = require('raspi');
const pwm = require('raspi-soft-pwm');
var lock = false;
function clear() {
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
            const servo = new pwm.PWM('GPIO4', 60);
            let duty = (degreesPosition/18) + 2.5;
            servo.write(duty);
            setTimeout(clear, 1000);
        });
    }
}
