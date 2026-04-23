# Data Pipelines

Fast pipelines using threaded `streams`. 

```vibe
let raw_data = read_csv("data.csv");

let dataloader = raw_data 
        |> stream()
        |> map(normalize)
        |> batch(32)
        |> prefetch(2); // load two batches onto GPU memory concurrently!

parallel for batch in dataloader {
    // Neural processing running on multiple cores concurrently
    model.train_step(batch);
}
```

Vibe uses thread-pools and automatic parallelization across pipeline iterators when using `parallel for`.