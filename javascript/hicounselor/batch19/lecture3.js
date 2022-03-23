// topological sort

// Many real world situations can be modelled as a graph when directed edges where some
// events must occur before others.

// Suppose you're a student at university X and you want to take Class H, then you
// must take classes A, B, D and E as prerequsities. In this sense there is an ordering
// on the nodes of the graph.

class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

//             Class C
//         /           \
// Class A                 Class J - Class K
//         \           /           /
//             Class D            /
//                               /
// Class B ---------------------

const input = [
  ["ClassD", "ClassJ"],
  ["ClassA", "ClassC"],
  ["ClassA", "ClassD"],
  ["ClassB", "ClassK"],
  ["ClassJ", "ClassK"],
  ["ClassC", "ClassJ"],
];

const input2 = [
  ["1", "2"],
  ["1", "3"],
  ["2", "4"],
  ["3", "4"],
];

// 1 - 2 - 4
//   \ 3 /

const output = ["ClassA", "ClassC", "ClassD", "ClassJ", "ClassB", "ClassK"];
// const output = ["ClassA", "ClassC", "ClassB", "ClassD", "ClassJ", "ClassK"];

// 1. Construct an adjacency list given the array of edges
// const adjacencyList = {
//   "ClassA": ["ClassC", "ClassD"],
//   "ClassD": ["ClassJ"],
//   "ClassC": ["ClassJ"],
//   "ClassB": ["ClassK"],
//   "ClassJ": ["ClassK"],
//   "ClassK": [],
// }

// 2. Perform topological sort
//    a. pick a random node
//    b. beginning with that selected node, do a DFS exploring only unvisited nodes
//    c. on the recursive callback of the DFS, append the current node to
//       the topological ordering (aka. let topologicalOrdering = []) in reverse order

// Time complexity O(E + V) Where E is # of edges + V is # of nodes
// Space complexity O(E + V) Where E is # of edges + V is # of nodes (biggest space is due to adjacencyList)

const topologicalSort = (edges) => {
  // construct adjacency list
  const adjacencyList = {}; // E + V space
  for (let edge of edges) {
    let from = edge[0];
    let to = edge[1];
    if (!(from in adjacencyList)) {
      adjacencyList[from] = [];
    }
    if (!(to in adjacencyList)) {
      adjacencyList[to] = [];
    }
    adjacencyList[from].push(to);
  }

  const visited = new Set(); // V space
  const topologicalOrdering = []; // V space
  for (let from in adjacencyList) {
    // a. pick a random node
    topoSort(from, adjacencyList, visited, topologicalOrdering);
  }
  return topologicalOrdering;
};

const topoSort = (key, adjacencyList, visited, topologicalOrdering) => {
  if (visited.has(key)) {
    return;
  }
  visited.add(key);
  let children = adjacencyList[key];
  // b. beginning with that selected node, do a DFS exploring only unvisited nodes
  for (let child of children) {
    topoSort(child, adjacencyList, visited, topologicalOrdering);
  }
  //    c. on the recursive callback of the DFS, append the current node to
  //       the topological ordering (aka. let topologicalOrdering = []) in reverse order
  topologicalOrdering.unshift(key);
};

// console.log(topologicalSort(input));
// console.log(topologicalSort(input2));

// islands
const grid1 = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
]; // 1

const grid2 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
]; // 3

const grid3 = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
]; // 7

// Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally
// or vertically. You may assume all four edges of the grid are all surrounded by water.

const numberOfIslands = (grid) => {
  let visited = Array(grid.length)
    .fill()
    .map((_, i) => Array(grid[i].length).fill(false));
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let cell = grid[i][j];
      if (cell === 1 && visited[i][j] === false) {
        visit(i, j, grid, visited);
        count++;
      }
    }
  }
  return count;
};

const visit = (i, j, grid, visited) => {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) return; // checks out of bounds edge case
  if (grid[i][j] === 0) return;
  if (visited[i][j] === true) return;

  visited[i][j] = true;
  visit(i + 1, j, grid, visited);
  visit(i - 1, j, grid, visited);
  visit(i, j + 1, grid, visited);
  visit(i, j - 1, grid, visited);
  return;
};

// console.log(numberOfIslands(grid1));
// console.log(numberOfIslands(grid2));
// console.log(numberOfIslands(grid3));

// Given a 2d grid map of 1s (land) and 0s (water), return the size of the biggest island

const biggestIsland = (grid) => {
  let visited = Array(grid.length)
    .fill()
    .map((_, i) => Array(grid[i].length).fill(false));
  let biggest = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let cell = grid[i][j];
      if (cell === 1 && visited[i][j] === false) {
        let sizeOfIsland = visitBiggestIsland(i, j, grid, visited);
        biggest = Math.max(biggest, sizeOfIsland);
      }
    }
  }
  return biggest;
};

const visitBiggestIsland = (i, j, grid, visited) => {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) return 0;
  if (grid[i][j] === 0) return 0;
  if (visited[i][j] === true) return 0;
  visited[i][j] = true;

  return (
    visitBiggestIsland(i + 1, j, grid, visited) +
    visitBiggestIsland(i - 1, j, grid, visited) +
    visitBiggestIsland(i, j + 1, grid, visited) +
    visitBiggestIsland(i, j - 1, grid, visited) +
    1
  );
};

console.log(biggestIsland(grid1));
console.log(biggestIsland(grid2));
console.log(biggestIsland(grid3));

// Given a 2d grid map of 1s (land) and 0s (water), return the median size of all the islands

//

// Design an algorithm and write code to find the first common ancestor of two
// nodes in a graph.

class GraphNode {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

const a = new GraphNode("a");
const b = new GraphNode("b");
const c = new GraphNode("c");
const d = new GraphNode("d");
const e = new GraphNode("e");
const f = new GraphNode("f");
const g = new GraphNode("g");
const h = new GraphNode("h");
const i = new GraphNode("i");
const x = new GraphNode("x");

a.children = [b, c, d];
b.children = [e, f];
c.children = [g, i];
g.children = [h];
h.children = [x];

//    a
//  / | \
// d  b  c
//   / |  | \
//   e f  i  g
//            \
//            h
//             \
//              x

const LCA = (root, node1, node2) => {
  if (root === null) return null;
  if (root === node1 || root === node2) return root;
  let found = [];
  for (let child of root.children) {
    let searchedVal = LCA(child, node1, node2);
    if (searchedVal !== null) {
      found.push(searchedVal);
    }
  }

  if (found.length === 1) {
    return found[0];
  }

  if (found.length === 0) {
    return null;
  }

  if (found.length === 2) {
    return root;
  }
};

// null

// a
//  \
//   b
// LCA(a, a, b) // a

console.log(LCA(a, h, i)); // c
console.log(LCA(a, e, f)); // b
console.log(LCA(a, a, a)); // a
console.log(LCA(a, g, h)); // g

// alternative answer: leetcode/javascript/ch4-trees-and-graphs/LCAofGraph.js
