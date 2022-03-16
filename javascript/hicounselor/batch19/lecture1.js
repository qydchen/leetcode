// Time complexity - represents the # of times a statement is evaluated/executed
// Space complexity - represents the amount of memory an algorithm takes in terms of the amount of input

// Big O notation - represents the worst case scenario possible of an algorithm

function loopThings(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(loopThings(123));

// O(1), O(n), O(n^2), O(n logn), O(2^n)

function generateGrid(length, width) {
  let result = [];
  for (let i = 0; i < length; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push('X');
    }
    result.push(row);
  }
  return result;
}

// console.log(generateGrid(4, 5));

// Time Complexity O(l * w) // where l is length and w is width
// Space Complexity O(l * w)

function exponent(base, pow) {
  if (pow === 0) {
    return 1;
  }
  return base * exponent(base, pow - 1);
}

// console.log(exponent(2, 10));

// Time complexity O(pow)
// Space Complexity O(pow)




// Write a function that returns the nth fibonacci number. Assume that the fibonacci sequence starts with 1 and 1
// [1, 1, 2, 3, 5, 8, 13]

function fibs(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) { // base case
    return 1;
  }

  // recursive step
  return fibs(n - 1) + fibs(n - 2);
}

// console.log(fibs(4)) // 3
// console.log(fibs(8))
// console.log(fibs(45));

// Time - O(2^n) where fibs calls itself 2 more at every step of the recursive call
// Space - O(n) where n is the longest part of the call stack


function fibsMemo(n, memo = {}) {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) { // base case
    return 1;
  }
  if (n in memo) {
    return memo[n];
  }

  // recursive step
  let answer = fibsMemo(n - 1, memo) + fibsMemo(n - 2, memo);
  memo[n] = answer;
  // console.log(memo);
  return answer;
}

// console.log(fibsMemo(45));

// fibsMemo(n)

// Time O(n)
// Space O(n + n) => O(2n) => O(n) where n is the call stack PLUS n is the space for the memo object, reduced down to n

//        fibs(10)                 1
//         /
//      f(9)                       1
//     /
//   f(8)           1
//   /\
//  7               1
//  /\
// 6               1
// /
// 5
// /
// 4
// /
// 3
// /
// 2
// /
// 1













// tripleStep(n) = tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);

// tripleStep(8) = tripleStep(7) + tripleStep(6) + tripleStep(5);

// tripleStep(4) = 7
// tripleStep(4) = tripleStep(3) + tripleStep(2) + tripleStep(1);
// tripleStep(4) = 4 + 2 + 1;

// tripleStep(3) = 2 + 1 + 1 = 4

// tripleStep(4) // 7
// tripleStep(3) // 4
// tripleStep(2) // 2
// tripleStep(1) // 1
// tripleStep(0) // 1

// steps = 4
// 3 1
// 1 3
// 1 1 1 1
// 2 1 1
// 1 2 1
// 1 1 2
// 2 2
// output = 7

// steps = 3
// 3
// 1 2
// 2 1
// 1 1 1
// output = 4

// steps = 2
// 1 1
// 2

// steps = 1
// 1
// output = 1

// steps = 0, then its only 1 way
// output = 1

// LC: Medium

// A child is running up a staircase with n steps and can hop either 1 step, 2 steps,
// or 3 steps at a time. Implement a method to count how many possible ways the child
// can run up the stairs.

// assumptions: if n is 0, then there is only one way a child can jump up the stairs

// if n is 4, then there are 7 ways the child can jump up the stairs

function tripleStep(steps) {
  if (steps < 0) {
    return 0;
  }
  if (steps === 1 || steps === 0) { // base case
    return 1;
  }
  return tripleStep(steps - 1) + tripleStep(steps - 2) + tripleStep(steps - 3);
}

// Time O(3^n)
// Space O(n)

// console.log(tripleStep(8)); // 81
// console.log(tripleStep(4)); // 7
// console.log(tripleStep(3)); // 4

// function fibsMemo(n, memo = {}) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1 || n === 2) { // base case
//     return 1;
//   }
//   if (n in memo) {
//     return memo[n];
//   }

//   // recursive step
//   let answer = fibsMemo(n - 1, memo) + fibsMemo(n - 2, memo);
//   memo[n] = answer;
//   // console.log(memo);
//   return answer;
// }

function tripleStepMemo(steps, memo = {}) {
  if (steps < 0) {
    return 0;
  }
  if (steps === 1 || steps === 0) { // base case
    return 1;
  }
  if (steps in memo) {
    return memo[steps];
  }
  let answer = tripleStepMemo(steps - 1, memo) + tripleStepMemo(steps - 2, memo) + tripleStepMemo(steps - 3, memo);
  memo[steps] = answer;
  return answer;
}

console.log(tripleStepMemo(60));

// Time O(n);
// Space O(2n) => O(n);


function tripleStepIterative(steps) { // 0 1 2
  let tab = [1, 1, 2];
  //         0  1  2  3
  if (steps < 3) {
    return tab[steps];
  }
  for (let i = 3; i <= steps; i++) {
    let first = tab[i - 1];
    let second = tab[i - 2];
    let third = tab[i - 3];
    tab.push(first + second + third);
  }
  return tab.at(-1);
}

// streps = 4

// [1,1,2]

// i = 3
// [1,1,2,4,7]

console.log(tripleStepIterative(60));

// time O(n)
// space O(n)