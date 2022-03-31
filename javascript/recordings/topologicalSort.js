/*
Given an array of pairs of classes. The first element in the pair represents a prerequisite
class that must be taken in order to take the next class, which is represented by the second
element. Return any ordering of classes you should take to finsh all courses
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

let expectedOutput = ["ClassA"];

function topologicalSort(edges) {
  const adjacencyList = {};
  for (let [from, to] of edges) {
    if (!(from in adjacencyList)) {
      adjacencyList[from] = [];
    }
    if (!(to in adjacencyList)) {
      adjacencyList[to] = [];
    }
    adjacencyList[from].push(to);
  }

  const visited = new Set();
  const sorted = [];
  for (let course in adjacencyList) {
    dfs(course, adjacencyList, sorted, visited);
  }
  return sorted;
}

function dfs(course, adjacencyList, sorted, visited) {
  if (visited.has(course)) return;
  visited.add(course);
  let children = adjacencyList[course];
  for (let child of children) {
    dfs(child, adjacencyList, sorted, visited);
  }
  sorted.unshift(course);
}

console.log(topologicalSort(edges));
