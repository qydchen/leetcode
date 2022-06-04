/*
Given an array of pairs of classes. The first element in the pair represents a prerequisite
class that must be taken in order to take the next class, which is represented by the second
element. Return any ordering of classes you should take to finish all courses
*/

//           Class C
//         /           \
// Class A                 Class J - Class K
//         \           /           /
//             Class D            /
//                               /
// Class B ---------------------

let edges = [
  ["ClassA", "ClassC"],
  ["ClassA", "ClassD"],
  ["ClassJ", "ClassK"],
  ["ClassB", "ClassK"],
  ["ClassC", "ClassJ"],
  ["ClassD", "ClassJ"],
];

function generateClasses(edges) {
  // build the adjacency list
  const adjacencyList = {};

  for (let edge of edges) {
    const from = edge[0];
    const to = edge[1];
    if (!(from in adjacencyList)) adjacencyList[from] = [];
    if (!(to in adjacencyList)) adjacencyList[to] = [];
    adjacencyList[from].push(to);
  }

  // perform topological sort
  const sorted = [];
  const visited = new Set();
  for (let node in adjacencyList) {
    visit(node, sorted, adjacencyList, visited);
  }

  return sorted;
}

function visit(node, sorted, adjacencyList, visited) {
  const children = adjacencyList[node];
  if (visited.has(node)) return;
  visited.add(node);
  for (let child of children) {
    visit(child, sorted, adjacencyList, visited);
  }
  sorted.unshift(node);
}

console.log(generateClasses(edges));

// Topological Sort - algorithm that sorts orderings of prerequisites

// Direct Acyclic Graph - graphs with directed edges and no cycles

// 1. Convert edges to an adjacency list
// 2. Perform topological on the adjacency list
//    a. Pick an unvisited node
//    b. Beginning with the selected node, do a DFS exploring only unvisited nodes.
//    c. On the recursive callback of the DFS, add the current node to the topological ordering
//     in reverse order

