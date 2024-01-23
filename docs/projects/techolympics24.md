# TechOlympics 2024

This guide is designed to assist students with the "Building the Connected Future with IoT" session at TechOlympics 2024.

Here is the [presentation](https://docs.google.com/presentation/d/1B0s1GWxGJs90X0qqKkggmbycxGw6E46TyPBw5wbtO-Q/edit?usp=sharing) for the session.

This is the code for the Internal LED Blink test. Use this code first to ensure that a stable connection exists.
```
int pin = 2;

void setup() {
  pinMode(pin, OUTPUT);
}

bool state = HIGH;

void loop() {
  digitalWrite(pin, state);
  state = !state;
  delay(1000);
}
```

The final expected code will be published here ↓


```
Hello World
```
