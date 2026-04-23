# Actor Models (Distributed Concurrency)

Vibe integrates distributed concurrency built natively off event loops and fibers via `actors`.

```vibe
actor PingServer {
    fn receive(msg: String) {
        if msg == "Ping" {
            print("Pong!");
        }
    }
}

let server = spawn PingServer();
server.send("Ping");
```