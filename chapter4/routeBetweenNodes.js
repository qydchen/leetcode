// Given a directed graph, design an algorithm to find out whether there is a
// route between two nodes.
class GraphNode {
  constructor(name) {
    this.name = name;
    this.children = [];
    this.visited = false;
  }
}

// O(n) time where n is the total # of vertices to search
// O(n) space where n is the worse case you need to hold all vertices in the queue
function routeBetweenNodes(root) {
  const queue = [];
  root.visited = true;
  queue.push(root);
  while (queue.length) {
    let removed = queue.shift();
    for (let i = 0; i < removed.children.length; i++) {
      let child = removed.children[i];
      if (!child.visited) {
        child.visited = true;
        queue.push(child);
      } else {
        return true;
      }
    }
  }
  return false;
}

let zero = new GraphNode(0);
let one = new GraphNode(1);
let two = new GraphNode(2);
let three = new GraphNode(3);
let four = new GraphNode(4);
let five = new GraphNode(5);

zero.children.push(one, four, five);
one.children.push(three, four);
three.children.push(two, four);
two.children.push(one);

console.log(routeBetweenNodes(zero));

let zero1 = new GraphNode(0);
let one1 = new GraphNode(1);
let two1 = new GraphNode(2);
let three1 = new GraphNode(3);
let four1 = new GraphNode(4);
let five1 = new GraphNode(5);

zero.children.push(one, five);
one.children.push(three, four);
two.children.push(one);

console.log(routeBetweenNodes(zero1));
