// Time Complexity - represents the # of times a statement is evaluated
// Space Complexity - represents the amount of memory an algorithm takes in terms of the amount of input

// Big O notation - represents the worst case possible of a algorithm

function loopThings(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
}

function makeGrid(len, hei) {
  let result = [];
  for (let i = 0; i < len; i++) {
    let row = [];
    for (let j = 0; j < hei; j++) {
      row.push([i, j]);
    }
    result.push(row);
  }
  return result;
}

// console.log(makeGrid(3, 4)); // time complext O(l * h) // space complexity O(l * h)

// Recursion
// the repeated application of a procedure or definition that can be divided in to smaller subproblems

// base case: the point when we know what the answer is
// n^0 = 1
// recursive step: a common pattern that can be used to solve all problems of the same type
// base^power

// f(b, p) = b * f(b, p - 1)
// f(2, 3) = 2 * f(2, 2)
// f(2, 2) = 2 * f(2, 1)
// f(2, 1) = 2 * f(2, 0)
// f(2, 0) = 1 // base case

function exponents(base, power) {
  if (power === 0) {
    // base case
    return 1;
  }
  return base * exponents(base, power - 1);
}

// console.log(exponents(2, 3)); // 8

// Write a function that returns the nth fibonacci number

// 0 1 1 2 3 5

// base case:   if n === 0, then output is 0
//              if n === 1, then output is 1

// fib(n) = fib(n - 1) + fib(n - 2) // iterative step
// fib(5) = fib(4) + fib(3)
// fib(4) = fib(3) + fib(2)
// fib(3) = fib(2) + fib(1)
// fib(2) = fib(1) + fib(0)
// fib(1) = 1 // base case
// fib(0) = 0 // base case

function fibs(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibs(n - 1) + fibs(n - 2);
}

//             f(5)
//             /   \
//        f(4)    f(3)
//      /  \         /       \
//    f(3) f(2)     f(2)     f(1)
//    /\     /\       /\
//  f(2)f(1)f(1)f(0) f(1)f(0)
//  /\
//f(1)f(0)

// Memoization -> a way to store precomputed values in memory such that we do not have to calculate it again

function fibsMemo(n, memo = {}) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n in memo) {
    return memo[n];
  }
  let answer = fibsMemo(n - 1, memo) + fibsMemo(n - 2, memo);
  memo[n] = answer;
  return memo[n];
}

// console.log(fibs(40)); // time complexity O(2^n) // space complexity O(2^n)
// console.log(fibsMemo(40)); // time complexity O(n) // space complexity O(n)

//             f(5)
//             /
//        f(4)
//      /
//    f(3)
//    /
//  f(2)
//  /
//f(1)

//

// LC: Medium

// A child is running up a staircase with n steps and can hop either 1 step, 2 steps,
// or 3 steps at a time. Implement a method to count how many possible ways the child
// can run up the stairs.

// numOfStep(4) // => 7

// 3, 1
// 1, 3
// 2, 2
// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2

// numOfStep(3) // => 4

// 3
// 1, 1, 1
// 2, 1
// 1, 2

// numOfStep(2) // => 2

// 1, 1
// 2

// numOfStep(1) // => 1

// numOfStep(0) // => 1

// f(5) = 13
// f(4) = 7
// f(3) = 4
// f(2) = 2
// f(1) = 1
// f(0) = 1
// f(-1) = 0

// f(n) = f(n - 1) + f(n - 2) + f(n - 3)
// f(4) = 4 + 2 + 1 = 7

function numOfStep(n) {
  if (n < 0) {
    return 0;
  }
  if (n <= 1) {
    return 1;
  }
  return numOfStep(n - 1) + numOfStep(n - 2) + numOfStep(n - 3);
}

// time complexity O(3^n) // space complexity O(3^n)

function numOfStepMemo(n, memo = {}) {
  if (n < 0) {
    return 0;
  }
  if (n <= 1) {
    return 1;
  }
  if (n in memo) {
    return memo[n];
  }
  let answer =
    numOfStepMemo(n - 1, memo) +
    numOfStepMemo(n - 2, memo) +
    numOfStepMemo(n - 3, memo);
  memo[n] = answer;
  return memo[n];
}

// console.log(numOfStepMemo(30)); // time complexity O(n), space complexity O(n)

// -1  0  1  2, 3, 4
//  0 [1, 1, 2, 4, 7]
//        ^  ^  ^

function numOfStepsIter(n) {
  if (n < 0) return 0;
  if (n === 0 || n === 1) return 1;
  const steps = Array(n + 1).fill(); // O(n)
  steps[0] = 1; // where 0th index aka 0th step is 1, where 1st index aka 1st step is 1
  steps[1] = 1;
  for (let i = 2; i < steps.length; i++) {
    // O(n)
    let thirdPriorStep = i - 3 < 0 ? 0 : steps[i - 3];
    let secondPriorStep = i - 2 < 0 ? 0 : steps[i - 2];
    let firstPriorStep = i - 1 < 0 ? 0 : steps[i - 1];
    steps[i] = firstPriorStep + secondPriorStep + thirdPriorStep;
  }
  return steps[steps.length - 1];
}

console.log(numOfStepsIter(-99));
console.log(numOfStepsIter(1));
console.log(numOfStepsIter(4));

// O(n + n) => O(2n) => O(n) time
// O(n) space
