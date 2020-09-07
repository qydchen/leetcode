class Graph {
    constructor(nodes) {
        this.nodes = nodes;
    }
}

class GraphNode {
    constructor(name) {
        this.name = name;
        this.children = [];
        this.visited = false;
    }
}

function dfSearch(root) {
    if (!root) return;
    console.log(root.name);
    root.visited = true;
    root.children.forEach((n) => {
        if (!n.visited) {
            dfSearch(n);
        }
    });
}

function bfSearch(root) {
    const queue = [];
    root.visited = true;
    queue.push(root);
    while (queue.length) {
        let removed = queue.shift();
        console.log(removed.name);
        removed.children.forEach((n) => {
            if (!n.visited) {
                n.visited = true;
                queue.push(n);
            }
        });
    }
}

let [zero, one, two, three, four, five] = [
    new GraphNode(0),
    new GraphNode(1),
    new GraphNode(2),
    new GraphNode(3),
    new GraphNode(4),
    new GraphNode(5),
];

zero.children.push(one, four, five);
one.children.push(three, four);
three.children.push(two, four);
two.children.push(one);

// crappy drawing of the graph;
// 0 -> 1 <- 2
// | \    \  ^
// v  v    v |
// 5   4 <- 3

dfSearch(zero);
[zero, one, two, three, four, five].forEach((node) => (node.visited = false));
bfSearch(zero);
