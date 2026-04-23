# Destructuring

Vibe allows you to elegantly unpack values from structures into distinct variables bindings using destructuring.

## Object Destructuring

```vibe
class Point {
    public int x = 10;
    public int y = 20;
}

let p = new Point();

// Destructure x and y variables natively into scope
let { x, y } = p;
print(x); // 10
```

## Array Destructuring

```vibe
let colors = ["red", "green", "blue"];
let [first, second, third] = colors;
```