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

const output = ["A", "C", "D", "J", "B", "K"];

// Time complexity O(E + V) Where E is # of edges + V is # of nodes
// Space complexity O(V) Where V is # of nodes

const topologicalSort = (edges) => {};

// console.log(topologicalSort(input));
// console.log(topologicalSort(input2));
// console.log(
//   topologicalSort([
//     ["a", "b"],
//     ["b", "c"],
//     ["c", "a"],
//   ])
// );

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

const numberOfIslands = (grid) => {};

// console.log(numberOfIslands(grid1));
// console.log(numberOfIslands(grid2));
// console.log(numberOfIslands(grid3));

// Given a grid, remove all islands in the grid that does not touch the border of the grid
const removeIslands = (grid) => {};

const input0 = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];

console.log(removeIslands(input0));

// Given a 2d grid map of 1s (land) and 0s (water), return the size of the biggest island

// Given a 2d grid map of 1s (land) and 0s (water), return the median size of all the islands

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
