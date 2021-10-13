// Time Complexity - represents the # of times a statement is evaluated
// Space Complexity - represents the amount of memory an algorithm takes relative to the amount of input

// Big O notation - represents the worst case possible of a algorithm relative to input size

function loopThroughThings(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
    // ... declare million variables here
  }
  return sum;
}

// console.log(loopThroughThings(1000)); // time complexity O(n) where n is the number of times we loop
// space complexity O(1) constant space

// O(1)
// O(log(N))
// O(N)
// O(Nlog(N))
// O(N^2)
// O(2^N)
// O(N!)

function spaceComplexityDemo(n) {
  return Array(n)
    .fill()
    .map((_, i) => i);
}

// console.log(spaceComplexityDemo(4));
// time complexity O(n)
// space O(n) where n is the input

function nestedLoop(n, m) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let subArr = [];
    for (let j = 0; j < m; j++) {
      subArr.push(j);
    }
    arr.push(subArr);
  }
  return arr;
}

// console.log(nestedLoop(2, 3)); // time complexity O(n * m) where n is the first argument and m is the second
// space complexity O(n * m) where n is the first argument and m is the second

// Recursion: A problem solving technique that solves problems by attempting to solve smaller sub problems

// Base case: The case where we KNOW what the answer will be.

// Given a number and power, return the exponent

function exponent(base, power) {
  // base case
  if (power === 0) {
    return 1;
  }
  return base * exponent(base, power - 1); // iterative step
}

// base = 2
// power = 3
// 2 ^ 3 = 8
// 2 * 2 * 2

// f(2, 3) = 2 * f(2, 3 - 1)
// f(2, 2) = 2 * f(2, 2 - 1)
// f(2, 1) = 2 * f(2, 1 - 1)
// f(2, 0) = 1

// console.log(exponent(2, 4)); // => 16

// time complexity O(n) where n is the power
// space complexity O(n) where n is the power

// Write a function that would give me the nth fibonacci number

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// Base case 0th number in fibs is 0; 1st num in fibs is 1
// iterative step; add the prior number plus the prior prior number
// f(n) = f(n - 1) + f(n - 2)

// f(5) = f(4) + f(3)
// f(4) = f(3) + f(2)
// f(3) = f(2) + f(1)
// f(2) = f(1) + f(0); // 1
// f(1) = 1;
// f(0) = 0;

// fibs(n)
// console.log(fibs(2)); // => 1
// console.log(fibs(3)); // => 2
// console.log(fibs(5)); // => 5
// console.log(fibs(20));
// console.log(fibs(25));
// console.log(fibs(35));
// time complexity O(2^n)
// space complexity O(2^n)

function fibs(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibs(n - 1) + fibs(n - 2);
}

//            f(5)
//        /           \
//      f(4)        f(3)
//     /   \
//   f(3)   f(2)
//   / \
// f(2) f(1)
//  /\
// f(1)f(0)

function fibsMemo(n, memo = {}) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n in memo) return memo[n];
  let ans = fibsMemo(n - 1, memo) + fibsMemo(n - 2, memo);
  memo[n] = ans;
  return memo[n];
}

// time complexity O(n)
// space complexty O(n + n) => O(2n) => O(n)

// A child is running up a staircase with n steps and can hop either 1 step, 2 steps,
// or 3 steps at a time. Implement a method to count how many possible ways the child
// can run up the stairs.

// tripleStep(4) // => 7
// tripleStep(3) // => 4
// tripleStep(2) // => 2
// tripleStep(1) // => 1
// tripleStep(0) // => 1

// tripleStep(4) = tripleStep(3) + tripleStep(2) + tripleStep(1)

function tripleStep(n, memo = {}) {
  if (n < 0) return 0;
  if (n <= 1) return 1;
  if (n in memo) return memo[n];
  memo[n] =
    tripleStep(n - 1, memo) + tripleStep(n - 2, memo) + tripleStep(n - 3, memo);
  return memo[n];
}

// time complexity O(3^n) // w/o memo
// space complexity O(3^n)

// time complexity O(n) // w memo
// space complexity O(n)

//      f(4)
//     /   \    \
//   f(3)   f(2) f(1)
//   / \
// f(2) f(1)
//  /\
// f(1)f(0)

console.log(tripleStep(30));

// n === 4

// -1 0 1 2 3
//  0[1,1,2,4]

function tripleStepIter(n) {
  if (n < 0) return 0;
  if (n <= 1) return 1;
  const memoTable = Array(n + 1).fill();
  memoTable[0] = 1;
  memoTable[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    const firstPriorStep = i - 1 >= 0 ? memoTable[i - 1] : 0;
    const secondPriorStep = i - 2 >= 0 ? memoTable[i - 2] : 0;
    const thirdPriorStep = i - 3 >= 0 ? memoTable[i - 3] : 0;
    memoTable[i] = firstPriorStep + secondPriorStep + thirdPriorStep;
  }
  return memoTable[memoTable.length - 1];
}

console.log(tripleStepIter(4));
// time O(n)
// space O(n)
