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
            const servo = new pwm.SoftPWM('GPIO4', 60);
            let duty = ((degreesPosition/18) + 2.5)/100;
            servo.write(duty);
            setTimeout(clear, 1000);
        });
    }
}
