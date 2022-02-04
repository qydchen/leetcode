// Trees - a data structure where data is organized in nodes and linked together by edges

// define node & edge
// node - a data structure that stores data and can have a reference to other nodes
// edge - a pointer between nodes

// Binary tree - a tree data structure that has only two children: left and right

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
// root.right.right.right.right.left = new TreeNode(99);

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
  inOrderTraversal(node.left);
  inOrderTraversal(node.right);
}

// preOrderTraversal(root); // 3 2 1 4

// post order
function postOrderTraversal(node) {
  if (node == null) return;
  inOrderTraversal(node.left);
  inOrderTraversal(node.right);
  console.log(node.val);
}

// postOrderTraversal(root); // 1 2 4 3

// time / space complexity

// time O(n) where n is the number of nodes in the binary tree
// space O(n) where n is the number of nodes in the binary tree if the binary tree is reduced to a linked list

// dfs, bfs
function dfs(node, searchVal) {
  if (node === null) return null;
  if (node.val === searchVal) {
    return node;
  }
  const left = dfs(node.left, searchVal);
  const right = dfs(node.right, searchVal);
  return left || right;
}

// console.log(dfs(root, 66)); // 66
// console.log(dfs(root, 42)); // 42
// console.log(dfs(root, -12)); // -12

// Time complexity O(N) where N === # of nodes
// Space complexity O(N) where N === # of nodes


//    3
//   /  \
//  2   4
// /     \
// 1     66
//      / \
//     55  11
//    / \   \
//   9  10  42


function bfs(node, searchVal) {
  if (node === null) return null;
  const queue = [];
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

// console.log(bfs(root, 66)); // 66
// console.log(bfs(root, 42)); // 42
// console.log(bfs(root, -12)); // -12

// Time complexity O(N) where N === # of nodes
// Space complexity O(N) where N === # of nodes




// getMaxTree

// Given a binary tree of all integers, return an array of integers where each index of the array represents
// the 'level' of a tree, and the value in the array is the maximum value in that level


//    3                0
//   /  \
//  2   4              1
// /     \
// 1     66            2
//      / \
//     55  11          3
//    / \   \
//   9  10  42         4

function getMaxTree(node) {
  if (node === null) return null;
  let queue = [];
  queue.push(node);
  let result = [];
  while (queue.length > 0) {
    let newQueue = [];
    let max = Math.max(...queue.map(n => n.val));
    result.push(max);
    for (let i = 0; i < queue.length; i++) {
      let curr = queue[i];
      if (curr.left) {
        newQueue.push(curr.left);
      }
      if (curr.right) {
        newQueue.push(curr.right);
      }
    }
    queue = newQueue;
  }
  return result;
}

// console.log(getMaxTree(root)); // [3,4,66,55,42]

// // console.log(getMaxTree(root)); // [3,4,66,55,42]
// // Time O(n) where n is the numbers of nodes in the tree
// // Space O(h) where h is the height of the tree

// bottom up solution

// getHeight
// Given a binary tree, return the height of the binary tree


//    3              Max(3 5)
//   /  \
//  2   4            Max(2 4)
// /     \
// 1     66          Max(1 3)
//      / \
//    55  11      Max(0 2)
//     / \   \
//    9  10  42        1
//           /
//          99


function getHeight(node) {
  if (node === null) return 0;
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

// console.log(getHeight(root)); // 6



















// Graphs
// undirected graph
// A graph where edges have no direction

// directed graph
// A graph where edges have direction

// 2 ways to represent graphs

class GraphNode {
  constructor(val) {
    this.val = val;
    this.children = []; // List<GraphNode>
    this.visited = false;
  }
}

const adjacencyList = {
  a: ["b", "c,", "d", "g"],
  b: ["e", "f", "g"],
  g: ["x", "y"],
  y: ["z", "a", "b"],
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
one.children.push(three);
three.children.push(two, four);
two.children.push(one);

// crappy drawing of the graph;
// 0 -> 1 <- 2
// | \    \  ^
// v  v    v |
// 5   4 <- 3

function dfSearch(node, target) {
  if (node === null) return null;
  if (node.visited) return null;
  node.visited = true;
  console.log(node.val);
  if (node.val === target) return node;
  for (let child of node.children) {
    let searched = dfSearch(child, target);
    if (searched !== null) {
      return searched;
    }
  }
  return null;
}

// console.log(dfSearch(zero, 5));

function bfSearch(node, target) {
  if (node === null) return null;
  let queue = [];
  queue.push(node);
  while (queue.length !== 0) {
    let curr = queue.shift();
    if (curr.val === target) return curr;
    curr.visited = true;
    for (let child of curr.children) {
      if (!child.visited) {
        queue.push(child);
      }
    }
  }
  return null;
}

// Time Complexity O(n + m) where n is the number of nodes and m is the number of edges
// Space Complexity O(n + m) where n is the number of nodes and m is the number of edges

// console.log(bfSearch(zero, 2));
// console.log(bfSearch(zero, 1));
console.log(bfSearch(zero, 77));
