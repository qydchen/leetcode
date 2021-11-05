// Trees

// define node & edge
// A node is a data structure of a tree that stores data
// An edge is a reference between two nodes

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

function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
  }
}

// inOrderTraversal(root); // expect to print 1 2 3 4
// time complexity O(n)
// space complexity O(n)

// pre order
function preOrderTraversal(node) {
  if (node !== null) {
    console.log(node.val);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}

//    3
//   /  \
//  2   4
// /
// 1

// preOrderTraversal(root); // 3 2 1 4

// post order
function postOrderTraversal(node) {
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.val);
  }
}

// postOrderTraversal(root); // 1 2 4 3

// time / space complexity

// time O(n) where n is the number of nodes in the binary tree
// space O(n) where n is the number of nodes in the binary tree if the binary tree is reduced to a linked list

// dfs, bfs
function dfs(node, searchVal) {
  if (node == null) {
    return;
  }
  if (node.val === searchVal) {
    return node;
  }
  let left = dfs(node.left, searchVal);
  let right = dfs(node.right, searchVal);
  if (left != null) {
    return left;
  }
  if (right != null) {
    return right;
  }
  return null;
}

// console.log(dfs(root, 55));
// console.log(dfs(root, 1));
// console.log(dfs(root, -99));
// console.log(dfs(root, 0));

function bfs(node, searchVal) {
  if (node == null) return;
  let queue = [];
  // enqueue the current root node;
  queue.push(node);
  while (queue.length !== 0) {
    let curr = queue.shift();
    if (curr.val === searchVal) {
      return curr;
    }
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return null;
}

// console.log(bfs(root, 55));
// console.log(bfs(root, 1));
// console.log(bfs(root, -99));
// console.log(bfs(root, 0));

// getMaxTree

// Given a binary tree of all integers, return an array of integers where each index of the array represents the 'level' of a tree, and the value in the array
// is the maximum value in that level

//    3
//   /  \
//  2   4
// /     \
// 1     66
//      / \
//     55  11
//    / \   \
//   9  10  42

function getMaxTree(node) {
  if (node == null) {
    return [];
  }
  let maxes = [];
  let queue = [];
  queue.push(node);
  while (queue.length !== 0) {
    let childQueue = [];
    let max = Math.max(...queue.map((n) => n.val));
    maxes.push(max);
    for (let n of queue) {
      if (n.left !== null) {
        childQueue.push(n.left);
      }
      if (n.right !== null) {
        childQueue.push(n.right);
      }
    }
    queue = childQueue;
  }
  return maxes;
}

// console.log(getMaxTree(root)); // [3,4,66,55,42]

// bottom up solution

//    3
//   /  \
//  2   4
// /     \
// 1     66
//      / \
//     55  11
//    / \   \
//   9  10  42

// getHeight
// Given a binary tree, return the height of the binary tree

function getHeight(root) {
  if (root === null) return 0;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

// 1 + Math.max(getHeight(root.left), getHeight(root.right))

// console.log(getHeight(root)); // 5

// Graphs
// undirected graph
// A graph where edges have no direction

// directed graph
// A graph where edges have direction

// // 2 ways to represent graphs
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
  y: ["z", "a"],
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
// 5   4  <- 3

function dfSearch(node, target) {
  if (node === null || node.visited === true) return null;
  if (node.val === target) return node;
  node.visited = true;
  for (let child of node.children) {
    let searched = dfSearch(child, target);
    if (searched !== null) {
      return searched;
    }
  }
  return null;
}

// console.log(dfSearch(zero, 2));
// console.log(dfSearch(zero, 55));
// console.log(dfSearch(zero, 4));

function bfSearch(node, target) {
  if (node === null) return null;
  let queue = [];
  queue.push(node);
  while (queue.length !== 0) {
    let curr = queue.shift();
    if (curr.val === target) return curr;
    curr.visited = true;
    for (let n of curr.children) {
      if (n.visited === false) {
        queue.push(n);
      }
    }
  }
  return null;
}

// // Time Complexity O(n + m) where n is the number of nodes and m is the number of edges
// // Space Complexity O(n + m) where n is the number of nodes and m is the number of edges

// console.log(bfSearch(zero, 2));
// console.log(bfSearch(zero, 55));
console.log(bfSearch(zero, 4));
