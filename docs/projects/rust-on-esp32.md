# Rust on ESP32s

Why would you want to use [Rust](https://www.rust-lang.org/)? TL;DR: The performance of C++, with better safety. Also, it's cool. 🦀 🦀 🦀

An associated GitHub repo was created at <https://github.com/Norse-IoT/rust-on-esp32>.

## Installation Instructions

The following instructions were taken from <https://github.com/esp-rs/rust-build#rust-build>.

## Using Rust for ESP32

Step 0: install Rust & Cargo from RustUp
- Go to <https://rustup.rs/>

Step 1:  [Install espup](<https://github.com/esp-rs/rust-build#espup-installation>)
```bash
cargo install espup
espup install # To install Espressif Rust ecosystem
# [Unix]: Source the following file in every terminal before building a project
. $HOME/export-esp.sh
```
Step 2: [RISC-V Installation](<https://github.com/esp-rs/rust-build#risc-v-installation>)

```bash
rustup target add riscv32imc-unknown-none-elf
```
Step 3: [The Cargo First Approach](<https://github.com/esp-rs/rust-build#cargo-first-approach>)
```bash
cargo install cargo-generate
```
```bash
# STD Project
cargo generate esp-rs/esp-idf-template cargo
# NO-STD (Bare-metal) Project
cargo generate esp-rs/esp-template
```
```bash
cargo espflash flash <SERIAL>
# for me, this was cargo espflash flash --port /dev/ttyUSB0
```

# Internal Blink project

The standard sanity check after creating a new project is to create a project that blinks the internal led.

In Rust, we can use:

```rust
//! Blinks the internal led (GPIO pin 2)
//! built for ESP32
//! modified from https://github.com/esp-rs/esp-idf-hal/blob/master/examples/blinky.rs
//! by Zack Sargent

use esp_idf_hal::delay::FreeRtos;
use esp_idf_hal::gpio::*;
use esp_idf_hal::peripherals::Peripherals;

fn main() -> anyhow::Result<()> {
    /* setup - runs once on board start */
    // It is necessary to call this function once. Otherwise some patches to the runtime
    // implemented by esp-idf-sys might not link properly. See https://github.com/esp-rs/esp-idf-template/issues/71
    esp_idf_hal::sys::link_patches();

    esp_idf_svc::log::EspLogger::initialize_default(); // initalize logger

    // The `?` at the end of the following lines means:
    // "If this function returns an error, stop the main function and return that error."
    // It's like throwing an exception.

    let peripherals = Peripherals::take()?; // get list of peripherals
    let mut led = PinDriver::output(peripherals.pins.gpio2)?; // take the GPIO pin 2 as an output device

    log::info!("Connected! Blinking..");

    /* loop - equivalent to a `while(true)` loop in C++ */
    loop {
        led.set_high()?;
        FreeRtos::delay_ms(1000);

        led.set_low()?;
        FreeRtos::delay_ms(1000);
    }
}

// run with `cargo run` or `cargo espflash flash --port <SERIAL>`
```

