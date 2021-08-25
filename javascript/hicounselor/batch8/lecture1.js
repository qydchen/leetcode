// Given a number and power, return the exponent

// exponent(base, power)
// exponent(2, 4) // => 16

// BASE CASE
// any number to the 0th power is 1

// ITERATIVE STEP
// f(0) = 1
// f(1) = 2
// f(2) = 2 * 2
// f(3) = 2 * 2 * 2

// f(3) = 2 * f(2)
// f(2) = 2 * f(1)
// f(1) = 2 * f(0)

// f(n) = base * f(n - 1)

function exponent(base, pow) {
  // base case
  if (pow === 0) {
    return 1;
  }
  // iterative step
  return base * exponent(base, pow - 1);
}

// console.log(exponent(2, 4));
// console.log(exponent(3, 2));

// [1,1,2,3,5,8,13,21]

// Write a function that would give me the nth fibonacci number

// fibs(n)
// fibs(2) // => 2
// fibs(3) // => 3

// BASE CASE
// f(0) => 1
// f(1) => 1
// f(2) => 1 + 1
// f(3) => 2 + 1
// f(4) => 3 + 2

// f(4) => f(3) + f(2)
// f(n) => f(n - 1) + f(n - 2)
function fibs(n) {
  // base case
  if (n === 0 || n === 1) {
    return 1;
  }
  // recursive step
  return fibs(n - 1) + fibs(n - 2);
}

// console.log(fibs(2)) // 2
// console.log(fibs(3)) // 3
// console.log(fibs(40))

// time complexity O(2^n)

//              f(7)             1
//            /      \
//          f(6)     f(5)        2
//         / \        /   \
//       f(5) f(4)   f(4) f(3)   4
//      /  \    /  \
//     f(4)f(3)f(3) f(2)                      8
//    /
//   f(3)
//   /
//  f(..)
// /
// f(0)

// space complexity O(n) where n is the input

function fibsMemo(n, memo = {}) {
  if (memo[n]) {
    return memo[n];
  }
  // base case
  if (n === 0 || n === 1) {
    return 1;
  }
  // recursive step
  const result = fibs(n - 1, memo) + fibs(n - 2, memo);
  memo[n] = result;
  return memo[n];
}

// time complexity => O(n) // memoization has reduced the repetitive calls, and thus the
// function call tree was pruned and reduced to a single linear call
// space complexity => O(n + n) => O(2n) => O(n)

// console.log(fibs(2)) // 2
// console.log(fibs(3)) // 3
// console.log(fibs(40));

// Given a map where keys are employeeIds and values are a list of employeeIds, given an employeeIds as the argument
// Tell me how many people are in the employeeId's reporting line

const reportingLine = {
  a: ["b", "c,", "d"],
  b: ["e", "f", "g"],
  g: ["x", "y"],
  y: ["z"],
};
//           a
//        /  |  \
//       b   c   d
//    / | \
//  e  f  g
//        /\
//      x   y
//          /
//         z

function countSubordinatesFromReportingLine(hierarchy, employeeIdTarget) {
  let queue = [];
  queue.push(employeeIdTarget); // ['b']
  let count = -1;
  while (queue.length > 0) {
    let current = queue.shift(); // [] // current = 'b'
    count++;
    if (hierarchy[current] !== undefined) {
      queue = queue.concat(hierarchy[current]); // [e,f,g]
    }
  }
  return count;
}
// time complexity = O(n) // where n is the entire population of the hierarchy
// space complexity = O(n) // where worse case is that there is one employee with all n - 1 people in the hierarchy
// console.log(countSubordinatesFromReportingLine(reportingLine, 'b')) // => 6
// console.log(countSubordinatesFromReportingLine(reportingLine, 'z')) // => 0
// console.log(countSubordinatesFromReportingLine(reportingLine, 'y')) // => 1
// console.log(countSubordinatesFromReportingLine(reportingLine, 'm')) // => 0
// console.log(countSubordinatesFromReportingLine(reportingLine, 'a')) // => 9

// Given a collection of coin denominations, and a target cent value, find the minimum
// number of possible coins that can be used to make that value

const denoms = [1, 5, 10, 25];
// const target = 42;
// 1 quarter, 1 nickel, 1 dime, 2 pennies // 5

const target = 6;
// 2

// [0   ,1   ,2   ,3   ,4   ,5   ,null];

// consider we are in the first denomation 1
// tab = [0, 1, 2, 3, 4, 5, 6]; where 1
// we are in the second denom 5
// tab = [0, 0, 0, 0, 0, 1, (6 - 5) + 1]; where denom is 5
//^ nickel
// [1, 5, 10, 25]

// current tabulation = 1
// check if tab is null, if its null, then set it to the min value of n

function minNumberOfCoinsForChange(n, denoms) {
  const mins = new Array(n + 1).fill(Infinity);
  mins[0] = 0;
  for (let denom of denoms) {
    for (let amt = 0; amt < mins.length; amt += 1) {
      console.log(mins);
      if (amt >= denom) {
        mins[amt] = Math.min(mins[amt], mins[amt - denom] + 1);
      }
    }
  }
  return mins[mins.length - 1] !== Infinity ? mins[mins.length - 1] : -1;
}
