# Tensor & Autograd (AI Primitives)

Vibe integrates foundational, high-performance Data and AI primitives right into the heart of the standard library, providing native multidimensional arrays and automatic differentiation capabilities suitable for deep learning.

## Tensors

The core numeric primitive for AI tasks in Vibe is a multidimensional `Tensor`. Under the hood, Vibe's tensor library employs highly optimized CPU and SIMD numerical operations to handle arrays and perform matrix multiplications.

### Initializing Tensors

Here's how to create and manipulate a Tensor in Vibe:

```vibe
// Create a 1-dimensional Tensor
let array1d = Tensor.ones([5]);
print("1D Tensor: ${array1d}");

// Create a 2-dimensional Matrix Tensor with random uniform values
let matrix = Tensor.rand([4, 4]);

// Tensor addition
let scaled = matrix + 10.0;

// Matrix operations
let transformed = matrix.matmul(Tensor.identity([4, 4]));
```

## Automatic Differentiation (Autograd)

For training and fine-tuning neural networks, computing gradients manually is tedious. Vibe implements a dynamic computational graph (autograd module), allowing for automatic gradient computation.

### Computing Derivatives

```vibe
let x = Tensor.tensor([2.0, 3.0], requires_grad=true);
let y = x * x + 3.0 * x;

y.backward();

print("Gradient of y with respect to x: ${x.grad}");
// [ 2*2 + 3, 2*3 + 3 ] => [ 7.0, 9.0 ]
```

Vibe's autograd engine automatically constructs a backward graph on the fly, identical to dynamic frameworks like PyTorch.

## Frequently Asked Questions (FAQ)

### Does it use GPU acceleration (CUDA, Metal)?
Currently, the runtime only includes SIMD optimized CPU paths but hardware-dependent backend integrations (like cuBLAS) are under active development.

### How does this compare to Python libraries like NumPy or PyTorch?
The design is deliberately influenced by PyTorch, providing familiar dynamic graph behavior combined with the performance and static guarantees of the Vibe compiler. Vibe can seamlessly interface with existing Python models via the Python Interop feature.
