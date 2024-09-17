# Getting Started - LED via Serial

You can control your builtin led via the serial monitor in your Arduino IDE.

If you've recently started with the Blink demo, you should have something that looks like this:

```cpp
const int pin = LED_BUILTIN;

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

Then, you can add this:

```diff
const int pin = LED_BUILTIN;

void setup() {
+  Serial.begin(115200);
  pinMode(pin, OUTPUT);
}

bool state = HIGH;

void loop() {
  digitalWrite(pin, state);
-  state = !state;
-  delay(1000);
+  Serial.print("The pin state is: ");
+  Serial.println(state);
+
+  String input = Serial.readStringUntil('\n');
+  Serial.print("recieved: ");
+  Serial.println(input);
+
+  if (input.equals("on")) {
+    state = HIGH;
+  } else if (input.equals("off")) {
+    state = LOW;
+  }
}
```

So, now you should be able to control whether the internal id is on or off.

If you enter "on" into the Serial prompt, it should turn the LED on.

If you enter "off" into the Serial prompt, it will turn the LED off.

```cpp
const int pin = LED_BUILTIN;
void setup() {
  pinMode(pin, OUTPUT);
  Serial.begin(115200);
}

bool state = HIGH;

void loop() {
  digitalWrite(pin, state);
  Serial.print("The pin state is: ");
  Serial.println(state);

  String input = Serial.readStringUntil('\n');
  Serial.print("recieved: ");
  Serial.println(input);

  if (input.equals("on")) {
    state = HIGH;
  } else if (input.equals("off")) {
    state = LOW;
  }
}
```



