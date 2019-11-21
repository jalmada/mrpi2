import RPi.GPIO as GPIO
from time import sleep

GPIO.setmode(GPIO.BOARD)
GPIO.setup(7, GPIO.OUT)

#by doing this we have a50 pulses per second
#which means each pulse will be 20ms which is to long 
#for servo movements.
#by changing the duty cicle we can reduce the pulse time
p = GPIO.PWM(7, 60)
p.start(0)

def SetAngle(angle):
	duty = angle/18 + 2.5
	print(f'{duty}:{angle}')
#	GPIO.output(7, GPIO.HIGH)
	p.ChangeDutyCycle(duty)
	sleep(1)
#	GPIO.output(7, GPIO.LOW)
	p.ChangeDutyCycle(0)


try:
	while True:
		SetAngle(0)
		sleep(1.5)
		SetAngle(90)
		sleep(1.5)
		SetAngle(180)
		sleep(1.5)
#Explains what is a duty cycle.
#we want pulses of:
#0.5 ms for <- = 0.5ms / 20ms = 2.5% (this value is used to choose the Duty Cycle
#1.5 ms for ^ = 1.5ms / 20ms = 7.5% (neutral)
#2.5 ms for -> = 2.5ms / 20ms = 12.5%
#https://www.youtube.com/watch?v=ddlDgUymbxc
		#p.ChangeDutyCycle(2.5)
		#time.sleep(1)
		#p.ChangeDutyCycle(5)
		#time.sleep(1)
		#p.ChangeDutyCycle(7.5)
		#time.sleep(1)
		#p.ChangeDutyCycle(10)
		#time.sleep(1)
		#p.ChangeDutyCycle(12.5)
		#time.sleep(1)

except KeyboardInterrupt:
	p.stop()
	GPIO.cleanup()
