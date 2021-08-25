// Trees

// define node & edge

// n nodes, n - 1 edges

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
//   /  \
//  2   4
// /     \
// 1     66
//      / \
//     55  11
//    / \   \
//   9  10  42

function inOrderTraversal(node) {
  if (node) {
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
  }
}

// inOrderTraversal(root); // expect to print 1 2 3 4

// pre order
function preOrderTraversal(node) {
  if (node) {
    console.log(node.val);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}

// preOrderTraversal(root); // 3 2 1 4

// post order
function postOrderTraversal(node) {
  if (node) {
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
  if (node == null) return null;
  if (node.val === searchVal) return node;
  const left = dfs(node.left, searchVal);
  const right = dfs(node.right, searchVal);
  if (left != null) {
    return left;
  }
  if (right != null) {
    return right;
  }
  return null;
}

// console.log(dfs(root, 66).val);
// console.log(dfs(root, 10).val);

function bfs(node, searchVal) {
  if (node == null) return null;

  let queue = []; // []
  queue.push(node);

  while (queue.length !== 0) {
    let curr = queue.shift(); // dequeues an element in the queue and assign that element into curr
    // console.log("dequeued:", curr.val);
    // console.log(
    //   "my current queue:",
    //   queue.map(({ val }) => val)
    // );
    if (curr.val === searchVal) {
      return curr;
    }
    if (curr.left != null) {
      queue.push(curr.left);
    }
    if (curr.right != null) {
      queue.push(curr.right);
    }
    // console.log(
    //   "my new queue:",
    //   queue.map(({ val }) => val)
    // );
    // console.log("------");
  }

  return null;
}

// console.log(bfs(root, 42));

// getMaxTree

// Given a binary tree of all integers, return an array of integers where each index of the array represents the 'level' of a tree, and the value in the array
// is the maximum value in that level

function getMaxTree(node) {
  let queue = [node];
  const maxes = [];
  while (queue.length !== 0) {
    const max = Math.max(...queue.map((n) => n.val));
    maxes.push(max);
    const newQueue = [];
    for (let n of queue) {
      if (n.left != null) {
        newQueue.push(n.left);
      }
      if (n.right != null) {
        newQueue.push(n.right);
      }
    }
    queue = newQueue;
  }
  return maxes;
}

// console.log(getMaxTree(root)); // [3,4,66,55,42]
// Time O(n) where n is the numbers of nodes in the tree
// Space O(h) where h is the height of the tree

// bottom up solution

//2     3        4
//    /  \
//1   2   4      3
//   /     \
//0  1     66    2
//      / \
//     55  11  1
//    / \   \
//   9  10  42 0

// getHeight
// Given a binary tree, return the height of the binary tree

function getHeight(root) {
  if (root == null) return null;
  if (root.left == null && root.right == null) return 1;
  const right = getHeight(root.right);
  const left = getHeight(root.left);
  const highest = Math.max(right, left);
  return highest + 1;
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
  node.visited = true;
  if (node.val === target) {
    return node;
  }
  for (let child of node.children) {
    if (child.visited === false) {
      if (child.val === target) {
        return child;
      }
      dfSearch(child, target);
    }
  }
  //   return null;
}

// console.log(dfSearch(zero, 2));

function bfSearch(node, target) {
  const queue = [];
  node.visited = true;
  queue.push(node);
  while (queue.length !== 0) {
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
}

// Time Complexity O(n + m) where n is the number of nodes and m is the number of edges
// Space Complexity O(n + m) where n is the number of nodes and m is the number of edges

console.log(bfSearch(zero, 2));
