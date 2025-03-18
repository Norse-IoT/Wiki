# The Occupancy Project
## Opera Box Sensing Project

Goal: Detect when people are in the opera boxes.

## Method 1: Detect how many people pass through the door**

`	`**Using: Ultrasonic Sensors**

`	`{MORE DETAILS NEEDED: SEE GEORGE & GABE}

## Method 2: Detect when there are any number of humans in the room**

- **Using: Passive infrared sensors??**

  - Normally, there are 3 main types of IR sensors that come up when you Google them:

    - *Active:* [Active Reflective Obstacle Avoidance](https://www.amazon.com/dp/B08DR1W3BK) (sends IR and reads it back to get distance)
    - [Break Beam Sensor](https://www.amazon.com/dp/B01BU6YBWU) (detects when someone passes through the door)

- *Passive:* [Passive](https://www.amazon.com/dp/B07KZW86YR/)[ ](https://www.amazon.com/dp/B07KZW86YR/)[IR](https://www.amazon.com/dp/B07KZW86YR/)[ ](https://www.amazon.com/dp/B07KZW86YR/)[Motion](https://www.amazon.com/dp/B07KZW86YR/)[ ](https://www.amazon.com/dp/B07KZW86YR/)[Detector](https://www.amazon.com/dp/B07KZW86YR/) - [Link](https://cdn-learn.adafruit.com/downloads/pdf/pir-passive-infrared-proximity-motion-sensor.pdf)[ ](https://cdn-learn.adafruit.com/downloads/pdf/pir-passive-infrared-proximity-motion-sensor.pdf)[to](https://cdn-learn.adafruit.com/downloads/pdf/pir-passive-infrared-proximity-motion-sensor.pdf)[ ](https://cdn-learn.adafruit.com/downloads/pdf/pir-passive-infrared-proximity-motion-sensor.pdf)[AdaFruit](https://cdn-learn.adafruit.com/downloads/pdf/pir-passive-infrared-proximity-motion-sensor.pdf)[ ](https://cdn-learn.adafruit.com/downloads/pdf/pir-passive-infrared-proximity-motion-sensor.pdf)[Datasheet](https://cdn-learn.adafruit.com/downloads/pdf/pir-passive-infrared-proximity-motion-sensor.pdf)

(detects motion by using two IR sensors, and seeing when the readings pass between them)

- All of these use basic IR sensors but then add more functionality.

- So, I don’t believe any of these could just sense how much IR is in a room.

Just the sensor:

- [Pyroelectric Sensors](https://cdn-learn.adafruit.com/assets/assets/000/010/137/original/pyroelectrics21e.pdf)

- [IRA-E700ST0](https://www.murata.com/en-eu/api/pdfdownloadapi?cate=luInfraredSensors&partno=IRA-E700ST0)

- [Mouse Datasheet](https://www.mouser.com/datasheet/2/281/s21e-522733.pdf)  

## Experimentation Needed:

- I would be interested in seeing what would happen if we use the PIR sensor set to very sensitive with “retriggering mode”.

- Does it reliably detect human presence?

- Can we tap into the sensors directly?
