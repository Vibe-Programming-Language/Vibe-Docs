# DataFrame Primitives

Built into `vibe.data` are high performance dataframes for native, memory efficient analytical workloads using columnar storage.

```vibe
import vibe.data

let df = new DataFrame();
df.add_column("A", [1, 2, 3]);
df.add_column("B", [4.5, 5.5, 6.5]);

df.print_head(2);

let active = df.filter("A", 1.0); // Removes row 1 where A isn't > 1.0
```