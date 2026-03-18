# Vibe GUI Framework (vibe.ui) Documentation

## Overview

The **vibe.ui** framework provides cross-platform GUI (Graphical User Interface) components for building interactive desktop applications. With vibe.ui, you can create windows, buttons, text boxes, canvases, and more using simple Vibe code.

## Supported Platforms

- **Windows** (Win32 API)
- **macOS** (Cocoa)
- **Linux** (GTK / X11)
- **Web** (via WebAssembly)

## Core Concepts

### Widgets

Widgets are the building blocks of UIs. Each widget represents a visual element that can be displayed and interacted with.

**All widgets inherit from `Widget` and support:**

- **Position & Size**: `setPosition(x, y)`, `setSize(w, h)`, `setBounds(rect)`
- **Colors**: `setBackgroundColor(color)`, `setForegroundColor(color)`
- **Visibility**: `setVisible(bool)`
- **Events**: `subscribe(handler)`

### Window

The `Window` is the main container for your application.

```vibe
import vibe.ui;

var window = ui.Window("My App", 800, 600);
window.setTitle("Updated Title");
var size = window.getSize();  // Size{width: 800, height: 600}

window.addWidget(myButton);
window.show();  // Start the main event loop
```

## Built-in Widgets

### Label - Static Text

Displays non-interactive text.

```vibe
var label = ui.Label("Hello, World!");
label.setPosition(10, 10);
label.setText("Updated text");
```

### Button - Interactive Button

Triggers actions when clicked.

```vibe
var button = ui.Button("Click Me", 100, 40);
button.setPosition(50, 50);

button.setOnClick(() => {
    print("Button was clicked!");
});

window.addWidget(button);
```

### TextBox - Text Input

Allows users to enter text.

```vibe
var input = ui.TextBox(200, 30);
input.setPosition(10, 100);
input.setMaxLength(100);

// Get entered text
var userInput = input.getText();

// Set text programmatically
input.setText("Default value");

// Check if focused
if input.isFocused() {
    print("User is typing...");
}
```

### Canvas - Drawing Surface

Raw pixel-level drawing for graphics, games, and visualizations.

```vibe
var canvas = ui.Canvas(400, 400);

// Clear background
canvas.clear(ui.Color.White);

// Draw shapes
canvas.drawRect(10, 10, 100, 50, ui.Color.Red, true);      // filled
canvas.drawRect(10, 10, 100, 50, ui.Color.Black, false);   // outlined

canvas.drawCircle(200, 200, 30, ui.Color.Blue, true);
canvas.drawLine(0, 0, 400, 400, ui.Color.Green);
canvas.drawText(50, 50, "Score: 100", ui.Color.Black);

window.addWidget(canvas);
```

### Panel - Container

Groups other widgets together.

```vibe
var panel = ui.Panel(300, 200);
panel.setPosition(20, 20);
panel.setBackgroundColor(ui.Color.Gray);

var label = ui.Label("Panel Title");
var button = ui.Button("OK", 80, 30);

panel.addChild(label);
panel.addChild(button);

window.addWidget(panel);
```

## Colors

Pre-defined standard colors:

```vibe
ui.Color.Black       // RGB(0, 0, 0)
ui.Color.White       // RGB(255, 255, 255)
ui.Color.Red         // RGB(255, 0, 0)
ui.Color.Green       // RGB(0, 255, 0)
ui.Color.Blue        // RGB(0, 0, 255)
ui.Color.Yellow      // RGB(255, 255, 0)
ui.Color.Cyan        // RGB(0, 255, 255)
ui.Color.Magenta     // RGB(255, 0, 255)
ui.Color.Gray        // RGB(128, 128, 128)
```

**Custom colors:**

```vibe
var myColor = ui.Color(200, 100, 50);           // RGB
var withAlpha = ui.Color(200, 100, 50, 128);    // RGBA
```

## Event Handling

Respond to user input like clicks and keyboard presses.

```vibe
var button = ui.Button("Press Me");

// Click handler
button.setOnClick(() => {
    print("Button clicked!");
});

// Generic event handler
button.subscribe((event) => {
    match event.type {
        case EventType.MouseDown:
            print("Mouse pressed on button");
        case EventType.MouseUp:
            print("Mouse released on button");
    }
});
```

### Event Types

- `EventType.KeyDown` - Key pressed
- `EventType.KeyUp` - Key released
- `EventType.MouseDown` - Mouse button pressed
- `EventType.MouseUp` - Mouse button released
- `EventType.MouseMove` - Mouse moved
- `EventType.MouseWheel` - Scroll wheel
- `EventType.WindowResize` - Window resized
- `EventType.WindowClose` - Window closed

### Event Properties

```vibe
window.setEventCallback((event) => {
    match event.type {
        case EventType.KeyDown:
            var key = event.key.keyCode;
            var char = event.key.character;
            var shift = event.key.shift;
            var ctrl = event.key.ctrl;
            
        case EventType.MouseMove:
            var x = event.mouse.x;
            var y = event.mouse.y;
            
        case EventType.WindowResize:
            var newWidth = event.windowSize.width;
            var newHeight = event.windowSize.height;
    }
});
```

## Layout Helpers

Organize widgets automatically.

```vibe
var panel = ui.Panel(200, 400);

var btn1 = ui.Button("Button 1", 100, 40);
var btn2 = ui.Button("Button 2", 100, 40);
var btn3 = ui.Button("Button 3", 100, 40);

panel.addChild(btn1);
panel.addChild(btn2);
panel.addChild(btn3);

// Vertical layout (stack vertically)
ui.VBoxLayout.layout(panel, 10);  // 10px spacing

// Horizontal layout (stack horizontally)
ui.HBoxLayout.layout(panel, 10);
```

## Complete Example: Simple Counter App

```vibe
import vibe.ui;

var window = ui.Window("Counter App", 300, 200);

var count = 0;
var display = ui.Label("Counter: 0");
display.setPosition(20, 20);

var incrementBtn = ui.Button("Increment", 100, 40);
incrementBtn.setPosition(20, 70);

var decrementBtn = ui.Button("Decrement", 100, 40);
decrementBtn.setPosition(150, 70);

var resetBtn = ui.Button("Reset", 100, 40);
resetBtn.setPosition(20, 130);

// Increment button
incrementBtn.setOnClick(() => {
    count = count + 1;
    display.setText("Counter: " + count);
});

// Decrement button
decrementBtn.setOnClick(() => {
    count = count - 1;
    display.setText("Counter: " + count);
});

// Reset button
resetBtn.setOnClick(() => {
    count = 0;
    display.setText("Counter: 0");
});

window.addWidget(display);
window.addWidget(incrementBtn);
window.addWidget(decrementBtn);
window.addWidget(resetBtn);

window.show();
```

## Drawing Canvas Example: Simple Drawing App

```vibe
import vibe.ui;

var canvas = ui.Canvas(600, 500);
var window = ui.Window("Drawing App", 600, 500);

var isDrawing = false;
var lastX = 0, lastY = 0;

canvas.clear(ui.Color.White);

window.setEventCallback((event) => {
    match event.type {
        case EventType.MouseDown:
            isDrawing = true;
            lastX = event.mouse.x;
            lastY = event.mouse.y;
            
        case EventType.MouseMove:
            if isDrawing {
                canvas.drawLine(
                    lastX, lastY,
                    event.mouse.x, event.mouse.y,
                    ui.Color.Black
                );
                lastX = event.mouse.x;
                lastY = event.mouse.y;
            }
            
        case EventType.MouseUp:
            isDrawing = false;
    }
});

window.addWidget(canvas);
window.show();
```

## Tips & Best Practices

1. **Always set position and size** - Widgets won't appear without explicit dimensions
2. **Use meaningful colors** - Stick to standard colors unless custom branding needed
3. **Test on multiple platforms** - GUI may render differently on Windows/Mac/Linux
4. **Handle window close gracefully** - Clean up resources in event handlers
5. **Cache widget references** - Don't lookup widgets by iterating each frame

## Troubleshooting

**Widgets not appearing?**
- Check position is within window bounds
- Verify widget was added with `window.addWidget()`
- Ensure `window.show()` is called

**Click not working?**
- Confirm `setOnClick()` was called with a handler
- Check z-order (overlapping widgets)

**Window stuck/frozen?**
- Make sure event loop is running (`window.show()`)
- Don't block in event handlers with long operations
