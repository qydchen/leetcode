// Time Complexity - represents the # of times a statement is evaluated
// Space Complexity - represents the amount of memory an algorithm takes in terms of the amount of input

// Big O notation - represents the worst case possible of a algorithm

function loopThings(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    // O(n) time complexity // O(1) space complexity
    sum += i;
  }
  return sum;
}

// loopThings(100);
// loopThings(99999);

function generateGrid(length, width) {
  // Time Complexity O(length * width) // Space Complexity O(l * w)
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
// console.log(generateGrid(10, 10));

// A binary tree is a data structure where each node can have at most two children, a left and a right. Each child itself is also a node.

//       a
//      / \
//     b   c
//    /
//   d
//  / \
// e   f
class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");

let root = a;
a.left = b;
b.left = d;
a.right = c;
d.left = new Node("e");
d.right = new Node("f");

function dfs(root, target) {
  // Time Complexity O(n) where n is # of nodes   | Space Complexity O(n) where n is # of nodes, when the binary tree collapses to a linked list
  if (root == null) {
    return null;
  }
  if (root.val === target) {
    return root;
  }
  return dfs(root.left, target) || dfs(root.right, target);
}

// console.log(dfs(root, "f"));
// console.log(dfs(root, "d"));

// Recursion
// the repeated application of a procedure or definition that can be divided in to smaller subproblems

function exponent(base, pow) {
  // Time O(pow) | Space O(pow)
  if (pow === 0) {
    // base case
    return 1;
  }
  return base * exponent(base, pow - 1);
}
// f(b, p) = b * f(b, p - 1)

// console.log(exponent(3, 4)); // 3 * 3 * 3 * 3 = 81
// console.log(exponent(5, 2)); // 5 * 5 = 25

function reverseStrRecursive(str) {
  // Time O(n) where n is length of str | Space O(n) where n is length of str
  if (str.length === 0) return "";
  return str[str.length - 1].concat(reverseStrRecursive(str.slice(0, -1)));
}

// console.log(reverseStrRecursive("apple"));

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// Write a function that returns the nth fibonacci number
function fibs(n) {
  // O(2^n) time
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibs(n - 1) + fibs(n - 2);
}

// fibs(4) // 0, 1, 1, 2, 3 => 3

// base case 0, 1

// f(4) = f(3) + f(2)
// f(n) = f(n - 1) + f(n - 2);

// console.log(fibs(4));

// Memoization -> a way to store precomputed values in memory such that we do not have to calculate it again
function fibsWithMemo(n, memo = {}) {
  // O(n) time complexity where the memo table "pruned" the call tree
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (!memo[n]) {
    memo[n] = fibsWithMemo(n - 1, memo) + fibsWithMemo(n - 2, memo);
  }
  return memo[n];
}

console.log("with memo");
console.log(fibsWithMemo(40));
console.log("---");
console.log("no memo");
console.log(fibs(40));
