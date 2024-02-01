# Frankencaster
Pinout info for an ESP-32 powered Rock Band guitar.

The goal of the first prototype was to design a solderless replacement for the internal board of a Rock Band Genericaster. A majority of other alternatives make use of a Raspberry Pi Pico, which requires soldering. Future reworks will focus on building new guitars that don't require any used hardware.

[Code on Github](https://github.com/Norse-IoT/Frankencaster)

| Pin      | Button | Mapping |
| -------- | ------ | ------ |
| `GIOP23` | Green (A)     | BUTTON_1 |
| `GIOP22` | Red (B)       | BUTTON_2 |
| `GIOP21` | Yellow (Y)    | BUTTON_4 |
| `GIOP4`  | Blue (X)      | BUTTON_8 |
| `GIOP15` | Orange (RB)   | BUTTON_5 |
| `GIOP13` | Plus (Start)  | BUTTON_12|
| `GIOP5`  | D-Pad Right   | HAT_RIGHT|
| `GIOP26` | D-Pad Left    | HAT_LEFT |
| `GIOP17` | Strumbar/D-Pad Down | HAT_DOWN |
| `GIOP16` | Strumbar/D-Pad Up | HAT_UP |
| `GIOP2` | Minus (Select) | BUTTON_11 |
| `UNASSIGNED` | Whammy | BUTTON_? |
| `UNASSIGNED` | Home | BUTTON_? |
| `UNASSIGNED` | Pair | BUTTON_? |
