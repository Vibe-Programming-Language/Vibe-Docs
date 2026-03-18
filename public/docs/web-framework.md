# VibeWeb Framework - Web Development Guide

## Overview

**VibeWeb** is a Flask/Express-like web framework for building REST APIs and web servers in Vibe. It's lightweight, fast, and compiled to native C++ for blazing performance.

## Features

- ✅ HTTP server with routing
- ✅ Request/Response objects
- ✅ Middleware system
- ✅ JSON/form data parsing
- ✅ Static file serving
- ✅ Template engine
- ✅ CORS support
- ✅ Rate limiting
- ✅ Request logging

## Installation & Setup

```vibe
import vibe.web;

// Create application
var app = web.App();

// Configure
app.setHost("0.0.0.0");
app.setPort(8080);

// Define routes
app.get("/", (req, res) => {
    res.html("<h1>Welcome!</h1>");
});

// Start server
app.listen();
print("Server running...");
```

## Route Handling

### Basic Routes

```vibe
// GET /
app.get("/", (req, res) => {
    res.text("Hello, World!");
});

// POST /users
app.post("/users", (req, res) => {
    res.setStatus(201);
    res.json('{"id": 1}');
});

// PUT /users/<id>
app.put("/users/<id>", (req, res) => {
    var userId = req.getParam("id");
    res.text("Updating user " + userId);
});

// DELETE /users/<id>
app.del("/users/<id>", (req, res) => {
    var userId = req.getParam("id");
    res.text("Deleting user " + userId);
});

// PATCH /api/config
app.patch("/api/config", (req, res) => {
    res.json('{"updated": true}');
});
```

### Path Parameters

```vibe
app.get("/posts/<id>/comments/<comment_id>", (req, res) => {
    var postId = req.getParam("id");
    var commentId = req.getParam("comment_id");
    
    res.json(
        '{"post_id": ' + postId + ', "comment_id": ' + commentId + '}'
    );
});
```

### Query Parameters

```vibe
// GET /search?q=vibe&limit=10
app.get("/search", (req, res) => {
    var query = req.getQuery("q");
    var limit = req.getQuery("limit");
    
    res.json('{"query": "' + query + '", "limit": ' + limit + '}');
});
```

## Request & Response

### Request Object

```vibe
// Properties
print(req.method);              // GET, POST, PUT, DELETE
print(req.path);                // "/api/users"
print(req.body);                // Request body as string
print(req.remoteAddr);          // Client IP address

// Get header
var userAgent = req.getHeader("User-Agent");
var contentType = req.getHeader("Content-Type");

// Get parameter (from path)
var id = req.getParam("id");

// Get query parameter
var name = req.getQuery("name");

// Parse JSON body
var data = req.parseJSON();

// Parse form data
var formData = req.parseFormData();
```

### Response Object

```vibe
// Status code
res.setStatus(200);
res.setStatus(201);  // Created
res.setStatus(404);  // Not Found
res.setStatus(500);  // Error

// Headers
res.setHeader("Content-Type", "application/json");
res.setHeader("X-Custom-Header", "value");

// Set body - different content types
res.text("Plain text response");
res.html("<h1>HTML Response</h1>");
res.json('{"key": "value"}');
res.file("/path/to/file.pdf");

// Convenience methods
res.setContentType("application/xml");
res.setBody("<xml>...</xml>");
```

## Middleware

Middleware functions process requests before they reach route handlers.

### Built-in Middleware

```vibe
import vibe.web;

var app = web.App();

// Logging middleware
app.use(web.middleware.logging());

// CORS (Cross-Origin Resource Sharing)
app.use(web.middleware.cors("*"));

// JSON body parser
app.use(web.middleware.jsonParser());

// Form data parser
app.use(web.middleware.formParser());

// Static file serving
app.use(web.middleware.staticFiles("./public", "/static"));

// Rate limiting (5 requests per second)
app.use(web.middleware.rateLimit(5));
```

### Custom Middleware

```vibe
// Authentication middleware
var authMiddleware = (req, res) => {
    var token = req.getHeader("Authorization");
    
    if token == null || token.len() == 0 {
        res.setStatus(401);
        res.text("Unauthorized");
        return false;  // Stop processing
    }
    
    return true;  // Continue to next middleware/handler
};

app.use(authMiddleware);

// Validation middleware
var validateJSON = (req, res) => {
    var contentType = req.getHeader("Content-Type");
    
    if req.method == "POST" && !contentType.contains("json") {
        res.setStatus(400);
        res.text("Content-Type must be application/json");
        return false;
    }
    
    return true;
};

app.use(validateJSON);
```

## Template Engine

Embed variables in HTML templates.

```vibe
import vibe.web;

// Create template
var template = web.Template(
    "<h1>{{title}}</h1>" +
    "<p>Welcome, {{name}}!</p>" +
    "<p>You have {{messages}} new messages.</p>"
);

// Set variables
template.set("title", "Home Page");
template.set("name", "Alice");
template.set("messages", 5);

// Render and send
var html = template.render();
res.html(html);
```

## Complete REST API Example

```vibe
import vibe.web;
import vibe.json;

var app = web.App();

// In-memory database
var users = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob",   "email": "bob@example.com"}
];
var nextId = 3;

// Middleware
app.use(web.middleware.logging());
app.use(web.middleware.cors());
app.use(web.middleware.jsonParser());

// Routes

// GET /api/users - List all users
app.get("/api/users", (req, res) => {
    res.json(json.stringify(users));
});

// GET /api/users/<id> - Get specific user
app.get("/api/users/<id>", (req, res) => {
    var userId = req.getParam("id");
    
    for user in users {
        if user["id"] == int(userId) {
            res.json(json.stringify(user));
            return;
        }
    }
    
    res.setStatus(404);
    res.json('{"error": "User not found"}');
});

// POST /api/users - Create user
app.post("/api/users", (req, res) => {
    var data = req.parseJSON();
    
    var newUser = {
        "id": nextId,
        "name": data["name"],
        "email": data["email"]
    };
    
    users.push(newUser);
    nextId = nextId + 1;
    
    res.setStatus(201);
    res.json(json.stringify(newUser));
});

// PUT /api/users/<id> - Update user
app.put("/api/users/<id>", (req, res) => {
    var userId = int(req.getParam("id"));
    var data = req.parseJSON();
    
    for user in users {
        if user["id"] == userId {
            user["name"] = data["name"];
            user["email"] = data["email"];
            res.json(json.stringify(user));
            return;
        }
    }
    
    res.setStatus(404);
    res.json('{"error": "User not found"}');
});

// DELETE /api/users/<id> - Delete user
app.del("/api/users/<id>", (req, res) => {
    var userId = int(req.getParam("id"));
    
    for i in 0..users.len() {
        if users[i]["id"] == userId {
            users.remove(i);
            res.setStatus(204);
            return;
        }
    }
    
    res.setStatus(404);
    res.json('{"error": "User not found"}');
});

// Start server
app.setPort(3000);
app.listen();
print("API running on http://localhost:3000");
```

## Static File Serving

```vibe
// Serve public directory
app.use(web.middleware.staticFiles("./public", "/static"));

// Now /static/style.css serves ./public/style.css
// http://localhost:8080/static/style.css
```

## Error Handling

```vibe
app.get("/divide/<a>/<b>", (req, res) => {
    try {
        var a = int(req.getParam("a"));
        var b = int(req.getParam("b"));
        var result = a / b;
        
        res.json('{"result": ' + result + '}');
    } catch (err) {
        res.setStatus(400);
        res.json('{"error": "' + err + '"}');
    }
});
```

## Testing Your API

### Using curl

```bash
# GET request
curl http://localhost:8080/api/users

# GET with parameters
curl "http://localhost:8080/api/users/1"

# POST request
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Charlie","email":"charlie@example.com"}'

# PUT request
curl -X PUT http://localhost:8080/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice Updated","email":"alice.new@example.com"}'

# DELETE request
curl -X DELETE http://localhost:8080/api/users/1
```

## Environment Configuration

```vibe
import vibe.os;

var port = 3000;
var env = "development";

// Read from environment variables
var envPort = os.getEnv("PORT");
if envPort != null {
    port = int(envPort);
}

var envMode = os.getEnv("NODE_ENV");
if envMode != null {
    env = envMode;
}

print("Starting in " + env + " on port " + port);

app.setPort(port);
app.listen();
```

## Performance Tips

1. **Use middleware selectively** - Only apply middleware to routes that need it
2. **Compile to binary** - Run `vibe build` for 10x+ speed improvement
3. **Enable caching** - Add HTTP cache headers
4. **Use connection pooling** - For database connections
5. **Benchmark routes** - Profile slow endpoints

## Security Best Practices

```vibe
// Validate input
fn validateEmail(email) {
    return email.contains("@") && email.contains(".");
}

// Sanitize data
fn sanitizeSQL(input) {
    // Parameterized queries prevent SQL injection
    return input.replace("'", "''");
}

// Rate limiting
app.use(web.middleware.rateLimit(100));  // 100 req/sec

// HTTPS/TLS
// Enable in production: app.setSSL("/path/to/cert", "/path/to/key");
```

