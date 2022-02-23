// Time complexity - represents the # of times a statement is evaluated/executed
// Space complexity - represents the amount of memory an algorithm takes in terms of the amount of input

// Big O notation - represents the worst case scenario possible of an algorithm

function loopThings(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) { // the # of times this for loop loops
    console.log(i);
    sum += i;
  }
  return sum;
}

// Time complexity = O(n) where n is the input
// Space complexity = O(1)

function generateGrid(length, width) {
  let grid = [];
  for (let i = 0; i < length; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push('X');
    }
    grid.push(row);
  }
  return grid;
}

// Time complexity = O(l * w) where l is lenght and w is width
// Space complexity = O(l * w) where l is length and w is width

// console.log(generateGrid(3, 3));
// console.log(generateGrid(4, 5));

// tip: be proactive on stating complexity

function exponent(base, pow) {
  if (pow === 0) {
    return 1;
  }
  return base * exponent(base, pow - 1);
}

// left = bottom of the stack; right = top of the stack
// stack = [exponent(2, 3), exponent(2, 2), exponent(2, 1), exponent(2, 0)]

// Time complexity is O(pow)
// Space complexity is O(pow)

// console.log(exponent(2, 3)); // 8
// console.log(exponent(9, 2)); // 81

// exponent(1, 999)




// Write a function that returns the nth fibonacci number. Assume that the fibonacci sequence starts with 1 and 1

// When we solve recursive problems, we need to identify two things:
// 1. the iterative step - the scenario where we can derive all possible answers with
// 2. the base case - the scenario where we absolutely know what the answer is going to be

function fibs(n) {
  if (n === 1 || n === 2) return 1; // base
  return fibs(n - 1) + fibs(n - 2); // iterative step
}

// console.log(fibs(1)) // 1
// console.log(fibs(2)) // 1
// console.log(fibs(3)) // 2
// console.log(fibs(4)) // 3
// console.log(fibs(5)) // 5
// console.log(fibs(6)) // 8

// fibs(5) = 3 + 2
// fibs(5) = fibs(4) + fibs(3)
// fibs(4) = fibs(3) + fibs(2)
// fibs(3) = fibs(2) + fibs(1)
// fibs(n) = fibs(n - 1) + fibs(n - 2)

// Time complexity O(2^n)
// Space complexity O(n)

//              f(5)             1
//              /  \
//            f(4) f(3)          2
//           /  \     /\
//        f(3)  f(2) f(2)(f1)    4
//        / \
//      f(2)f(1)


// How can we improve upon this solution?

// Memoization: a technique used to save computed answers in a hashmap/object so that we have O(1) access to already computed answers

// in the hashmap, the key of the hashmap is going to be the input, and the value of the associated key is the answer
function fibsMemo(n, memo = {}) {
  if (n === 1 || n === 2) return 1;
  if (n in memo) {
    return memo[n];
  }
  let answer = fibsMemo(n - 1, memo) + fibsMemo(n - 2, memo);
  memo[n] = answer;
  return answer;
}

// console.log(fibsMemo(45));

//                  f(6)
//                /     \
//              f(5)     f(4)
//              /  \
//            f(4) f(3)
//           /  \
//        f(3)  f(2)
//        / \
//      f(2)f(1)


// time complexity O(n)
// space complexity O(n + n) => O(2n) => O(n) where the first n is the largest of the call stack and the second n is the size of memo






// LC: Medium

// A child is running up a staircase with n steps and can hop either 1 step, 2 steps,
// or 3 steps at a time. Implement a method to count how many possible ways the child
// can run up the stairs.

// assumptions: if n is 0, then there is only one way a child can jump up the stair

// if n is 4, then there are 7 ways the child can jump up the stairs

// n = 4

// 1 1 1 1
// 1 2 1
// 2 1 1
// 1 1 2
// 3 1
// 1 3
// 2 2

// count = 7

// n = 3
// 1 1 1
// 2 1
// 1 2
// 3

// count = 4

// n = 2
// 1 1
// 2

// count = 2

// n = 1
// 1

// count = 1

// n = 0

// count = 1

// suppose the nth step, we could just worry about the n -1 step, the n - 2 step, and the n - 3 step

// f(n) = f(n - 1) + f(n - 2) + f(n - 3)
// f(4) = f(3) + f(2) + f(1);
// 7 = 4 + 2 + 1
// f(5) = f(4) + f(3) + f(2)
// f(5) = 7 + 4 + 2 = 13

// n = 5

// 1 1 1 1 1
// 2 2 1
// 1 2 2
// 2 1 2
// 3 2
// 2 3
// 3 1 1
// 1 1 3
// 1 3 1
// 2 1 1 1
// 1 2 1 1
// 1 1 2 1
// 1 1 1 2
// count = 13

function tripleStep(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
}

// console.log(tripleStep(4))
// console.log(tripleStep(5))
// console.log(tripleStep(3))
// console.log(tripleStep(6)) // 24
// console.log(tripleStep(35))

// Time complexity O(3^n)
// Space complexity O(n)

function tripleStepMemo(n, memo = {}) {
  if (n === 0 || n === 1) return 1;
  if (n === 2) return 2;
  if (n in memo) return memo[n];
  let answer = tripleStepMemo(n - 1, memo) + tripleStepMemo(n - 2, memo) + tripleStepMemo(n - 3, memo);
  memo[n] = answer;
  return answer;
}

// console.log(tripleStepMemo(35))
// Time complexity O(n)
// Space complexity O(n)

// Write tripleStep iteratively

// Suppose n is 4
// [1, 1, 2, 4, 7]
//  0  1  2  3  4

function tripleStepIterative(n) {
  let steps = [1, 1, 2]; // O(n) space complexity
  for (let i = 3; i <= n; i++) { // O(n) time
    steps.push(steps[i - 1] + steps[i - 2] + steps[i - 3]);
  }
  return steps.at(-1);
}

// console.log(tripleStepIterative(4));
// console.log(tripleStepIterative(5));
// console.log(tripleStepIterative(35));