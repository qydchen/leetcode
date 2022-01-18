// Graphs
// undirected graph
// A graph where edges have no direction

//     "a"-"b"

// directed graph
// A graph where edges have direction

//     "a"->"b"

// 2 ways to represent graphs
// class GraphNode {
//   constructor(val) {
//     this.val = val;
//     this.children = [];
//     this.visited = false;
//   }
// }

// const adjacencyList = {
//   a: ["b", "c,", "d"],
//   b: ["e", "f", "g"],
//   g: ["x", "y"],
//   y: ["z"],
// };

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

// crappy drawing of a graph;
// 0 -> 1 <- 2
// | \    \  ^
// v  v    v |
// // 5   4 <- 3

// function dfSearch(node, target) {
//   if (node == null) return null;
//   if (node.visited === true) return null;
//   node.visited = true;
//   if (node.val === target) return node;
//   for (let child of node.children) {
//     let search = dfSearch(child, target);
//     if (search != null) {
//       return search;
//     }
//   }
//   return null;
// }

// // console.log(dfSearch(zero, 2));

// function bfSearch(node, target) { // for graphs
//   if (node === null) return null;
//   let queue = [];
//   queue.push(node);
//   while (queue.length > 0) {
//     let curr = queue.shift();
//     curr.visited = true;
//     if (curr.val === target) return curr;
//     for (let child of curr.children) {
//       if (child.visited === false) {
//         queue.push(child);
//       }
//     }
//   }
//   return null;
// }

// topological sort

class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

// Many real world situations can be modelled as a graph represented as directed edges where
// some event must occur before others

// Suppose you're at a university and you want to take Class K, then you must take class J, and class B.
// In this sense, there is an ordering on the nodes of the graph.

//             Class C
//         /           \
// Class A                 Class J - Class K
//         \           /           /
//             Class D            /
//                               /
// Class B ---------------------

// The only type of graph which has a valid topological ordering is a Directed Acyclic Graph (DAG).
// DAG === Graphs with directed edges and no cycles

const input = [
  ["ClassD", "ClassJ"],
  ["ClassA", "ClassC"],
  ["ClassA", "ClassD"],
  ["ClassB", "ClassK"],
  ["ClassJ", "ClassK"],
  ["ClassC", "ClassJ"],
];

const input2 = [
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
];

// 1 - 2 - 4
//   \ 3 /

// Return a valid topological ordering
// const output = ["B", "A", "C", "D", "J", "K"];
// const output2 = ["A","D","B","C","J","K"];
// const output3 = ["A","D","C","J","B","K"];

//             Class C
//         /           \
// Class A                 Class J - Class K
//         \           /           /
//             Class D            /
//                               /
// Class B ---------------------

const topologicalSort = (edges) => {
  const adjacencyList = {};
  const sorted = [];
  const visited = new Set();

  //1. build the adjacency list
  for (let [from, to] of edges) {
    if (!(from in adjacencyList)) adjacencyList[from] = [];
    if (!(to in adjacencyList)) adjacencyList[to] = [];
    adjacencyList[from].push(to);
  }

  //2. perform topological sort aka:
  // In general:
  // 1. Pick an unvisited node
  // 2. Beginning with the selected node, do a DFS exploring only unvisited nodes.
  // 3. On the recursive callback of the DFS,
  // add the current node to the topological ordering in reverse order
  for (let nodeVal in adjacencyList) {
    visit(nodeVal, adjacencyList, visited, sorted);
  }

  return sorted;
};

const visit = (nodeVal, adjacencyList, visited, sorted) => {
  if (visited.has(nodeVal)) return;
  visited.add(nodeVal);
  for (let child of adjacencyList[nodeVal]) {
    visit(child, adjacencyList, visited, sorted);
  }
  sorted.push(nodeVal);
};

// Time complexity O(N + E) where N is the number of nodes and E is the number of edges
// Space complexity O(E) where # is the number of edges (aka the recursive stack frames)

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
  // construct a grid that represents whether or not cell is visited
  const visited = Array(grid.length)
    .fill()
    .map((_, i) => Array(grid[i].length).fill(false));
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // if this cell is 1 and is an unvisited cell, then traverse recursively
      if (grid[i][j] === 1 && visited[i][j] === false) {
        traverse(i, j, grid, visited);
        count += 1;
      }
    }
  }
  return count;
};

const traverse = (i, j, grid, visited) => {
  // check out of bounds
  if (i < 0 || j < 0) return;
  if (i >= grid.length || j >= grid[i].length) return;
  // check if cell is visited
  if (visited[i][j] === true) return;
  // check if cell is 0
  if (grid[i][j] === 0) return;
  // flag current cell as visited
  visited[i][j] = true;
  traverse(i + 1, j, grid, visited);
  traverse(i - 1, j, grid, visited);
  traverse(i, j + 1, grid, visited);
  traverse(i, j - 1, grid, visited);
};

console.log(numberOfIslands(grid1)); // 1
console.log(numberOfIslands(grid2)); // 3
console.log(numberOfIslands(grid3)); // 7

const largestIsland = (grid) => {
  // construct a grid that represents whether or not cell is visited
  const visited = Array(grid.length)
    .fill()
    .map((_, i) => Array(grid[i].length).fill(false));
  let largest = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // if this cell is 1 and is an unvisited cell, then traverse recursively
      if (grid[i][j] === 1 && visited[i][j] === false) {
        largest = Math.max(largest, trav(i, j, grid, visited));
      }
    }
  }
  return largest;
};

const trav = (i, j, grid, visited) => {
  // check out of bounds
  if (i < 0 || j < 0) return 0;
  if (i >= grid.length || j >= grid[i].length) return 0;
  // check if cell is visited
  if (visited[i][j] === true) return 0;
  // check if cell is 0
  if (grid[i][j] === 0) return 0;
  // flag current cell as visited
  visited[i][j] = true;
  return (
    trav(i + 1, j, grid, visited) +
    trav(i - 1, j, grid, visited) +
    trav(i, j + 1, grid, visited) +
    trav(i, j - 1, grid, visited) +
    1
  );
};

//

// const grid1 = [
//   [1, 1, 1, 1, 0],
//   [1, 1, 0, 1, 0],
//   [1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0],
// ]; // 1

// const grid2 = [
//   [1, 1, 0, 0, 0],
//   [1, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 1],
// ]; // 3

// const grid3 = [
//   [1, 0, 0, 0, 0, 0],
//   [0, 1, 0, 1, 1, 1],
//   [0, 0, 1, 0, 1, 0],
//   [1, 1, 0, 0, 1, 0],
//   [1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 1],
// ]; // 7

// Given a grid, remove all islands in the grid that does not touch the border of the grid
const removeIslands = (grid) => {
  const visited = Array(grid.length)
    .fill()
    .map((_, i) => Array(grid[i].length).fill(false));
  // scan top border
  for (let i = 0; i < grid[0].length; i++) {
    visitBorder(0, i, grid, visited);
  }
  // scan bottom border
  for (let i = 0; i < grid[grid.length - 1].length; i++) {
    visitBorder(grid.length - 1, i, grid, visited);
  }

  // scan left border
  for (let i = 0; i < grid.length; i++) {
    visitBorder(i, 0, grid, visited);
  }

  // scan right border
  for (let i = 0; i < grid.length; i++) {
    visitBorder(i, grid[i].length - 1, grid, visited);
  }

  // scan top down left right and remove all unvisited 1s
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1 && visited[i][j] === false) {
        grid[i][j] = 0;
      }
    }
  }

  return grid;
};

const visitBorder = (i, j, grid, visited) => {
  if (i < 0 || j < 0) return;
  if (i >= grid.length || j >= grid[i].length) return;
  if (visited[i][j] === true) return;
  if (grid[i][j] === 0) return;
  visited[i][j] = true;
  visitBorder(i + 1, j, grid, visited);
  visitBorder(i - 1, j, grid, visited);
  visitBorder(i, j + 1, grid, visited);
  visitBorder(i, j - 1, grid, visited);
};

const input0 = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];

console.log(removeIslands(input0));
// 1. flag all islands on border to true
// 2. scan left right top down set all unvisited 1 s to 0

//

//

//

//

//

//

//

//

//

//

//

//

//

//

// Given a 2d grid map of 1s (land) and 0s (water), return the size of the biggest island

// Given a 2d grid map of 1s (land) and 0s (water), return the median size of all the islands
