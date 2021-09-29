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

const topologicalSort = (edges) => {
  const nodes = {}; // hash: where key is node val and the values will be an array of the children
  const sorted = [];
  const visited = new Set(); // keeps track of nodes that had already been visited

  //1 build the graph (adjacency list)
  for (let edge of edges) {
    const [from, to] = edge;
    if (!(from in nodes)) nodes[from] = new Node(from);
    if (!(to in nodes)) nodes[to] = new Node(to);
    nodes[from].children.push(to);
  }

  for (let nodeVal in nodes) {
    // perform topological sort
    visit(nodes[nodeVal], visited, nodes, sorted);
  }
  return sorted.reverse();
};

const visit = (node, visited, nodes, sorted) => {
  const { val } = node;
  if (visited.has(val)) return;

  visited.add(val);
  for (let child of node.children) {
    visit(nodes[child], visited, nodes, sorted);
  }
  sorted.push(val);
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
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (traverse(grid, i, j, visited) === true) {
        count++;
      }
    }
  }
  return count;
};

const traverse = (grid, i, j, visited) => {
  if (i >= grid.length || i < 0) return false;
  if (j >= grid[i].length || j < 0) return false;
  if (visited[i][j] === true) return false;
  let cell = grid[i][j];
  visited[i][j] = true;

  if (cell === 1) {
    return (
      traverse(grid, i + 1, j, visited) ||
      traverse(grid, i, j + 1, visited) ||
      traverse(grid, i - 1, j, visited) ||
      traverse(grid, i, j - 1, visited) ||
      true
    );
  }
  return false;
};

// console.log(numberOfIslands(grid1));
// console.log(numberOfIslands(grid2));
// console.log(numberOfIslands(grid3));

// Given a grid, remove all islands in the grid that does not touch the border of the grid
const removeIslands = (grid) => {
  const visited = Array(grid.length)
    .fill()
    .map((_, i) => Array(grid[i].length).fill(false));

  for (let row = 0; row < grid.length; row++) {
    visitBorders(row, 0, grid, visited);
    visitBorders(row, grid[0].length - 1, grid, visited);
  }

  for (let col = 0; col < grid[0].length; col++) {
    visitBorders(0, col, grid, visited);
    visitBorders(grid.length - 1, col, grid, visited);
  }
  // visit all unvisited cells and set it all to 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (visited[i][j] === false && grid[i][j] === 1) {
        grid[i][j] = 0;
      }
    }
  }
  return grid;
};

const visitBorders = (row, col, grid, visited) => {
  if (row < 0 || row > grid.length - 1) return;
  if (col < 0 || col > grid[row].length - 1) return;
  if (visited[row][col] === true) return;
  visited[row][col] = true;
  if (grid[row][col] === 1) {
    visitBorders(row, col + 1, grid, visited);
    visitBorders(row, col - 1, grid, visited);
    visitBorders(row + 1, col, grid, visited);
    visitBorders(row - 1, col, grid, visited);
  }
  return;
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

// Given a 2d grid map of 1s (land) and 0s (water), return the size of the biggest island

// Given a 2d grid map of 1s (land) and 0s (water), return the median size of all the islands

// Design an algorithm and write code to find the first common ancestor of two
// nodes in a graph.

// Note: I got burned by this question from a startup that was going to pay me half of what I was currently
// making at the time

// Steps
// Start an Eulerian Tour (Eulerian Circuit)  at the root node, traverse all edges, and finally return to root node
// Keep track of which nodes you visit and this will be the Euler tour, keep track of the depth as well

// 1. Find the index position value for the nodes node1 and node 2
// 2. Using the depth array, find the index of the minimum value in the range of the indices obtained in step 1
// 3. Using the index obtained in step 2, find the LCA of a and b in the nodes array

/* 
Step 1 required finding the index position for the 2 nodes.
However, an issue we soon run into is that there are 2n - 1 node index positions
in the Euler tour, and only n nodes in total, so a perfect 1 to 1 inverse mapping isn't possible
*/

//    a
//  / | \
// d  b  c
//   / |  | \
//   e f  i  g
//            \
//            h
//             \
//              x

// find lca of h and i; should return c

//             0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8
// eulerTour: [a,d,a,b,e,b,f,b,a,c,i,c,g,h,x,h,g,c,a]
// depth:     [0,1,0,1,2,1,2,1,0,1,2,1,2,3,4,3,2,1,0]

// idx positions of node h is [13, 15] and node i is [10]
// it doesnt matter which index we pick for node h
// range 10 to 15 the depth subarray = [2,1,2,3,4,3]
// the minimum is 1, and that corresponds to c, which is the LCA

// class GraphNode {
//   constructor(val) {
//     this.val = val;
//     this.children = [];
//   }
// }

// function LCA(root, node1, node2) {
//   const eulerTourNodes = [];
//   const depth = [];
//   let node1EulerTourIdx;
//   let node2EulerTourIdx;
//   let tourIndex = 0;
//   const dfs = (_root, nodeDepth) => {
//     if (_root === null) return null;
//     if (_root === node1) {
//       node1EulerTourIdx = tourIndex;
//     }
//     if (_root === node2) {
//       node2EulerTourIdx = tourIndex;
//     }
//     visit(_root, nodeDepth);
//     for (let child of _root.children) {
//       dfs(child, nodeDepth + 1);
//       visit(_root, nodeDepth);
//     }
//   };
//   const visit = (_node, nodeDepth) => {
//     eulerTourNodes[tourIndex] = _node;
//     depth[tourIndex] = nodeDepth;
//     tourIndex++;
//   };
//   dfs(root, 0);

//   // This could have been optimized by using a sparse table to get constant time min
//   let min = null;
//   let minIdx;
//   for (let i = node1EulerTourIdx; i <= node2EulerTourIdx; i += 1) {
//     if (min === null || depth[i] < min) {
//       min = depth[i];
//       minIdx = i;
//     }
//   }
//   console.log(eulerTourNodes.map((e) => e.val));
//   console.log(depth);
//   return eulerTourNodes[minIdx];
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

// console.log(LCA(a, h, i)); // c
// console.log(LCA(a, e, f)); // b
// console.log(LCA(a, a, a)); // a
// console.log(LCA(a, g, h)); // g
