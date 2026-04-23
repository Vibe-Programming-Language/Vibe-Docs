# Python Interoperability

Vibe allows for full integration with Python code through embedded evaluation or native imports using CPython. This ensures you can access Numpy, Pandas, or PyTorch without leaving Vibe's static performance ecosystem.

## `pyimport` Keyword

```vibe
pyimport numpy as np;

let arr = np.array([1, 2, 3]);
print(np.mean(arr));
```

## `python` Inline Block

```vibe
python "
import math
print(f'Embedded Python: {math.pi}')
";
```