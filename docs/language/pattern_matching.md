# Pattern Matching

Pattern matching in Vibe allows you to elegantly match against values and types. It goes beyond a simple `switch` statement by supporting structural matching.

## Syntax

```vibe
enum State {
    Idle,
    Running,
    Finished
}

let current = State.Running;

match current {
    State.Idle => print("Idling..."),
    State.Running => print("In progress!"),
    State.Finished => print("Done."),
    _ => print("Unknown state")
}
```

The `_` is the wildcard operator which captures all unhandled conditions.
