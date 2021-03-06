/*
    Fibonacci Calculation in JavaScript
    -----------------------------------

    As fibonacci numbers follow the pattern of:
        Fib[n] = Fib[n-1] + Fib[n-2]
    (having the base case of starting values-> Fib[0] = 0 and Fib[1] = 1)
    We can easily calculate n-th fibonacci number calculating
    all the previous values by this formula.

    NOTE: remember that, the Fibonacci[N] can be very large
        for a very small value of N (You can safely calculate almost upto N=97).
        So always be careful about the result being overflowed of Number limit.
        Calculating large values of Fibonacci needs some extra
        optimization and tricks based on the task to be solved.
*/

function fibonacci(n) {
    var fib, a = 0, b = 1;

    if(n === 0 || n === 1) return n;

    while(--n) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}

/*
  Solving Fibonacci using recursion.
  Recursive formula for Fibonacci is: F[n] = F[n-1] + F[n-2]
*/
function recursiveFibonacci(n) {
    if (n === 0 || n === 1) return n;

    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}


/* Following is an optimized version of calculating Fibonacci using 'Memoization' or
  'Dynamic Programming'.
  To understand how this is actually working you need to read the following article first:
  https://medium.freecodecamp.org/understanding-memoize-in-javascript-51d07d19430e
*/

function memoizedFunction(fn) {
  var cache = {};

  return function(n) {
    if (n in cache) return cache[n];

    cache[n] = fn(n);
    return cache[n];
  }
}

var memoizedFibonacci = memoizedFunction(function(x) {
    if (x === 0 || x === 1) return x;

    return memoizedFibonacci(x - 1) + memoizedFibonacci(x - 2); //Recursive formula for Fibonacci is: F[n] = F[n-1] + F[n-2]
});


/************ Testing Fibonacci ***************/
console.log('====== Simple Fibonacci ==========');
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(10));

console.log('====== Recursive Fibonacci ==========');
console.log(recursiveFibonacci(5));
console.log(recursiveFibonacci(10));

console.log('====== Memoized Fibonacci ==========');
console.log(memoizedFibonacci(5));
console.log(memoizedFibonacci(6));
console.log(memoizedFibonacci(10));
