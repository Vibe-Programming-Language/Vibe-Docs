# Type Aliasing

To avoid deep nesting and simplify repeated complex type definitions, you can use `type`.

## Syntax

```vibe
type UserID = Int;
type UserMap = Map<UserID, String>;

let cache: UserMap = {
    101: "Alice",
    102: "Bob"
};
```

This acts as syntactic sugar exactly like in TypeScript or Rust.
