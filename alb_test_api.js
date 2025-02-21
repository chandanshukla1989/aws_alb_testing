const express = require("express");
const app = express();

// CPU-heavy Prime Number Computation
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

app.get("/api/heavy-cpu-1", (req, res) => {
    const start = Date.now();
    let primes = [];
    for (let i = 2; i < 50000; i++) {
        if (isPrime(i)) primes.push(i);
    }
    const timeTaken = Date.now() - start;
    res.json({ task: "Prime Calculation", result: primes.length, time_taken: timeTaken });
});

// CPU-heavy Fibonacci Calculation
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

app.get("/api/heavy-cpu-2", (req, res) => {
    const start = Date.now();
    const result = fibonacci(35);
    const timeTaken = Date.now() - start;
    res.json({ task: "Fibonacci Calculation", result, time_taken: timeTaken });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
