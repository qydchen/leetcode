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

// 1. Pick an unvisited node
// 2. Beginning with the selected node, do a DFS exploring only unvisited nodes.
// 3. On the recursive callback of the DFS, add the current node to the
// topological ordering in reverse order.

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

const topologicalSort = (edges) => {
  const adjacencyList = {};
  const visitedNodes = [];
  const sorted = [];
  // 1. constructs adjacency list
  for (let edge of edges) {
    const [from, to] = edge;
    if (!(from in adjacencyList)) {
      adjacencyList[from] = [];
    }
    if (!(to in adjacencyList)) {
      adjacencyList[to] = [];
    }
    adjacencyList[from].push(to);
  }

  for (let node in adjacencyList) {
    // 2. topological sort
    visit(node);
  }

  return sorted;
  function visit(n) {
    if (visitedNodes.includes(n)) return;
    visitedNodes.push(n);
    for (let child of adjacencyList[n]) {
      visit(child);
    }
    console.log(sorted);
    sorted.unshift(n);
  }
};

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

// // Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
// // An island is surrounded by water and is formed by connecting adjacent lands horizontally
// // or vertically. You may assume all four edges of the grid are all surrounded by water.

// // const numberOfIslands = (grid) => {
// //   const visited = new Array(grid.length)
// //     .fill()
// //     .map((_, i) => Array(grid[i].length).fill(false));
// //   let countNumOfIslands = 0;
// //   for (let i = 0; i < grid.length; i++) {
// //     const row = grid[i];
// //     for (let j = 0; j < row.length; j++) {
// //       let cell = row[j];
// //       if (cell === 1 && !visited[i][j]) {
// //         visit(i, j, grid, visited);
// //         countNumOfIslands++;
// //       }
// //     }
// //   }
// //   return countNumOfIslands;
// // };

// // function visit(i, j, grid, visited) {
// //   if (i < 0 || i >= grid.length) return;
// //   if (j < 0 || j >= grid[i].length) return;
// //   if (visited[i][j] === true) return;
// //   const cell = grid[i][j];
// //   if (cell === 0) return;
// //   visited[i][j] = true;
// //   visit(i, j - 1, grid, visited);
// //   visit(i, j + 1, grid, visited);
// //   visit(i - 1, j, grid, visited);
// //   visit(i + 1, j, grid, visited);
// // }

// // console.log(numberOfIslands(grid1));
// // console.log(numberOfIslands(grid2)); // 3
// // console.log(numberOfIslands(grid3)); // 7

// //

// //

// //

// //

// //

// //

// // Given a grid, remove all islands in the grid that does not touch the border of the grid
// const removeIslands = (grid) => {
//   const visited = new Array(grid.length)
//     .fill()
//     .map((_, i) => new Array(grid[i].length).fill(false));
//   let topRow = grid[0];
//   let bottomRow = grid[grid[0].length - 1];
//   for (let i = 0; i < grid[0].length; i++) {
//     let topCell = topRow[0][i];
//     if (topCell === 1 && !visited[0][i]) {
//       visit(0, i, grid, visited);
//     }
//     let bottomCell = bottomRow[grid[0].length - 1][i];
//     if (bottomCell === 1 && !visited[visited.length - 1][i]) {
//       visit(grid.length - 1, i, grid, visited);
//     }
//   }

//   for (let i = 0; i < grid.length; i++) {
//     let leftCell = grid[i][0];
//     if (leftCell === 1 && !visited[i][0]) {
//       visit(i, 0, grid, visited);
//     }
//     let rightCell = grid[i][grid[i].length - 1];
//     if (rightCell === 1 && !visited[i][grid[i].length - 1]) {
//       visit(i, grid[i].length - 1, grid, visited);
//     }
//   }

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (visited[i][j] === false) {
//         grid[i][j] = 0;
//       }
//     }
//   }
//   return grid;
// };

// const visit = (i, j, grid, visited) => {
//   if (i < 0 || i >= grid.length) return;
//   if (j < 0 || j >= grid[i].length) return;
//   if (visited[i][j] === true) return;
//   visited[i][j] = true;
//   if (grid[i][j] === 1) {
//     visit(i - 1, j, grid, visited);
//     visit(i + 1, j, grid, visited);
//     visit(i, j + 1, grid, visited);
//     visit(i, j - 1, grid, visited);
//   }
// };

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

// //
// //

// //

// //

// //
// //

// //
// //

// //

// // Design an algorithm and write code to find the first common ancestor of two
// // nodes in a graph.

// class GraphNode {
//   constructor(val) {
//     this.val = val;
//     this.children = [];
//   }
// }

// const a = new GraphNode("a");
// const b = new GraphNode("b");
// const c = new GraphNode("c");
// const d = new GraphNode("d");
// const e = new GraphNode("e");
// const f = new GraphNode("f");
// const g = new GraphNode("g");
// const h = new GraphNode("h");
// const i = new GraphNode("i");
// const x = new GraphNode("x");

// a.children = [b, c, d];
// b.children = [e, f];
// c.children = [g, i];
// g.children = [h];
// h.children = [x];

// // console.log(LCA(a, h, i)); // c
// // console.log(LCA(a, e, f)); // b
// // console.log(LCA(a, a, a)); // a
// // console.log(LCA(a, g, h)); // g
