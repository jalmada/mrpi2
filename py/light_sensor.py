#!/usr/local/bin/python

import RPi.GPIO as GPIO
import time

__author__ = 'Gus (Adapted from Adafruit)'
__license__ = "GPL"
__maintainer__ = "pimylifeup.com"

GPIO.setmode(GPIO.BOARD)

#define the pin that goes to the circuit
pin_to_circuit = 11

def rc_time (pin_to_circuit):
    count = 0
  
    #Output on the pin for 
    GPIO.setup(pin_to_circuit, GPIO.OUT)
    GPIO.output(pin_to_circuit, GPIO.LOW)
    time.sleep(0.1)

    #Change the pin back to input
    GPIO.setup(pin_to_circuit, GPIO.IN)
  
    #Count until the pin goes high
    while (GPIO.input(pin_to_circuit) == GPIO.LOW):
        count += 1

    return count

#Catch when script is interupted, cleanup correctly
try:
    GPIO.setup(18,GPIO.OUT)
    # Main loop
    while True:
        light_value = rc_time(pin_to_circuit)
        if light_value > 9500:
            GPIO.output(18,GPIO.HIGH)
        else:
            GPIO.output(18,GPIO.LOW)
#        print(light_value)
except KeyboardInterrupt:
    pass
finally:
    GPIO.output(18,GPIO.LOW)
    GPIO.cleanup()
