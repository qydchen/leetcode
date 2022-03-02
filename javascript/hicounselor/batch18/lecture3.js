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

// []
// traverse J -> traverse K
// ['ClassJ','ClassK']
// traverse B
// ['ClassB','ClassJ','ClassK']
// traverse A -> traverse C -> traverse D

// ['ClassA',ClassC','ClassD','ClassB','ClassJ','ClassK']

// 1 - 2 - 4
//   \ 3 /

// valid answers
// const output = ["A", "C", "D", "J", "B", "K"];
// [B, A, D, C, J, K]
// [A, D, C, B, J, K]

// Time complexity O(E + V) Where E is # of edges + V is # of nodes
// Space complexity O(V) Where V is # of nodes

// 1. construct an adjacency list or a graph node with the input

// 2. perform topological sort
//    a. pick a random node
//    b. beginning with the selected node, do a DFS exploring only unvisited nodes
//    c. on the recursive callback of the DFS, append the current node to the topological ordering in reverse order

// const adjacencyList = {
//   ClassA: ["ClassC", "ClassD"],
//   ClassB: ["ClassK"],
//   ClassC: ["ClassJ"],
//   ClassJ: ["ClassK"],
//   ClassD: ["ClassJ"],
// };


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


const topologicalSort = (edges) => {
  // 1. Construct adjacency list
  const adjacencyList = {};
  for (let edge of edges) {
    const from = edge[0];
    const to = edge[1];
    if (!(from in adjacencyList)) {
      adjacencyList[from] = [];
    }
    if (!(to in adjacencyList)) {
      adjacencyList[to] = [];
    }
    adjacencyList[from].push(to);
  }

  let sorted = [];
  let visited = new Set();
  // 2. perform topological sort
  for (let from in adjacencyList) { // a. pick a random node
    visit(from, sorted, adjacencyList, visited);
  }

  return sorted;
};

const visit = (key, sorted, adjacencyList, visited) => {
  const children = adjacencyList[key];
  // b. beginning with the selected node, do a DFS exploring only unvisited nodes
  if (visited.has(key)) return;
  visited.add(key);

  for (let child of children) {
    visit(child, sorted, adjacencyList, visited);
  }
  //  c. on the recursive callback of the DFS, append the current node to the topological ordering in reverse order
  sorted.unshift(key);
}

// time complexity O(N + E) where N is # of nodes in graph and E is # of edges
// space complexity O(N) where N is # of nodes

console.log(topologicalSort(input));

// console.log(topologicalSort(input2));
// console.log(
//   topologicalSort([
//     ["a", "b"],
//     ["b", "c"],
//     ["c", "a"],
//   ])
// );

// islands
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

// Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally
// or vertically. You may assume all four edges of the grid are all surrounded by water.

// find a way to store visited cells

// console.log(numberOfIslands(grid1));
// console.log(numberOfIslands(grid2));
// console.log(numberOfIslands(grid3));

// Given a grid, remove all islands in the grid that does not touch the border of the grid

// const input0 = [
//   [1, 0, 0, 0, 0, 0],
//   [0, 1, 0, 1, 1, 1],
//   [0, 0, 1, 0, 1, 0],
//   [1, 1, 0, 0, 1, 0],
//   [1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 1],
// ];
// console.log(removeIslands(input0));










// Given a 2d grid map of 1s (land) and 0s (water), return the size of the biggest island


const grid1 = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
]; // 9

const grid2 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
]; // 4



const biggestIsland = (grid) => {
  const visited = new Array(grid.length).fill().map((_, i) => Array(grid[i].length).fill(false));
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let cell = grid[i][j];
      if (cell === 1 && visited[i][j] === false) {
        const sizeOfCurrentIsland = traverseIsland(i, j, grid, visited);
        max = Math.max(max, sizeOfCurrentIsland);
      }
    }
  }
  return max;
}

const traverseIsland = (i, j, grid, visited) => {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid.length) return 0;
  if (grid[i][j] === 0) return 0;
  if (visited[i][j] === true) return 0;
  visited[i][j] = true;

  let sum = traverseIsland(i + 1, j, grid, visited)
    + traverseIsland(i - 1, j, grid, visited)
    + traverseIsland(i, j + 1, grid, visited)
    + traverseIsland(i, j - 1, grid, visited) + 1;
  return sum;
}

console.log(biggestIsland(grid1)); // 9
console.log(biggestIsland(grid2)); // 4

// Linked Lists (singly + doubly)
// Stacks
// Queues
// Trees
// Graph
// Recursion
// Dynamic programming
// Array + String manipulation

// Bonus:
// Tries
// Heaps
// Topological Sort
// Djikstra's Algorithm
// Sorting Algorithms (merge sort, bubble sort, quick sort)
// Binary search


















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
