# Quantum Computing Primitives

Vibe integrates quantum programming at a low level by interfacing standard gates to local simulations. 

```vibe
import quantum;

let qc = new QuantumCircuit(2); // 2 Qubits

qc.h(0);          // Hadamard on Q[0]
qc.cx(0, 1);      // CNOT entangling Q[0] and Q[1]

let results = qc.measure_all();
print(results);
```