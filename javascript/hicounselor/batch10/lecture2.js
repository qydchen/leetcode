// Trees

// define node & edge

// A binary tree is a tree in which each node has at most 2 children, a left, and a right

// in order
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);

let root = three;
root.left = two;
root.right = four;
root.left.left = one;
root.right.right = new TreeNode(66);
root.right.right.left = new TreeNode(55);
root.right.right.right = new TreeNode(11);
root.right.right.left.left = new TreeNode(9);
root.right.right.left.right = new TreeNode(10);
root.right.right.right.right = new TreeNode(42);

//    3
//   /  \
//  2   4
// /     \
// 1     66
//      / \
//     55  11
//    / \   \
//   9  10  42

// post order
function postOrderTraversal(node) {
  if (node != null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.val);
  }
  return arr;
}

// postOrderTraversal(root); // [1, 2, 9, 10, 55, 42, 11, 66, 4, 3];

function inOrderTraversal(node) {
  if (node != null) {
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
  }
}

// inOrderTraversal(root); // 1 2 3 4 9 55 10 66 11 42

// pre order
function preOrderTraversal(node) {
  if (node != null) {
    console.log(node.val);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}

// preOrderTraversal(root); // [3, 2, 1, 4, 66, 55, 9, 10, 11, 42];

// time / space complexity

// time O(n) where n is the number of nodes in the binary tree
// space O(n) where n is the number of nodes in the binary tree if the binary tree is reduced to a linked list

// dfs, bfs
function dfs(node, searchVal) {
  if (node == null) {
    return null; // base case
  }
  if (node.val === searchVal) {
    return node;
  }
  let result = null;
  result = dfs(node.left, searchVal) || dfs(node.right, searchVal);
  return result;
} // depth first search

// console.log(dfs(root, 66)?.val);
// console.log(dfs(root, 42)?.val);

function bfs(node, searchVal) {
  // breadth first search
  if (node == null) {
    return null;
  }
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    let curr = queue.shift(); // grab a reference to the first element in queue and dequeue element
    if (curr.left != null) {
      queue.push(curr.left);
    }
    if (curr.right != null) {
      queue.push(curr.right);
    }
    if (curr.val === searchVal) {
      return curr;
    }
  }
  return null;
}

// console.log(bfs(root, 10).val);

// getMaxTree

// Given a binary tree of all integers, return an array of integers where each index of the array
// represents the 'level' of a tree, and the value in the array is the maximum value in that level

//    3            0
//   /  \
//  2   4          1
// /     \
// 1     66        2
//      / \
//     55  11      3
//    / \   \
//   9  10  42     4

function getMaxTree(node) {
  if (node == null) {
    return null;
  }
  let maxValues = [];
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    let maxAtCurrentLevel = Math.max(...queue.map((n) => n.val));
    maxValues.push(maxAtCurrentLevel);

    let queueOfChildren = [];
    for (let n of queue) {
      if (n.left != null) {
        queueOfChildren.push(n.left);
      }
      if (n.right != null) {
        queueOfChildren.push(n.right);
      }
    }
    queue = queueOfChildren;
  }
  return maxValues;
}

// console.log(getMaxTree(root)); // [3,4,66,55,42]

// Time O(n) where n is the numbers of nodes in the tree
// Space O(h) where h is the height of the tree

// bottom up solution

// getHeight
// Given a binary tree, return the height of the binary tree

function getHeight(root) {
  if (root === null) {
    return -1;
  }
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

//    3              4
//   /  \
//  2   4            3
// /     \
// 1     66          2
//      / \
//     55  11        1
//    / \   \
//   9  10  42       0
//  /\
// nul nul          -1

console.log(getHeight(root)); // 4
console.log(getHeight(null)); // -1
console.log(getHeight(new TreeNode("hello"))); // 0

// Graphs
// undirected graph
// A graph where edges have no direction

// directed graph
// A graph where edges have direction

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

// let [zero, one, two, three, four, five] = [
//   new GraphNode(0),
//   new GraphNode(1),
//   new GraphNode(2),
//   new GraphNode(3),
//   new GraphNode(4),
//   new GraphNode(5),
// ];

// zero.children.push(one, four, five);
// one.children.push(three, four);
// three.children.push(two, four);
// two.children.push(one);

// crappy drawing of the graph;
// 0 -> 1 <- 2
// | \    \  ^
// v  v    v |
// 5   4 <- 3

function dfSearch(node, target) {}

// console.log(dfSearch(zero, 2));

function bfSearch(node, target) {}

// Time Complexity O(n + m) where n is the number of nodes and m is the number of edges
// Space Complexity O(n + m) where n is the number of nodes and m is the number of edges

// console.log(bfSearch(zero, 2));
