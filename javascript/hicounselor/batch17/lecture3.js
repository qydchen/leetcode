// topological sort

class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

// DAG (Directed Acyclic Graph) - unidirectional graph with no cycles

//             Class C
//         /           \
// Class A                 Class J - Class K
//         \           /           /
//             Class D            /
//                               /
// Class B ---------------------

// [From, To]
const input = [
  ["ClassC", "ClassJ"],
  ["ClassD", "ClassJ"],
  ["ClassA", "ClassD"],
  ["ClassJ", "ClassK"],
  ["ClassA", "ClassC"],
  ["ClassB", "ClassK"],
];

const adjacencyList = {
  a: ["b", "c,", "d", "g"],
  b: ["e", "f", "g"],
  g: ["x", "y"],
  y: ["z", "a", "b"],
};

// All valid output
// output: [A,C,D,J,B,K]
// [B,A,D,C,J,K]
// [A,C,B,D,J,K]

// In general:
// 1. Pick an unvisited node
// 2. Beginning with the selected node, do a DFS exploring only unvisited nodes.
// 3. On the recursive callback of the DFS,
// add the current node to the topological ordering in reverse order

const topologicalSort = (edges) => {
  const sorted = [];
  // Step 1: construct adjacency list
  const adjacencyList = {};
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

  // Step 2: construct the topological ordering
  const visited = new Set();
  for (let key in adjacencyList) {
    visit(key, sorted, adjacencyList, visited);
  }

  return sorted;
}

const visit = (key, sorted, adjacencyList, visited) => {
  const children = adjacencyList[key];
  if (visited.has(key)) return;
  visited.add(key);

  for (let child of children) {
    visit(child, sorted, adjacencyList, visited);
  }

  sorted.unshift(key);
}


// console.log(topologicalSort(input));


// const input2 = [
//   [1, 2],
//   [1, 3],
//   [2, 4],
//   [3, 4],
// ];

// 1 - 2 - 4
//   \ 3 /

// const output = ["A", "C", "D", "J", "B", "K"];

// Time complexity O(E + V) Where E is # of edges + V is # of nodes
// Space complexity O(V) Where V is # of nodes

console.log(topologicalSort(input));
console.log(
  topologicalSort([
    ["a", "b"],
    ["b", "c"],
    ["c", "a"],
  ])
);

















// const grid3 = [
//   [1, 0, 0, 0, 0, 0],
//   [0, 1, 0, 1, 1, 1],
//   [0, 0, 1, 0, 1, 0],
//   [1, 1, 0, 0, 1, 0],
//   [1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 1],
// ]; // 7

// // islands
// const grid1 = [
//   [1, 1, 1, 1, 0],
//   [1, 1, 0, 1, 0],
//   [1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0],
// ]; // 1

// // Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
// // An island is surrounded by water and is formed by connecting adjacent lands horizontally
// // or vertically. You may assume all four edges of the grid are all surrounded by water.

// // go through each element,
// // for each element, look at the adjacent sides,
// // continuously look adjacently
// const numberOfIslands = (grid) => {
//   // construct visited grid
//   const visited = Array(grid.length).fill().map((_, i) => Array(grid[i].length).fill(false)); // O(l * w)
//   let count = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       const cell = grid[i][j]; // i = 2, j = 2 // cell = 1
//       if (cell === 1 && !visited[i][j]) { //
//         visit(i, j, grid, visited); // space O(l*w)
//         count++;
//       }
//     }
//   }
//   return count;
// };

// const visit = (i, j, grid, visited) => {
//   // i = 1, j = 0, grid[i][j] = 1, visited[i][j] = false
//   if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[i].length - 1) return;
//   if (visited[i][j]) return;
//   if (grid[i][j] === 0) return;
//   visited[i][j] = true;
//   visit(i + 1, j, grid, visited);
//   visit(i - 1, j, grid, visited);
//   visit(i, j + 1, grid, visited);
//   visit(i, j - 1, grid, visited);
// }

// // Time complexity O(N) where N is the number of elements in the grid or Time complexity O(l*w) where l is length of grid and w is width of grid

// // Space complexity O(l * w) or Space complexity O(N)


// const grid2 = [
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
// ]; // 3

//   // [T, T, F, F, F],
//   // [T, T, F, F, F],
//   // [F, F, T, F, F],
//   // [F, F, F, F, F],



// console.log(numberOfIslands(grid1));
// console.log(numberOfIslands(grid2));
// console.log(numberOfIslands(grid3));

// // Given a grid, remove all islands in the grid that does not touch the border of the grid
// const removeIslands = (grid) => {};

// const input0 = [
//   [1, 0, 0, 0, 0, 0],
//   [0, 1, 0, 1, 1, 1],
//   [0, 0, 1, 0, 1, 0],
//   [1, 1, 0, 0, 1, 0],
//   [1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 1],
// ];

// console.log(removeIslands(input0));

// // Given a 2d grid map of 1s (land) and 0s (water), return the size of the biggest island

// // Given a 2d grid map of 1s (land) and 0s (water), return the median size of all the islands
















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

//     a
//   / | \
//  b  c  d
// /\  /\
//e f  g i
//     |
//     h
//     |
//     x

// Design an algorithm and write code to find the first common ancestor of two
// nodes in a graph.

const LCA = (root, node1, node2) => {
  if (root === null) return null;
  if (root === node1 || root === node2) return root; // if i found a node corresponding to either one of my searches, return that node
  let found = [];
  for (let child of root.children) {
    let searched = LCA(child, node1, node2);
    if (searched) {
      found.push(searched);
    }
  }
  if (found.length === 2) {
    return root;
  }
  if (found.length === 0) {
    return null;
  }
  if (found.length === 1) {
    return found[0];
  }
};

console.log(LCA(a, h, i).val); // c
console.log(LCA(a, e, f).val); // b
console.log(LCA(a, a, a).val); // a
console.log(LCA(a, g, h).val); // g
