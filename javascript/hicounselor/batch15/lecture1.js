// Time complexity - represents the # of times a statement is evaluated
// Space complexity - represents the amount of memory an algorithm takes in terms of the amount of input

// Big O notation - represents the worst case possible of an algorithm
function loopThings(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(loopThings(100));
// console.log(loopThings(99999));
// Time Complexity O(n) where n is the argument parameter
// Space Complexity O(1)

function generateGrid(length, width) {
  let grid = [];
  for (let i = 0; i < length; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push("X");
    }
    grid.push(row);
  }
  return grid;
}

// console.log(generateGrid(2, 3));
// console.log(generateGrid(5, 5));
// Time complexity O(l * w)
// Space complexity O(l * w)

// Recursion
// the repeated applicated of a procedure or definition that can be divided in to smaller subproblems

// Write a recursive solution to exponent
function exponent(base, pow) {
  if (pow === 0) {
    return 1;
  }
  return base * exponent(base, pow - 1);
}

// console.log(exponent(2, 3)); // 8
// console.log(exponent(3, 4)); // 81

// When we want to solve recursive problems, we always need to identify
// 1. the base case - the part of a problem where we know what the answer is
// 2. the recursive step

// 4^0 = 1 // the base case
// 4^1 = 4 * 1
// 4^2 = 4 * 4 * 1
// 4^3 = 4 * 4 * 4 * 1

// f(b, p)

// f(4, 3) = 4 * f(4, 2);
// f(4, 2) = 4 * 4 * 1;
// f(4, 1) = 4 * 1;
// f(4, 0) = 1;

// f(b, p) = b * f(b, p - 1);

// Time complexity O(p) where p is the power
// Space complexity O(p) where p is the power

// Write a function that returns the nth fibonacci number. Assume that the fibonacci sequence starts with 1 and 1

// 0, 1, 1, 2, 3, 5
// fibs(4) // 3
// fibs(5) // 5

function fibs(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibs(n - 1) + fibs(n - 2);
  }
}

// f(4) = 2 + 1;
// f(3) = 1 + 1;
// f(2) = 1 + 0;
// f(1) = 1;
// f(0) = 0;

// f(3) = f(2) + f(1);
// f(2) = f(1) + f(0);
// f(n) = f(n - 1) + f(n - 2);

// console.log(fibs(4)); // 3
// console.log(fibs(5)); // 5
// console.log(fibs(6)); // 8
// console.log(fibs(40));

// Time complexity O(2^n)
// Space complexity O(n)

function fibsMemo(n, memo = {}) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n in memo) {
    return memo[n];
  }
  let answer = fibsMemo(n - 1, memo) + fibsMemo(n - 2, memo);
  memo[n] = answer;
  return answer;
}

//             fibs(5)
//             /        \
//        fibs(4)           fibs(3)
//      /        \
//   fibs(3)     fibs(2)
//   /  \
// f(2) f(1)
//  /  \
// f(1)f(0)

// console.log(fibs(40));

// console.log(fibsMemo(40));
// Time complexity O(n) with memo
// Space complexity O(n + m) where m is the size of the memo object and n is the maximum depth of the call tree

// LC: Medium

// A child is running up a staircase with n steps and can hop either 1 step, 2 steps,
// or 3 steps at a time. Implement a method to count how many possible ways the child
// can run up the stairs.

// if steps is 0, then there is only one way a child can jump up the stairs

function tripleStep(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
}

// O(3^n) time
// O(n) space

// tripleStep(0) // 1

// console.log(tripleStep(5)); // 13
// // 3 2
// // 2 3
// // 2 2 1
// // 1 2 2
// // 2 1 2
// // 1 1 1 2
// // 1 1 2 1
// // 1 2 1 1
// // 2 1 1 1
// // 1 1 1 1 1
// // 3 1 1
// // 1 1 3
// // 1 3 1

// console.log(tripleStep(4)); // 7
// // 3 1
// // 1 3
// // 2 2
// // 1 1 1 1
// // 2 1 1
// // 1 1 2
// // 1 2 1

// console.log(tripleStep(3)); // 4
// // 1 1 1
// // 3
// // 1 2
// // 2 1

// console.log(tripleStep(2)); // 2
// // 1 1
// // 2

// console.log(tripleStep(1)); // 1
// // 1

// console.log(tripleStep(0)); // 1

function tripleStepMemo(n, memo = {}) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n in memo) return memo[n];
  let answer =
    tripleStepMemo(n - 1, memo) +
    tripleStepMemo(n - 2, memo) +
    tripleStepMemo(n - 3, memo);
  memo[n] = answer;
  return answer;
}

// console.log(tripleStepMemo(35));
// console.log(tripleStep(35));

// [1,  1,   2, null, null]
//   0   1    2    3    4

function tripleStepIter(n) {
  let tabs = new Array(n + 1).fill(null);
  tabs[0] = 1;
  tabs[1] = 1;
  tabs[2] = 2;
  for (let i = 3; i < tabs.length; i++) {
    let firstStepBack = tabs[i - 1];
    let secondStepBack = tabs[i - 2];
    let thirdtepBack = tabs[i - 3];
    tabs[i] = firstStepBack + secondStepBack + thirdtepBack;
  }
  console.log(tabs);
  return tabs[tabs.length - 1];
}

console.log(tripleStepIter(35));
// time complexity O(n) where n is the number of steps
// space complexity O(n) where n is the size of the tabs
