// Trees

// A data structure in which nodes are related to each other an edge
// A data structure that organizes data through nodes with edges pointing to nodes

// define node & edge

// Binary tree - a tree data structure that has only two children: a left and right

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

function inOrderTraversal(node) {
  if (node != null) {
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
  }
}

// inOrderTraversal(root); // expect to print 1 2 3 4 9 55 10 66 11 42

//    3
//   /  \
//  2   4
// /
// 1

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
//   /  \
//  2   4
// /     \
// 1     66
//      / \
//     55  11
//    / \   \
//   9  10  42

// dfs, bfs
function dfs(node, searchVal) {
  if (node === null) {
    return null;
  }
  if (node.val === searchVal) {
    return node;
  }
  const left = dfs(node.left, searchVal);
  const right = dfs(node.right, searchVal);
  return left || right;
}

// console.log(dfs(root, 55)?.val);
// console.log(dfs(root, 3)?.val);
// console.log(dfs(root, 77)?.val);

// O(N) time where we have to scan all the nodes to find our search value
// O(N) space where the tree could be reduced to a linkedlist and the call stack is the height of the tree

function bfs(node, searchVal) {
  if (node === null) return null;
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

// console.log(bfs(root, 4)?.val);
// console.log(bfs(root, 10)?.val);
// console.log(bfs(root, 99)?.val);

// O(N) time where we have to scan all the nodes to find our search value
// O(N) space where the queue would be the number of nodes

//    3
//   /  \
//  2   4
// /     \
// 1     66
//      / \
//     55  11
//    / \   \
//   9  10  42

// getMaxTree

// Given a binary tree of all integers, return an array of integers where each index of the array represents the 'level' of a tree
// , and the value in the array is the maximum value in that level

function getMaxTree(node) {
  if (node === null) return [];
  let result = [];
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    let newQueue = [];
    let max = Math.max(...queue.map((n) => n.val));
    result.push(max);
    for (let node of queue) {
      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }
    }
    queue = newQueue;
  }
  return result;
}

// console.log(getMaxTree(root)); // [3,4,66,55,42]
// Time O(n) where n is the numbers of nodes in the tree
// Space O(w) where w is the widest part of the tree

// bottom up solution

// getHeight
// Given a binary tree, return the height of the binary tree

//    3          5
//   /  \
//  2   4        4
// /     \
// 1     66      3
//      / \
//     55  11    2
//    / \   \
//   9  10  42   1

//               0
function getHeight(root, initialHeight = 0) {
  if (root === null) {
    return initialHeight;
  }
  return Math.max(
    getHeight(root.left, initialHeight + 1),
    getHeight(root.right, initialHeight + 1)
  );
}

// console.log(getHeight(root)); // 5

function getHeightV2(root) {
  if (root === null) {
    return 0;
  }
  return Math.max(getHeightV2(root.left), getHeightV2(root.right)) + 1;
}

// console.log(getHeightV2(root)); // 5

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
  if (node === null) return null;
  if (node.visited === true) return null;
  if (node.val === target) return node;
  node.visited = true;
  for (let child of node.children) {
    let searched = dfSearch(child, target);
    if (searched != null) {
      return searched;
    }
  }
  return null;
}

// dfSearch(zero, 5);

function bfSearch(node, target) {
  if (node === null) return null;
  let queue = [];
  queue.push(node);
  node.visited = true;
  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr.val === target) {
      return curr;
    }
    for (let child of curr.children) {
      if (child.visited === false) {
        child.visited = true;
        queue.push(child);
      }
    }
  }
  return null;
}

console.log(bfSearch(zero, 2));

// Time Complexity O(n + m) where n is the number of nodes and m is the number of edges
// Space Complexity O(n + m) where n is the number of nodes and m is the number of edges
