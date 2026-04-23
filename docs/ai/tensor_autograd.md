# Tensors and Autograd

Vibe treats matrices and multi-dimensional arrays as first-class citizens using `Tensor`.

Built into `Tensor` is native automatic differentiation via `requiresGrad()`.

```vibe
let x = new Tensor([2.0, 3.0]).requiresGrad();
let y = x * x;

y.backward(); // Calculate gradients dynamically!
print(x.grad()); // Output vector gradients
```

Unlike python wrappers, autograd runs purely in optimized C++.