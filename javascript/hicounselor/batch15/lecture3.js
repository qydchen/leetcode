// topological sort

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

// First, we have to organize the input of ArrayList<ArrayList<int>> into an adjacency list

// Topological Sort
// 1. Pick an unvisited
// 2. Beginning with the selected node, do a DFS exploring only unvisited nodes.
// 3. On the recursive callback of the DFS, add the current node to the topological ordering in reverse order

const input2 = [
  ["1", "2"],
  ["1", "3"],
  ["2", "4"],
  ["3", "4"],
];

// 1 - 2 - 4
//   \ 3 /

const input = [
  ["ClassD", "ClassJ"],
  ["ClassA", "ClassC"],
  ["ClassA", "ClassD"],
  ["ClassB", "ClassK"],
  ["ClassJ", "ClassK"],
  ["ClassC", "ClassJ"],
];

const topologicalSort = (edges) => {
  const sorted = [];
  const adjacencyList = {};
  // 1st part
  for (let edge of edges) {
    let from = edge[0];
    let to = edge[1];
    if (!(from in adjacencyList)) adjacencyList[from] = [];
    if (!(to in adjacencyList)) adjacencyList[to] = [];
    adjacencyList[from].push(to);
  }

  // 2nd part
  const visitedSet = new Set();
  for (let key in adjacencyList) {
    visit(key, sorted, adjacencyList, visitedSet);
  }

  return sorted;
};

const visit = (key, sorted, adjacencyList, visitedSet) => {
  const children = adjacencyList[key];
  // Handle logic for visitation
  if (visitedSet.has(key)) return;
  visitedSet.add(key);

  // Recursively call on each children
  for (let child of children) {
    visit(child, sorted, adjacencyList, visitedSet);
  }

  // Append key into sorted
  sorted.unshift(key);
};

// console.log(topologicalSort(input));
// console.log(topologicalSort(input2));
// console.log(
//   topologicalSort([
//     ["a", "b"],
//     ["b", "c"],
//     ["c", "a"],
//   ])
// );

// Time complexity O(N + V) where N is number of nodes and V is number of edges
// Space Complexity O(N) where N is number of nodes

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
  const visited = Array(grid.length)
    .fill()
    .map((_, i) => Array(grid[i].length).fill(false));
  let c = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (visited[i][j] === false && grid[i][j] === 1) {
        visitIslands(grid, i, j, visited);
        c++;
      }
    }
  }
  return c;
};

const visitIslands = (grid, i, j, visited) => {
  if (i < 0 || j < 0) return;
  if (i >= grid.length || j >= grid[i].length) return;
  if (visited[i][j] === true) return;
  visited[i][j] = true;
  if (grid[i][j] === 0) return;
  visitIslands(grid, i + 1, j, visited);
  visitIslands(grid, i - 1, j, visited);
  visitIslands(grid, i, j + 1, visited);
  visitIslands(grid, i, j - 1, visited);
};

console.log(numberOfIslands(grid1));
console.log(numberOfIslands(grid2));
console.log(numberOfIslands(grid3));

//

//

// Given a grid, remove all islands in the grid that does not touch the border of the grid
const removeIslands = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] === 1) startDeletion(grid, i, 0);
    if (grid[i][grid[i].length - 1] === 1)
      startDeletion(grid, i, grid[i].length - 1);
  }

  for (let j = 0; j < grid[0].length; j++) {
    if (grid[0][j] === 1) startDeletion(grid, 0, j);
  }

  for (let k = 0; k < grid[grid.length - 1].length; k++) {
    if (grid[grid.length - 1][k].length === 1)
      startDeletion(grid, grid.length - 1, k);
  }

  return grid;
};

const startDeletion = (grid, i, j) => {
  if (i < 0 || j < 0) return;
  if (i >= grid.length || j >= grid[i].length) return;
  if (grid[i][j] === 1) {
    grid[i][j] = 0;
    startDeletion(grid, i + 1, j);
    startDeletion(grid, i - 1, j);
    startDeletion(grid, i, j + 1);
    startDeletion(grid, i, j - 1);
  }
};

const input0 = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];

const output = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

console.log(removeIslands(input0));

// Given a 2d grid map of 1s (land) and 0s (water), return the size of the biggest island

// Given a 2d grid map of 1s (land) and 0s (water), return the median size of all the islands

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

// console.log(LCA(a, h, i)); // c
// console.log(LCA(a, e, f)); // b
// console.log(LCA(a, a, a)); // a
// console.log(LCA(a, g, h)); // g

const graph = [
  ["S", 1, 1],
  [0, 1, 1],
  [1, 1, 0],
  [1, 1, "T"],
];

const traverse = (graph) => {
  let endPos;
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (graph[i][j] === "T") {
        endPos = [i, j];
      }
    }
  }
  return findShortestPath(graph, [0, 0], endPos) - 1;
};

const findShortestPath = (graph, start, end) => {
  let [i, j] = start;
  if (i < 0 || i >= graph.length) return;
  if (j < 0 || j >= graph[i].length) return;
  if (graph[i][j] === 0) return;
  if (i === end[0] && j === end[1]) return 1;
  const right = findShortestPath(graph, [i, j + 1], end) || Infinity;
  const bottom = findShortestPath(graph, [i + 1, j], end) || Infinity;
  return Math.min(right, bottom) + 1;
};

console.log(traverse(graph));