# Actor Models (Distributed Concurrency)

Vibe integrates distributed concurrency natively using an Actor model. This allows developers to build highly concurrent, scalable, and resilient systems without manually managing threads, locks, or mutexes.

## Overview

In Vibe, an `actor` is an isolated container of state and behavior. Actors communicate exclusively by passing asynchronous messages. This guarantees that internal state is never accessed concurrently by multiple threads, eliminating data races by design.

### Key Concepts

- **Isolation**: An actor's state cannot be modified directly from the outside.
- **Message Passing**: You interact with an actor by sending it messages.
- **Fibers**: Vibe actors are lightweight and run on green threads (fibers), allowing you to spawn millions of them efficiently.

## Example Usage

Here is a simple example of defining and spawning an actor to create a Ping-Pong server:

```vibe
actor PingServer {
    mut count: Int = 0;

    // The 'receive' handler is invoked when a message arrives
    fn receive(msg: String) {
        if msg == "Ping" {
            count = count + 1;
            print("Received Ping. Sending Pong! (Count: ${count})");
        } else {
            print("Unknown message: ${msg}");
        }
    }
}

// Spawn the actor in a lightweight thread
let server = spawn PingServer();

// Send asynchronous messages
server.send("Ping");
server.send("Ping");
server.send("Hello");
```

## Advanced Usage

Actors can also reply to the sender if a reference to the sender is included, and they can be distributed across networked machines in enterprise deployments.

```vibe
actor MathWorker {
    fn receive(task: Map) {
        match task.operation {
            "add" => print("Result: ${task.a + task.b}"),
            "sub" => print("Result: ${task.a - task.b}"),
            _ => print("Error: Unsupported operation")
        }
    }
}

let worker = spawn MathWorker();
worker.send({ "operation": "add", "a": 10, "b": 20 });
```

## Frequently Asked Questions (FAQ)

### Are Vibe actors similar to Erlang or Akka?
Yes, the implementation takes heavy inspiration from the Erlang/OTP philosophy and Akka framework.

### How many actors can I spawn?
Because they use lightweight fibers (green threads) mapped to a work-stealing thread pool, you can spawn hundreds of thousands of actors on a standard machine without exhausting OS threads.

### How are failures handled?
Vibe supports supervision trees. You can configure an actor to supervise child actors and define restart strategies (e.g., `RestartOne`, `RestartAll`) when an actor panics.
