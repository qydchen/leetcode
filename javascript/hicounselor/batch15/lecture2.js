// Trees - a data structure where data is organized where data is linked by edges

// define node & edge
// the number of nodes will always be 1 more than the number of edges

// in order
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const one = new TreeNode(1);
// const two = new TreeNode(2);
// const three = new TreeNode(3);
// const four = new TreeNode(4);

// let root = three;
// root.left = two;
// root.right = four;
// root.left.left = one;
// root.right.right = new TreeNode(66);
// root.right.right.left = new TreeNode(55);
// root.right.right.right = new TreeNode(11);
// root.right.right.left.left = new TreeNode(9);
// root.right.right.left.right = new TreeNode(10);
// root.right.right.right.right = new TreeNode(42);

//    3
//   / \
//  2   4
// /
// 1

function inOrderTraversal(node) {
  if (node == null) return;
  inOrderTraversal(node.left);
  console.log(node.val);
  inOrderTraversal(node.right);
}

// inOrderTraversal(root); // expect to print 1 2 3 4

// pre order
function preOrderTraversal(node) {
  if (node == null) return;
  console.log(node.val);
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

// preOrderTraversal(root); // 3 2 1 4

// post order
function postOrderTraversal(node) {
  if (node == null) return;
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
  console.log(node.val);
}

// postOrderTraversal(root); // 1 2 4 3

// time / space complexity

// time O(n) where n is the number of nodes in the binary tree
// space O(n) where n is the number of nodes in the binary tree if the binary tree is reduced to a linked list

// dfs, bfs

//    3
//   / \
//  2   4
// /
// 1

function dfs(node, searchVal) {
  if (node == null) return null;
  if (node.val === searchVal) return node;
  let left = dfs(node.left, searchVal);
  let right = dfs(node.right, searchVal);
  return left || right;
}

// console.log(dfs(root, 66));
// console.log(dfs(root, 10));
// console.log(dfs(root, 322131));

function bfs(node, searchVal) {
  if (node == null) return null;
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr.val === searchVal) {
      return curr;
    }
    if (curr.left != null) {
      queue.push(curr.left);
    }
    if (curr.right != null) {
      queue.push(curr.right);
    }
  }
  return null;
}

// console.log(bfs(root, 66));
// console.log(bfs(root, 10));
// console.log(bfs(root, 322131));

// getMaxTree

// Given a binary tree of all integers, return an array of integers where each index of the array represents the 'level' of a tree, and the value in the array
// is the maximum value in that level

function getMaxTree(node) {
  if (node == null) return [];
  let queue = [];
  let result = [];
  queue.push(node);
  while (queue.length > 0) {
    let nextQueue = [];
    let currentMax = null;
    for (let i = 0; i < queue.length; i++) {
      let curr = queue[i];
      if (curr.left != null) {
        nextQueue.push(curr.left);
      }
      if (curr.right != null) {
        nextQueue.push(curr.right);
      }
      if (currentMax === null || currentMax < curr.val) {
        currentMax = curr.val;
      }
    }
    result.push(currentMax);
    queue = nextQueue;
  }
  return result;
}

// console.log(getMaxTree(root)); // [3,4,66,55,42]
//  0,1, 2, 3, 4

// Time O(n) where n is the numbers of nodes in the tree
// Space O(h) where h is the height of the tree

// bottom up solution

// getHeight
// Given a binary tree, return the height of the binary tree

//    3
//   /
//  2

function getHeight(root) {
  if (root === null) return 0;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

// console.log(getHeight(root)); // 5

// let myExample = new TreeNode(3);
// myExample.left = new TreeNode(2);
// console.log(getHeight(myExample));

// Graphs
// undirected graph
// A graph where edges have no direction

//     "a"-"b"

// directed graph
// A graph where edges have direction

//     "a"->"b"

// 2 ways to represent graphs
class GraphNode {
  constructor(val) {
    this.val = val;
    this.children = [];
    this.visited = false;
  }
}

const adjacencyList = {
  a: ["b", "c,", "d"],
  b: ["e", "f", "g"],
  g: ["x", "y"],
  y: ["z"],
};

let [zero, one, two, three, four, five] = [
  new GraphNode(0),
  new GraphNode(1),
  new GraphNode(2),
  new GraphNode(3),
  new GraphNode(4),
  new GraphNode(5),
];

zero.children.push(one, four, five);
one.children.push(three, four);
three.children.push(two, four);
two.children.push(one);

// crappy drawing of the graph;
// 0 -> 1 <- 2
// | \    \  ^
// v  v    v |
// 5   4 <- 3

function dfSearch(node, target) {
  if (node == null) return null;
  if (node.visited === true) return null;
  node.visited = true;
  if (node.val === target) return node;
  for (let child of node.children) {
    let search = dfSearch(child, target);
    if (search != null) {
      return search;
    }
  }
  return null;
}

// console.log(dfSearch(zero, 2));

function bfSearch(node, target) {
  if (node === null) return null;
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    let curr = queue.shift();
    curr.visited = true;
    if (curr.val === target) return curr;
    for (let child of curr.children) {
      if (child.visited === false) {
        queue.push(child);
      }
    }
  }
  return null;
}

// console.log(bfSearch(zero, 2));
// console.log(bfSearch(zero, 5));
// console.log(bfSearch(zero, 4));

// Time Complexity O(n + m) where n is the number of nodes and m is the number of edges
// Space Complexity O(n + m) where n is the number of nodes and m is the number of edges
