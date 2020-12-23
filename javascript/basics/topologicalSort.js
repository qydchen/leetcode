/*
    Time complexity = O(|E| + |V|) where E is a number of edges and |V| is the number of nodes
    Space complexity = O(V)

    Many real world situations can be modelled as a graph when directed edges where some
    events must occur before others.

    Suppose you're a student at university X and you want to take Class H, then you
    must take classes A, B, D and E as prerequsities. In this sense there is an ordering
    on the nodes of the graph.

                Class C
            /           \
    Class A                 Class J - Class K
            \           /           /
                Class D            /
                                  /
    Class B ---------------------

    The only type of graph which has a valid topological ordering is a Directed Acyclic Graph
    (DAG). These are graphs with directed edges and no cycles.

    By definition, all rooted trees have a topological ordering since they do not
    contain any cycles.

    For general DAGs:
        1. Pick an unvisited node
        2. Beginning with the selected node, do a DFS exploring only unvisited nodes.
        3. On the recursive callback of the DFS, add the current node to the topoligcal
        ordering in reverse order.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

const topologicalSort = (edges) => {
  // an adjacency list
  const nodes = {}; // hash: stringified id of the node => { id: id, afters: list of ids }
  const sorted = []; // sorted list of IDs ( returned value )
  const visited = new Set(); // hash: id of already visited node => true

  // 1. build the graph
  for (let edge of edges) {
    const [from, to] = edge;
    if (!nodes[from]) nodes[from] = new Node(from);
    if (!nodes[to]) nodes[to] = new Node(to);
    nodes[from].children.push(to);
  }

  for (let nodeVal in nodes) {
    // 2. topological sort
    visit(nodeVal, []);
  }

  return sorted;
  function visit(nodeVal, ancestors = []) {
    const node = nodes[nodeVal];
    const { val } = node;
    if (visited.has(val)) return;
    ancestors.push(val);
    visited.add(val);
    for (let kidVal of node.children) {
      if (ancestors.includes(kidVal)) {
        throw new Error('closed chain: ' + kidVal + ' is in ' + val);
      }
      visit(kidVal, ancestors.slice());
    }
    sorted.unshift(val);
  }
};

/**
 * TEST
 **/
function tsortTest() {
  // example 1: success
  let edges = [
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 4],
  ];

  let sorted = topologicalSort(edges);
  console.log(sorted);

  // example 2: failure ( A > B > C > A )
  edges = [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'A'],
  ];

  try {
    sorted = topologicalSort(edges);
    console.log(sorted);
  } catch (e) {
    console.log(e.message);
  }

  //             Class C
  //         /           \
  // Class A                 Class J - Class K
  //         \           /           /
  //             Class D            /
  //                               /
  // Class B ---------------------
  edges = [
    ['ClassA', 'ClassC'],
    ['ClassA', 'ClassD'],
    ['ClassJ', 'ClassK'],
    ['ClassB', 'ClassK'],
    ['ClassC', 'ClassJ'],
    ['ClassD', 'ClassJ'],
  ];

  sorted = topologicalSort(edges);
  console.log(sorted);
  edges = [
    [3, 1],
    [8, 1],
    [8, 7],
    [5, 7],
    [5, 2],
    [1, 4],
    [6, 7],
    [1, 2],
    [7, 6],
  ];

  try {
    sorted = topologicalSort(edges);
    console.log(sorted);
  } catch (e) {
    console.log(e.message);
  }
  edges = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 1],
  ];

  try {
    sorted = topologicalSort(edges);
    console.log(sorted);
  } catch (e) {
    console.log(e.message);
  }
}

tsortTest();
