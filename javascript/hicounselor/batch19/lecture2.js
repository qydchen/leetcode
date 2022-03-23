// Trees

// define node & edge
// a node is a data structure that has a store of data
// an edge is a reference between two nodes

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

function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
  }
}

// inOrderTraversal(root); // expect to print 1 2 3 4

// pre order
function preOrderTraversal(node) {
  if (node !== null) {
    console.log(node.val);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}

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
  if (node === null) return null;
  if (node.val === searchVal) {
    return node;
  }
  const left = dfs(node.left, searchVal);
  const right = dfs(node.right, searchVal);
  return left || right;
}

// console.log(dfs(root, 66));
// console.log(dfs(root, 10));
// console.log(dfs(root, 1));
// console.log(dfs(root, -10));

function bfs(node, searchVal) {
  if (node === null) return null;
  let queue = [node];
  while (queue.length > 0) {
    let current = queue.shift();
    if (current.val === searchVal) {
      return current;
    }
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return null;
}

// console.log(bfs(root, 66));
// console.log(bfs(root, 10));
// console.log(bfs(root, 1));
// console.log(bfs(root, -10));



// getMaxTree

// Given a binary tree of all integers, return an array of integers where each index of
// the array represents the 'level' of a tree, and the value in the array
// is the maximum value in that level

function getMaxTree(node) {
  if (node === null) return [];
  let queue = [node];
  let result = [];
  while (queue.length > 0) {
    let newQueue = [];
    let max = Math.max(...queue.map(n => n.val));
    result.push(max);

    for (let n of queue) {
      if (n.left !== null) {
        newQueue.push(n.left);
      }
      if (n.right !== null) {
        newQueue.push(n.right);
      }
    }
    queue = newQueue;
  }
  return result;
}

// console.log(getMaxTree(root)); // [3,4,66,55,42]
// time complexity O(n) where n is # of nodes
// space complexity O(n + h) where n is # of nodes that exist in the queue
//          PLUS the resultant array which its size represents the height of the input tree




// bottom up solution

// getHeight
// Given a binary tree, return the height of the binary tree



//
//    3           5
//   /  \
//  2   4         4
// /     \
// 1     66       3
//      / \
//     55  11     2
//    / \   \
//   9  10  42    1

// top down
function getHeight(root, level = 0) {
  if (root === null) return level;
  return Math.max(getHeight(root.left, level + 1), getHeight(root.right, level + 1));
}

// bottom up
function getHeight(root) {
  if (root === null) return 0;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

// console.log(getHeight(root)); // 5


// Graphs
// undirected graph
// A graph where edges have no direction

// directed graph
// A graph where edges have direction

class Graphs {
  collection = [];
  constructor(graphCollection) {
    this.collection = graphCollection;
  }
}

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

// 0 -> 1 <- 2
// | \    \  ^
// v  v    v |
// 5   4 <- 3

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



function dfSearch(node, target) {
  if (node === null) return null;
  if (node.visited === true) return null;
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

// Time complexity O(V + E) where V is the total number of vertices (aka nodes) in the graph
// and E where is the total number of edges (connections) in the graph
// Space complexity O(V)

// console.log(dfSearch(zero, 4));
// console.log(dfSearch(zero, 2));
// console.log(dfSearch(zero, 5));





function bfSearch(node, target) {
  if (node === null) return null;
  let queue = [node];
  while (queue.length > 0) {
    let current = queue.shift();
    current.visited = true;
    if (current.val === target) return current;
    for (let child of current.children) {
      if (!child.visited) {
        queue.push(child);
      }
    }
  }
  return null;
}


// Time Complexity O(n + m) where n is the number of nodes and m is the number of edges
// Space Complexity O(n) where n is the number of nodes

console.log(bfSearch(zero, 4));
