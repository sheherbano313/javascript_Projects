function fibonacciIterative(n) {
    let fib = [0, 1]; // Initialize with the first two numbers
  
    if (n <= 1) { 
      return fib.slice(0, n + 1); // Return [0] or [0, 1] if n is 0 or 1
    }
  
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; 
    }
  
    return fib;
  }
  
  console.log(fibonacciIterative(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  