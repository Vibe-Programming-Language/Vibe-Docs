# Neural Modules

Using `vibe.ml` and `module`, Vibe constructs neural-architectures directly mapping to PyTorch-like `nn.Module` but fully statically typed. 

```vibe
import ml;

module MLP {
    let fc1 = new Linear(784, 128);
    let fc2 = new Linear(128, 10);

    fn forward(x: Tensor) -> Tensor {
        return x |> fc1.forward() |> ml.relu() |> fc2.forward();
    }
}
```