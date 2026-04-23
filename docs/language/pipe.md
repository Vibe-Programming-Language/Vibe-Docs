# Pipe Operator (`|>`)

The pipe operator allows you to chain function calls fluidly. It takes the output of the expression on the left and passes it as the **first argument** to the function on the right.

### Example

```vibe
// Without pipe:
let result = capitalize(trim("  hello  "));

// With pipe:
let result = "  hello  " |> trim() |> capitalize();
```

This is especially powerful when chained with data operations and arrays.
