// Trees
// A data structure where nodes are associated with each other through edges,
// aka data is organized in a 'tree'-like fashion

// define node & edge
// Node = a piece of data in a tree
// Edge = a pointer between two nodes in a tree

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
// /
// 1

function inOrderTraversal(node) {
  if (node != null) {
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
  }
}

// inOrderTraversal(root); // expect to print 1 2 3 4

// pre order
function preOrderTraversal(node) {
  if (node != null) {
    console.log(node.val);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}

// preOrderTraversal(root); // 3 2 1 4

// post order
function postOrderTraversal(node) {
  if (node != null) {
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
  if (node != null) {
    if (node.val === searchVal) {
      return node;
    }
    return dfs(node.left, searchVal) || dfs(node.right, searchVal);
  }
  return null;
}

// function dfsV2(node, searchVal) {
//   if (node == null) return null;
//   if (node.val === searchVal) {
//     return node;
//   }
//   return dfs(node.left, searchVal) || dfs(node.right, searchVal);
// }

//    3
//   /  \
//  2   4
// /     \
// 1     66
//      / \
//     55  11
//    / \   \
//   9  10  42

// console.log(dfs(root, 11));

function bfs(node, searchVal) {
  if (node == null) return null;
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    let currentNode = queue.pop();
    if (currentNode.val === searchVal) {
      return currentNode;
    }
    if (currentNode.left != null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right != null) {
      queue.push(currentNode.right);
    }
  }
  return null;
}

// console.log(bfs(root, 99));
// console.log(bfs(root, 9));

// // getMaxTree

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
  if (node == null) return null;
  let maxList = [];
  let queue = [node];
  while (queue.length > 0) {
    const maxValAtCurrentLevel = Math.max(...queue.map((n) => n.val));
    maxList.push(maxValAtCurrentLevel);
    let newQueue = [];
    for (let n of queue) {
      let left = n.left;
      if (left != null) {
        newQueue.push(left);
      }
      let right = n.right;
      if (right != null) {
        newQueue.push(right);
      }
    }
    queue = newQueue;
  }
  return maxList;
}

// console.log(getMaxTree(root)); // [3,4,66,55,42]

// // bottom up solution

// // getHeight
// // Given a binary tree, return the height of the binary tree

function getHeight(root) {
  if (root == null) return 0;
  let leftMax = getHeight(root.left);
  let rightMax = getHeight(root.right);
  return Math.max(leftMax, rightMax) + 1;
}

//    3
//   /  \
//  2   4
// /     \
// 1     66
//      / \
//     55  11
//    / \   \
//   9  10  42

// console.log(getHeight(root)); // 5

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

let [zero, uno, dos, tres, quatro, cinco] = [
  new GraphNode(0),
  new GraphNode(1),
  new GraphNode(2),
  new GraphNode(3),
  new GraphNode(4),
  new GraphNode(5),
];

zero.children.push(uno, quatro, cinco);
uno.children.push(tres, quatro);
tres.children.push(dos, quatro);
dos.children.push(uno);

// crappy drawing of the graph;
// 0 -> 1 <- 2
// | \    \  ^
// v  v    v |
// 5   4 <- 3

function dfSearch(node, target) {
  if (node == null) return null;
  if (node.visited == true) return null;
  node.visited = true;
  if (node.val === target) {
    return node;
  }
  for (let n of node.children) {
    let searchedVal = dfSearch(n, target);
    if (searchedVal != null) {
      return searchedVal;
    }
  }
  return null;
}

// console.log(dfSearch(zero, 2));
// console.log(dfSearch(zero, 5));

function bfSearch(node, target) {
  if (node == null) return null;
  let queue = [node];
  while (queue.length > 0) {
    let curr = queue.shift();
    curr.visited = true;
    if (curr.val === target) {
      return curr;
    }
    for (let child of curr.children) {
      if (child.visited === false) {
        queue.push(child);
      }
    }
  }
  return null;
}

// Time Complexity O(n + m) where n is the number of nodes and m is the number of edges
// Space Complexity O(n + m) where n is the number of nodes and m is the number of edges

// console.log(bfSearch(zero, 2));

// Return the sum of sum of unique paths in a matrix of ints
// Assume you start at pos 0,0 and you can only traverse right and down

let matrix = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

// 1 2 4 = 7
// 1 3 4 = 8

// 7 + 8 = 15
function sumOfSumOfMatrix(matrix) {
  return dfsMatrix(0, 0, matrix, matrix[0][0]); // 1
}

function dfsMatrix(i, j, matrix, curr) {
  // curr = 1 // curr = 4 // curr = 8
  if (i > matrix.length - 1 || j > matrix[0].length - 1) return 0;
  if (i === matrix.length - 1 && j === matrix[0].length - 1) return curr;
  let down = i + 1 < matrix.length ? matrix[i + 1][j] : 0;
  let right = j + 1 < matrix[0].length ? matrix[i][j + 1] : 0;
  return (
    dfsMatrix(i + 1, j, matrix, curr + down) + // 4 + 0
    dfsMatrix(i, j + 1, matrix, curr + right) // 4 + 4
  );
}

console.log(sumOfSumOfMatrix(matrix)); // 15
