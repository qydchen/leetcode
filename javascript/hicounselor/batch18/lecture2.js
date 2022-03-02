// Trees - a data structure where data is organized in nodes and linked together by edges
// each node can have at most two children, a left and a right

// node - a data structure that stores data and can have a reference to other nodes
// edge - a pointer between nodes

// The relationship between a node and an edge is that for a tree, for every n nodes,
// there will always be n - 1 edges.

//    3
//   /  \
//  2   4
// /     \
// 1     66
//      / \
//     55  11
//    / \   \
//   9  10  42

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

// //    3
// //   /  \
// //  2   4
// // /
// // 1

// root.right.right = new TreeNode(66);
// root.right.right.left = new TreeNode(55);
// root.right.right.right = new TreeNode(11);
// root.right.right.left.left = new TreeNode(9);
// root.right.right.left.right = new TreeNode(10);
// root.right.right.right.right = new TreeNode(42);

function inOrderTraversal(node) {
  if (node === null) return;
  inOrderTraversal(node.left);
  console.log(node.val);
  inOrderTraversal(node.right);
}

// inOrderTraversal(root); // expect to print 1 2 3 4

// pre order
function preOrderTraversal(node) {
  if (node === null) return;
  console.log(node.val);
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

// preOrderTraversal(root); // 3 2 1 4

// post order
function postOrderTraversal(node) {
  if (node === null) return;
  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
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

// console.log(dfs(root, 11));
// console.log(dfs(root, -1));
// console.log(dfs(root, 9));
// O(n) time where we have to search all the nodes in the tree
// O(n) space where the tree could be unbalanced to a linkedlist and the call stack is of n size

function bfs(node, searchVal) {
  if (node === null) return null;
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    let curr = queue.shift(); // plucks the 0th idx element out of the array
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

// console.log(bfs(root, 11));
// console.log(bfs(root, -1));
// console.log(dfs(root, 9));

// O(n) time where n is number of nodes
// O(n) space where n is number of nodes











//    3
//   /  \
//  2   4
// /     \
// 1     66
//      / \
//    55   11
//    / \   \
//   9  10  42

// getMaxTree

// Given a binary tree of all integers, return an array of integers where each
// index of the array represents the 'level' of a tree, and the value in the array
// is the maximum value in that level

function getMaxTree(node) {
  if (node === null) return null;
  let queue = [];
  let result = [];
  queue.push(node);
  while (queue.length > 0) {
    let newQueue = [];
    let max = null;
    for (let n of queue) {
      if (n.val > max || max === null) {
        max = n.val;
      }
      if (n.left !== null) {
        newQueue.push(n.left);
      }
      if (n.right !== null) {
        newQueue.push(n.right);
      }
    }
    result.push(max);
    queue = newQueue;
  }

  return result;
}

// Use bfs levels to traverse the tree and record every level's maximum;

// console.log(getMaxTree(root)); // => [3, 4, 66, 55, 42]
// O(n) time
// O(n) space





//    3              5
//   /  \
//  2   4            4
// /     \
// 1     66          3
//      / \
//    55   11        2
//    / \   \
//   9  10  42       1
//          /\
//       null null   0

//       11          2
//      /   \
//   null   42       1
//          /\
//       null null   0


// getHeight
// Given a binary tree, return the height of the binary tree

function getHeight(root) { // 11
  if (root === null) return 0;
  const left = getHeight(root.left); // => 0
  const right = getHeight(root.right); // => 1
  return Math.max(left, right) + 1; // Math.max(0, 1) + 1 => 2
}

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


// crappy drawing of the graph;
// 0 -> 1 <- 2
// | \    \  ^
// v  v    v |
// 5   4  <- 3


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
    if (!child.visited) {
      const searched = dfSearch(child, target);
      if (searched !== null) {
        return searched;
      }
    }
  }
  return null;
}

// console.log(dfSearch(zero, 2));
// console.log(dfSearch(zero, 1));

// O(n + e) time where n is number of nodes and e is number of edges
// O(n + e) space where n is number of nodes and e is number of edges

// The best way to think about why we have to add "e" into this is that we have traverse into
// visited nodes and check if the node had been visited before. This has to be considered in complexity analysis.


function bfSearch(node, target) {
  if (node === null) return null;
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    let curr = queue.shift(); // pop the value from the 0th idx of the array;
    curr.visited = true;
    if (curr.val === target) return curr;
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


// Given an employee hierarchy tree, and a employee node, find how many subordinates are under this employee node

//               CEO
//     /                \
//   COO                 CTO
//  /   \          /   |     |   \
//Admin1 Admin2   Eng1 Eng2 Eng3 Eng4
//                /\
//            Jnr1  Jnr2

const employeeRoot = new GraphNode('CEO');
const [COO, CTO] = ['COO', "CTO"].map(s => new GraphNode(s));
const [Eng1, Eng2, Eng3, Eng4] = ["Eng1", "Eng2", "Eng3", "Eng4"].map(s => new GraphNode(s));
const [Jnr1, Jnr2] = ['Jnr1', "Jnr2"].map(s => new GraphNode(s));

employeeRoot.children.push(COO, CTO);
CTO.children.push(Eng1, Eng2, Eng3, Eng4);
Eng1.children.push(Jnr1, Jnr2);
COO.children.push(...["Admin1", "Admin2"].map(s => new GraphNode(s)));

const countSubordinates = (tree, target) => {
  if (tree === null) return null;
  const employee = empDfs(tree, target); // O(n) time O(n)
  if (employee === null) return null;
  return _countSubordinates(employee) - 1; // O(n) time O(n) space
}

const empDfs = (node, target) => {
  if (node === null) return null;
  if (node.val === target) return node;
  for (let child of node.children) {
    const searched = empDfs(child, target);
    if (searched !== null) {
      return searched;
    }
  }
  return null;
}

const _countSubordinates = node => {
  if (node === null) return 0;
  let sum = 0;
  for (let child of node.children) {
    sum += _countSubordinates(child);
  }
  return sum + 1;
}

console.log(countSubordinates(employeeRoot, "CTO")); // 6
console.log(countSubordinates(employeeRoot, "Eng1")); // 2
console.log(countSubordinates(employeeRoot, "COO")); // 2