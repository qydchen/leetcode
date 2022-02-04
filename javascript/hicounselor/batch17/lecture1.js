// Time complexity - represents the # of times a statement is evaluated/executed
// Space complexity - represents the amount of memory an algorithm takes in terms of the amount of input

// Big O notation - represents the worst case scenario possible of an algorithm

function loopThings(n) {
  let sum = 0; // O(1)
  for (let i = 0; i < n; i++) {
    // O(n) where n is the # of instructions
    sum += i; // O(1)
  }
  return sum; // O(1)
}

// O(1 + 1 + n * 1) => O(2 + n) => O(n) time complexity
// O(1) space => we are only using a variable sum that is just a variable
// loopThings(999);
// loopThings(5);
// loopThings(54154);

function generateGrid(length, width) {
  let grid = []; // O(1) time
  for (let i = 0; i < length; i++) {
    // O(length)
    let row = []; // O(1) time
    for (let j = 0; j < width; j++) {
      // O(width)
      row.push("X"); // O(1) time
    }
    grid.push(row); // O(1) time
  }
  return grid; // O(1) time
}

// O(l * w) where l is length and w is width - time complexity
// O(l * w) space complexity

// console.log(generateGrid(2, 4));

function exponent(base, pow) {
  if (pow === 0) {
    return 1;
  }
  return base * exponent(base, pow - 1);
}

// console.log(exponent(2, 12));

// O(n) time complexity where n is the pow
// O(n) space complexity where n is the pow based on the recursive call stack

//

// Write a function that returns the nth fibonacci number. Assume that the fibonacci sequence starts with 1 and 1

function fibs(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fibs(n - 1) + fibs(n - 2);
  }
}

// console.log(fibs(5)); // 8
// console.log(fibs(4)); // 5
// console.log(fibs(3)); // 3
// console.log(fibs(2)); // 2
// console.log(fibs(1)); // 1
// console.log(fibs(0)); // 1

// Time complexity => O(2^n)
// Space complexity => O(n)

//             f(5)
//             /  \
//          f(4)  f(3)
//         /\
//     f(3)  f(2)
//      / \
//  f(2)f(1)
//   /\
// f(1)f(0)

//  bottoms ---> top stack
// [f(5), f(4), f(3), f(2), f(1)]

// console.log(fibs(40)); // <2 secs

// Use memoization: a technique used to save computed answers in a hashmap/object so that
// we have O(1) access to already computed answers

function fibsMemo(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n === 0 || n === 1) return 1;
  let answer = fibsMemo(n - 1, memo) + fibsMemo(n - 2, memo);
  memo[n] = answer;
  // console.log(memo);
  return answer;
}

// console.log(fibsMemo(40)); // close to instant
// O(n) time complexity
// O(n + n) => O(2n) => O(n) space complexity // where we have n sized memo table plus a worst case n length call stack

//

//

//

//

//

//

// LC: Medium

// A child is running up a staircase with n steps and can hop either 1 step, 2 steps,
// or 3 steps at a time. Implement a method to count how many possible ways the child
// can run up the stairs.

// assumptions: if n is 0, then there is only one way a child can jump up the stairs

// if n is 4, then there are 7 ways the child can jump up the stairs

// 3 3 1
// 1 3 3
// 3 1 3
// 2 2
// 1 1 2
// 1 2 1
// 2 1 1

// aka 7 ways

// 3 nested loops, i,j,k
// innermost loop,
// if (3i + 2j + k) > n, break
// if (3i + 2j + k) === n, count++

// tripleStep(3)
// 3
// 1 1 1
// 1 2
// 2 1
// aka 4 ways

// tripleStep(2)
// 2
// 1 1
// aka 2 ways

// tripleStep(1)
// 1
// aka 1 way

// tripleStep(0)
// aka 1 way

// if n is 5, you know that a child can come from n - 1, n - 2, n - 3

//            5             1
//         /  |   \
//        4    3    2       3
//     /  | \   /|\
//   3  2   1   2 1 0       9
// / |\
// 2 1 0                   27

// function fibs(n) {
//   if (n === 0 || n === 1) return 1;
//   return fibs(n - 1) + fibs(n - 2);
// }

function tripleStep(n) {
  if (n === 2) return 2;
  if (n === 1 || n === 0) return 1;
  return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
}

// console.log(tripleStep(35)); // 7
// console.log(tripleStep(5)); // 13

// Time complexity => O(3^n)
// Space complexity => O(n) where n is the tallest call stack

function tripleStepMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 2) return 2;
  if (n === 1 || n === 0) return 1;
  let answer =
    tripleStepMemo(n - 1, memo) +
    tripleStepMemo(n - 2, memo) +
    tripleStepMemo(n - 3, memo);
  memo[n] = answer;
  console.log(memo);
  return answer;
}

// console.log(tripleStepMemo(35));
// O(n) time
// O(n) space

//            5
//         /  |   \
//        4    3    2
//     /  | \
//   3  2   1
// / |\
// 2 1 0

function tripleStepIter(n) {
  if (n === 0 || n === 1) return 1;
  if (n === 2) return 2;
  let intArray = Array(n + 1).fill();
  intArray[0] = 1;
  intArray[1] = 1;
  intArray[2] = 2;
  for (let i = 3; i < intArray.length; i++) {
    intArray[i] = intArray[i - 1] + intArray[i - 2] + intArray[i - 3];
  }
  return intArray[intArray.length - 1];
}

// n = 4

// [1,1,2,4,7]
//          ^
//  0 1 2 3 4


console.log(tripleStepIter(35));
// O(n) time
// O(n) space