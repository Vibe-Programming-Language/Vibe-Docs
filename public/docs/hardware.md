# Hardware & Embedded Programming with Vibe

## Overview

**vibe.hardware** enables programming microcontrollers and embedded systems with Vibe. Write code once, deploy to **Arduino**, **Raspberry Pi**, **ESP32**, **STM32**, and more—all with identical APIs.

## Supported Platforms

| Platform | Status | Features |
|----------|--------|----------|
| Arduino UNO/Mega | ✅ | GPIO, PWM, ADC, Serial, I2C, SPI |
| Raspberry Pi | ✅ | GPIO, PWM, Hardware PWM, I2C, SPI |
| Raspberry Pi Pico | ✅ | GPIO, PWM, ADC, UART, I2C, SPI |
| ESP32 | ✅ | GPIO, PWM, ADC, DAC, WiFi (module) |
| ESP8266 | ✅ | GPIO, PWM, UART, WiFi |
| STM32 | ✅ | GPIO, PWM, ADC, Hardware Timers |

## GPIO (General Purpose Input/Output)

### Digital Output (LED Control)

```vibe
import vibe.hardware;

// Initialize GPIO pin 13 as output
var led = hardware.GPIO(13);
led.pinMode(hardware.GPIO_Mode.OUTPUT);

// Turn LED on
led.digitalWrite(hardware.PinLevel.HIGH);

// Turn LED off
led.digitalWrite(hardware.PinLevel.LOW);

// Toggle
led.digitalWrite(true);   // HIGH
led.digitalWrite(false);  // LOW
```

### Digital Input (Button Reading)

```vibe
import vibe.hardware;

// Initialize GPIO pin 2 as input
var button = hardware.GPIO(2);
button.pinMode(hardware.GPIO_Mode.INPUT);

// Read button state
if button.digitalRead() == hardware.PinLevel.HIGH {
    print("Button pressed!");
}

// Convenience methods
if button.isHigh() {
    print("Button is pressed");
} else if button.isLow() {
    print("Button is released");
}
```

### Pull-up & Pull-down Resistors

```vibe
// Input with pull-up (Raspberry Pi example)
var button = hardware.GPIO(17);
button.pinMode(hardware.GPIO_Mode.INPUT_PULLUP);

// Input with pull-down
var sensor = hardware.GPIO(22);
sensor.pinMode(hardware.GPIO_Mode.INPUT_PULLDOWN);
```

## PWM (Pulse Width Modulation)

Control LED brightness, motor speed, and more.

```vibe
import vibe.hardware;

// Initialize PWM on pin 9 (Arduino has PWM on 3,5,6,9,10,11)
var pwm = hardware.PWM(9, 1000, 128);  // pin, frequency (Hz), duty cycle (0-255)

// Set duty cycle (0-100%)
pwm.setDutyCycle(50);   // 50% brightness
pwm.setDutyCycle(75);   // 75% brightness
pwm.setDutyCycle(25);   // 25% brightness

// Fade effect
fn fadeIn() {
    for brightness in 0..256 {
        pwm.setDutyCycle(brightness);
        hardware.time.delay(10);
    }
}

fn fadeOut() {
    for brightness in 255..0 {
        pwm.setDutyCycle(brightness);
        hardware.time.delay(10);
    }
}

fadeIn();
fadeOut();
```

## ADC (Analog-Digital Converter)

Read analog sensor values.

```vibe
import vibe.hardware;

// Initialize ADC on pin A0 (analog input)
var sensor = hardware.ADC(0);  // A0 on Arduino
sensor.setResolution(10);       // 10-bit (0-1023)

// Read raw value
var rawValue = sensor.read();
print("Sensor: " + rawValue);

// Read as voltage (assuming 5V reference)
var voltage = sensor.readVoltage(5.0);
print("Voltage: " + voltage + "V");

// Temperature sensor example (LM35)
var tempSensor = hardware.ADC(1);  // A1
fn readTemperature() {
    var raw = tempSensor.read();
    var voltage = (raw / 1023.0) * 5.0;
    var tempC = voltage * 100;  // LM35: 10mV per °C
    return tempC;
}

print("Temperature: " + readTemperature() + "°C");
```

## Serial Communication (UART)

Communicate with computers and other microcontrollers.

```vibe
import vibe.hardware;

// Initialize Serial at 9600 baud (standard Arduino)
var serial = hardware.Serial(9600);
serial.begin();

// Write data
serial.write(0x48);              // Send byte
serial.write("Hello");           // Send string
serial.write("World\n");         // With newline
serial.println("Hello, Arduino!");  // Explicit newline

// Flush buffer
serial.flush();

// Check if data available
if serial.available() > 0 {
    var byte = serial.read();
    print("Received: " + byte);
}

// Read line (waits up to 1000ms)
var line = serial.readLine(1000);
print("Got: " + line);

// Formatted output
serial.printf("Value: %d, Voltage: %.2f\n", 42, 3.14);
```

## I2C Communication

Connect multiple sensors/devices on 2 wires.

```vibe
import vibe.hardware;

// Initialize I2C (SDA=20, SCL=21 for Raspberry Pi Pico)
var i2c = hardware.I2C(20, 21);
i2c.begin(100000);  // 100 kHz standard

// Scan for devices
var devices = i2c.scanBus();
for addr in devices {
    print("Found device at 0x" + addr);
}

// Read from a sensor (temperature sensor at 0x48)
fn readTemp() {
    i2c.beginTransmission(0x48);
    i2c.write(0x00);  // Temperature register
    i2c.endTransmission();
    
    i2c.requestFrom(0x48, 2);  // Request 2 bytes
    if i2c.available() >= 2 {
        var highByte = i2c.read();
        var lowByte = i2c.read();
        var temp = (highByte << 4 | lowByte >> 4) * 0.0625;
        return temp;
    }
    return 0;
}

print("Temperature: " + readTemp() + "°C");

// Write to device
fn writeToDevice() {
    i2c.beginTransmission(0x50);  // EEPROM
    i2c.write(0x00);   // Address
    i2c.write(0xFF);   // Data
    i2c.endTransmission();
}
```

## SPI Communication

High-speed serial protocol for SD cards, displays, accelerometers.

```vibe
import vibe.hardware;

// Initialize SPI (MOSI=11, MISO=12, CLK=13, CS=10 for Arduino)
var spi = hardware.SPI(11, 12, 13, 10);
spi.begin(1000000);  // 1 MHz

// Set SPI mode
spi.setMode(hardware.SPI.Mode.MODE0);  // CPOL=0, CPHA=0

// Read/write single byte
spi.beginTransaction();
var response = spi.transfer(0xA5);  // Send 0xA5
spi.endTransaction();

print("SPI Response: 0x" + response);

// Transfer buffer
fn readAccelerometer() {
    spi.beginTransaction();
    spi.chipSelect(true);  // Active low
    
    spi.transfer(0x32);    // Register address
    
    var data = [0xFF, 0xFF, 0xFF];  // Read 3 bytes
    spi.transfer(data);
    
    spi.chipSelect(false);
    spi.endTransaction();
    
    return data;
}
```

## Timing & Delays

```vibe
import vibe.hardware;

// Get current time (microseconds)
var startMicros = hardware.time.micros();

// Delay in microseconds
hardware.time.delayMicros(100);  // 100 microseconds

// Get current time (milliseconds)  
var startMillis = hardware.time.millis();

// Delay in milliseconds
hardware.time.delay(1000);  // 1 second = 1000 ms

// Periodic timer
var timer = hardware.time.Timer(500);  // 500ms interval
timer.setCallback(() => {
    print("Timer fired!");
});

timer.start();

// In main loop
fn loop() {
    timer.tick();  // Returns true when interval elapsed
}
```

## Complete Examples

### Arduino: LED Blink

```vibe
import vibe.hardware;

// Pin 13 is the built-in LED on most Arduino boards
var led = hardware.GPIO(13);
led.pinMode(hardware.GPIO_Mode.OUTPUT);

fn setup() {
    print("LED blink started");
}

fn loop() {
    led.digitalWrite(hardware.PinLevel.HIGH);
    hardware.time.delay(1000);
    
    led.digitalWrite(hardware.PinLevel.LOW);
    hardware.time.delay(1000);
}

// Main
while true {
    setup();
    loop();
}
```

### Raspberry Pi: Button-Controlled LED

```vibe
import vibe.hardware;

var led = hardware.GPIO(17);    // GPIO17
var button = hardware.GPIO(27); // GPIO27

led.pinMode(hardware.GPIO_Mode.OUTPUT);
button.pinMode(hardware.GPIO_Mode.INPUT_PULLUP);

var state = false;

while true {
    if button.isLow() {  // Button pressed (active low with pull-up)
        state = !state;
        
        if state {
            led.digitalWrite(hardware.PinLevel.HIGH);
            print("LED ON");
        } else {
            led.digitalWrite(hardware.PinLevel.LOW);
            print("LED OFF");
        }
        
        hardware.time.delay(200);  // Debounce
    }
}
```

### Arduino: Temperature Sensor (I2C)

```vibe
import vibe.hardware;

var i2c = hardware.I2C(20, 21);
i2c.begin(100000);

var serial = hardware.Serial(9600);
serial.begin();

fn readTemp() {
    i2c.beginTransmission(0x48);
    i2c.write(0x00);
    i2c.endTransmission();
    
    i2c.requestFrom(0x48, 2);
    
    var high = i2c.read();
    var low = i2c.read();
    
    return (high << 4 | low >> 4) * 0.0625;
}

while true {
    var temp = readTemp();
    serial.println("Temperature: " + temp + "°C");
    hardware.time.delay(2000);
}
```

### Raspberry Pi Pico: Analog Sensor with Serial

```vibe
import vibe.hardware;

var adc = hardware.ADC(26);     // ADC0
var serial = hardware.Serial(9600);

serial.begin();

while true {
    var raw = adc.read();
    var voltage = (raw / 4095.0) * 3.3;  // Pico: 3.3V, 12-bit
    
    serial.printf("Raw: %d, Voltage: %.2fV\n", raw, voltage);
    
    hardware.time.delay(1000);
}
```

## Compilation for Different Platforms

```bash
# Compile for Arduino UNO
vibe build sketch.vibe --target arduino-uno --output sketch.hex

# Compile for Raspberry Pi
vibe build app.vibe --target raspberry-pi --output app

# Compile for ESP32
vibe build firmware.vibe --target esp32 --output firmware.bin
```

## Platform Detection

```vibe
import vibe.hardware;

var platform = hardware.platform.detect();
var platformName = hardware.platform.getPlatformName();

print("Running on: " + platformName);
print("GPIO count: " + hardware.platform.getGPIOCount());
print("ADC channels: " + hardware.platform.getADCChannels());
print("Max frequency: " + hardware.platform.getMaxFrequency() + " Hz");

// Conditional code
match platform {
    case hardware.PlatformType.ARDUINO_UNO:
        print("Arduino UNO - 2KB RAM");
        
    case hardware.PlatformType.RASPBERRY_PI:
        print("Pi - 1GB+ RAM");
        
    case hardware.PlatformType.ESP32:
        print("ESP32 - 8MB Flash");
}
```

## Troubleshooting

**Serial output not appearing?**
- Check baud rate matches (usually 9600)
- Verify serial monitor is connected
- Try different COM port

**Sensor not responding?**
- Verify I2C address (use scanBus())
- Check pull-up resistors (4.7kΩ typical)
- Verify power connections

**GPIO pin not working?**
- Check pin isn't used for serial/SPI
- Verify pin mode is set correctly
- Check for conflicting interrupts

