# VibeML: Machine Learning & Deep Learning Framework

## Overview

**VibeML** brings TensorFlow/PyTorch-like capabilities to Vibe with:

- 🧮 Multi-dimensional Tensors
- 🤖 Neural Network Layers (Dense, Conv2D, LSTM)
- 📊 Optimizers (SGD, Adam)
- 🔧 Training loops & batch processing
- 💾 Model serialization
- 📈 Pre-trained models (ONNX import)
- ⚡ Native C++ performance

## Core Concepts

### Tensors

Tensors are multi-dimensional arrays—the foundation of all ML operations.

```vibe
import vibe.ml;

// Create tensors of different shapes
var vector = ml.Tensor({5}, 0);           // 1D (5 elements)
var matrix = ml.Tensor({3, 4}, 0);        // 2D (3x4)
var tensor3d = ml.Tensor({2, 3, 4}, 0);  // 3D

// Special tensor creation
var zeros = ml.Tensor.zeros({3, 3});     // All zeros
var ones = ml.Tensor.ones({2, 5});       // All ones
var random = ml.Tensor.random({4, 4});   // Random [0,1)
var normal = ml.Tensor.randn({10});      // Normal distribution

// Get tensor properties
print(tensor3d.shape());      // [2, 3, 4]
print(tensor3d.ndim());       // 3 (dimensions)
print(tensor3d.size());       // 24 (total elements)

// Access elements
var value = tensor.at({0, 1});
print(value);

// Set element
tensor.at({0, 1}) = 3.14;
```

### Tensor Operations

```vibe
import vibe.ml;

var a = ml.Tensor({2, 3}, 2.0);
var b = ml.Tensor({2, 3}, 3.0);

// Element-wise operations
var sum = a + b;              // Addition
var diff = a - b;             // Subtraction
var prod = a * b;             // Multiplication
var quot = a / b;             // Division

// Scalar operations
var scaled = a * 2.0;         // Multiply by scalar
var biased = b + 1.0;         // Add scalar

// Matrix operations
var m1 = ml.Tensor({3, 4}, 1.0);
var m2 = ml.Tensor({4, 5}, 1.0);
var result = ml.Tensor.matmul(m1, m2);  // Matrix multiplication

// Reshaping
var reshaped = vector.reshape({5, 1});

// Transposition (2D)
var transposed = matrix.transpose({1, 0});

// Reduction operations
var total = tensor.sum();     // Sum all elements
var average = tensor.mean();  // Average
var maximum = tensor.max();   // Maximum value
var minimum = tensor.min();   // Minimum value
```

## Activation Functions

Introduce non-linearity to neural networks.

```vibe
import vibe.ml;

var x = ml.Tensor({3, 3}, 1.0);

// ReLU (Rectified Linear Unit)
var relu_out = ml.activation.relu(x);

// Sigmoid (S-shaped)
var sigmoid_out = ml.activation.sigmoid(x);

// Tanh (Hyperbolic tangent)
var tanh_out = ml.activation.tanh(x);

// Softmax (for classification)
var logits = ml.Tensor({1, 10}, 0.0);  // 10 classes
var probs = ml.activation.softmax(logits);  // Sum to 1
```

## Layers

Building blocks for neural networks.

### Dense Layer (Fully Connected)

```vibe
import vibe.ml;

// Dense layer: 28*28=784 inputs -> 128 outputs
var dense = ml.Dense(784, 128);

// Forward pass
var input = ml.Tensor({1, 784}, 0.0);   // Batch of 1
var output = dense.forward(input);      // Shape: {1, 128}

// Access weights
var weights = dense.getWeights();        // {784, 128}
var biases = dense.getBiases();          // {128}
```

### Convolutional Layer (Conv2D)

```vibe
// Conv2D: 1 input channel, 32 output channels, 3x3 kernel
var conv = ml.Conv2D(1, 32, 3, 1, 1);   // (in_ch, out_ch, kernel_size, stride, padding)

var input = ml.Tensor({1, 28, 28, 1}, 0.0);  // 1 sample, 28x28, 1 channel
var output = conv.forward(input);
```

### LSTM Layer

```vibe
// LSTM: 10 inputs -> 64 hidden units
var lstm = ml.LSTM(10, 64);

var input = ml.Tensor({1, 10}, 0.0);
var output = lstm.forward(input);
```

## Building Models

### Sequential Model

```vibe
import vibe.ml;

// Create model
var model = ml.Model();

// Add layers
model.add(ml.Dense(784, 256));
model.add(ml.Dense(256, 128));
model.add(ml.Dense(128, 10));

// Compile
model.compile(ml.Adam(0.001), "crossentropy");

print("Model compiled successfully");
```

## Optimizers

Update weights to minimize loss.

### Stochastic Gradient Descent (SGD)

```vibe
import vibe.ml;

var optimizer = ml.SGD(0.01);  // Learning rate: 0.01
optimizer.setWeightDecay(0.0001);

model.compile(optimizer, "mse");
```

### Adam Optimizer

```vibe
// Adaptive Learning Rate (recommended for most tasks)
var adam = ml.Adam(
    0.001,      // Learning rate
    0.9,        // Beta1 (momentum)
    0.999       // Beta2 (RMSProp)
);

model.compile(adam, "crossentropy");
```

## Loss Functions

Measure how wrong predictions are.

```vibe
import vibe.ml;

var predicted = ml.Tensor({32, 10}, 0.1);  // Batch of 32, 10 classes
var target = ml.Tensor({32, 10}, 0.0);     // One-hot encoded

// Mean Squared Error (regression)
var mse_loss = ml.loss.mse(predicted, target);

// Cross Entropy (classification)
var ce_loss = ml.loss.crossEntropy(predicted, target);

// Binary Cross Entropy (binary classification)
var bce_loss = ml.loss.binaryCrossEntropy(predicted, target);
```

## Training

###  Basic Training Loop

```vibe
import vibe.ml;

// Prepare data
var xTrain = [/* training samples */];
var yTrain = [/* training labels */];
var xTest = [/* test samples */];
var yTest = [/* test labels */];

// Create and compile model
var model = ml.Model();
model.add(ml.Dense(input_size, 128));
model.add(ml.Dense(128, 64));
model.add(ml.Dense(64, num_classes));

model.compile(ml.Adam(0.001), "crossentropy");

// Train
model.fit(
    xTrain, yTrain,
    10,      // epochs
    32,      // batch size
    0.2      // validation split (20%)
);

// Evaluate
var accuracy = model.evaluate(xTest, yTest);
print("Test Accuracy: " + accuracy);
```

### Advanced Training

```vibe
import vibe.ml;

var model = ml.Model();
// ... build model ...
model.compile(ml.Adam(0.001), "mse");

// Train with custom batch processing
fn trainModel(xData, yData, epochs) {
    for epoch in 0..epochs {
        print("Epoch " + epoch + "/" + epochs);
        
        // Create batches
        var batchSize = 32;
        
        for i in 0..xData.len() by batchSize {
            var batchX = xData.slice(i, i + batchSize);
            var batchY = yData.slice(i, i + batchSize);
            
            // Train on batch
            model.trainOnBatch(batchX, batchY);
        }
    }
}

trainModel(xTrain, yTrain, 10);
```

## Model Persistence

### Save Model

```vibe
var model = ml.Model();
// ... train model ...

// Save to file
model.save("my_model.vibe");
print("Model saved!");
```

### Load Model

```vibe
var model = ml.Model();
model.load("my_model.vibe");
print("Model loaded!");

// Make predictions
var pred = model.predict(test_sample);
```

## Pre-trained Models

### Loading ONNX Models

```vibe
import vibe.ml;

// Load MobileNet v2 from ONNX
var model = ml.loadONNX("mobilenet-v2.onnx");

// Preprocess image
var image = prepareImage("photo.jpg");

// Inference
var result = model.predict(image);
print("Top prediction: " + result);
```

### Using Model Zoo

```vibe
import vibe.ml;

// Create simple MLP
var mlp = ml.models.mlp(
    784,          // input size (28x28 flattened)
    {256, 128},   // hidden layers
    10            // output size (10 classes)
);

// Create CNN for images
var cnn = ml.models.simpleCNN(3, 10);  // 3 channels (RGB), 10 classes
```

## Complete Example: MNIST Digit Recognition

```vibe
import vibe.ml;

fn main() {
    // Load MNIST dataset
    var xTrain = loadMNISTImages("train-images.bin");
    var yTrain = loadMNISTLabels("train-labels.bin");
    var xTest = loadMNISTImages("test-images.bin");
    var yTest = loadMNISTLabels("test-labels.bin");
    
    // Normalize to [0, 1]
    for i in 0..xTrain.len() {
        xTrain[i] = xTrain[i] * (1.0 / 255.0);
    }
    for i in 0..xTest.len() {
        xTest[i] = xTest[i] * (1.0 / 255.0);
    }
    
    // Build model
    var model = ml.Model();
    model.add(ml.Dense(784, 256));
    model.add(ml.Dense(256, 128));
    model.add(ml.Dense(128, 10));
    
    // Compile
    model.compile(ml.Adam(0.001), "crossentropy");
    
    // Train
    print("Training...");
    model.fit(xTrain, yTrain, 10, 32, 0.2);
    
    // Evaluate
    print("Evaluating...");
    var accuracy = model.evaluate(xTest, yTest);
    print("Test Accuracy: " + (accuracy * 100) + "%");
    
    // Save
    model.save("mnist.vibe");
}

main();
```

## Data Utilities

### Normalization

```vibe
import vibe.ml;

var data = [/* raw data */];

// Standardize (mean=0, std=1)
var standardized = ml.data.standardize(data);

// Custom normalization
var mean = 0.5;
var std = 0.25;
var normalized = ml.data.normalize(data, mean, std);

// Compute statistics
var (mu, sigma) = ml.data.computeMeanStd(data);
```

### Train-Test Split

```vibe
var data = [/* all data */];

var split = ml.data.trainTestSplit(data, 0.2);  // 80% train, 20% test
var trainingData = split.train;
var testData = split.test;
```

## Training Tools

### Monitoring Progress

```vibe
var trainHistory = model.getTrainHistory();  // Loss per epoch
var valHistory = model.getValHistory();       // Validation loss

for epoch in 0..trainHistory.len() {
    print("Epoch " + epoch + ": loss=" + trainHistory[epoch]);
}
```

## Troubleshooting

**Model not converging?**
- Try lower learning rate
- Check if data is normalized
- Increase training epochs
- Verify loss function matches task

**Out of memory?**
- Reduce batch size
- Use smaller model
- Compile to 32-bit floats instead of 64-bit

**NaN values in loss?**
- Learning rate too high
- Unstable activation functions
- Check for division by zero

## Performance Tips

1. **Use batch processing** - Process multiple samples at once
2. **Compile to binary** - Run `vibe build` for 10x+ speedup
3. **Use appropriate layer types** - Dense for tabular, Conv for images
4. **Normalize inputs** - Usually [0,1] or [-1,1]
5. **Monitor validation loss** - Stop early if overfitting

