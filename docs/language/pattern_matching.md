# Pattern Matching

Vibe provides powerful and expressive pattern matching constructs, allowing developers to handle complex conditionals without deeply nested `if/else` statements.

## Overview of 'match'

The `match` expression evaluates an assignment and checks its values against a series of patterns. Once a matching pattern evaluates to `true`, the corresponding expression or block runs, and the overall 'match' finishes.

## Basic Example

```vibe
let status = 404;

let errorMsg = match status {
    200 => "OK",
    404 => "Not Found",
    500 => "Internal Server Error",
    _   => "Unknown Code"
};

print(errorMsg); // Outputs "Not Found"
```

## Advanced Patterns

You can combine multiple criteria into match statements, unwrap Enums or Lists, and apply guard conditions.

### Value List & Condition Guards

```vibe
let userAge = 35;

match userAge {
    0 | 1 | 2 => print("Infant"),
    n if n < 13 => print("Child"),
    n if n < 20 => print("Teen"),
    n if n < 65 => print("Adult"),
    _ => print("Senior")
}
```

### Type Matching and Destructuring

If you have highly dynamic maps or interfaces, pattern matching acts as a type analyzer and casting proxy.

```vibe
let data: Any = "Hello World";

match data {
    s: String => print("Found string length: ${s.length()}"),
    i: Int    => print("Found an integer squared: ${i * i}"),
    _         => print("Unknown type")
}
```

## Frequently Asked Questions (FAQ)

### Is pattern matching exhaustive?
Yes. The compiler requires a catch-all wildcard branch (`_`) unless all possible variants of an Enum or sum-type are accounted for in the pattern branches. This guarantees no runtime crashes from unhandled values.

### Can I match nested objects?
Nested object matching is currently supported on basic Collections (Lists, Maps), but deep object properties may need individual accessors until full structural destructuring is implemented in Vibe 2.0.
