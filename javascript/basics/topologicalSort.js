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
    Class A                 Class J
            \           /
                Class D
            /           \
    Class B     Class E ->   Class H
            \
                Class F ->  Class I

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

// Assume graph is stored as adjacency list
// function topologicalSort(graph) {
//     let n = graph.length;
//     let v = new Array(n).fill(false);
//     let ordering = new Array(n).fill(0);
//     let i = n - 1;
//     for (let at = 0; at < n; at++) {
//         if (v[at] === false) {
//             visitedNodes = [];
//             dfs(at, v, visitedNodes, graph);
//             for (let nodeId in visitedNodes) {
//                 ordering[i] = nodeId;
//                 i = i - 1;
//             }
//         }
//     }
//     return ordering;
// }

// // Execute dfs
// function dfs(at, v, visitedNodes, graph) {
//     v[at] = true;
//     let edges = graph[at];
//     for (let edge in edges) {
//         if (V[edge.to] === false) {
//             dfs(edge.to, v, visitedNodes, graph);
//         }
//     }
//     visitedNodes.add(at);
// }

// There is a neat optimization for time and space: no need for the visitedNodes array
// function topologicalSort(graph) {
//     let n = graph.length;
//     let v = new Array(n).fill(false);
//     let ordering = new Array(n).fill(0);
//     let i = n - 1;
//     for (let at = 0; at < n; at++) {
//         if (v[at] === false) {
//             i = dfs(i, at, v, ordering, graph);
//         }
//     }
//     return ordering;
// }

// // Execute dfs
// function dfs(i, at, v, ordering, graph) {
//     v[at] = true;
//     let edges = graph[at];
//     for (let edge in edges) {
//         if (V[edge.to] === false) {
//             i = dfs(i, edge.to, v, ordering, graph);
//         }
//     }
//     ordering[i] = at;
//     return i - 1;
// }

function tsort(edges) {
    let nodes = {}, // hash: stringified id of the node => { id: id, afters: list of ids }
        sorted = [], // sorted list of IDs ( returned value )
        visited = {}; // hash: id of already visited node => true

    let Node = function (id) {
        this.id = id;
        this.afters = [];
    };

    // 1. build data structures
    edges.forEach(function (v) {
        let from = v[0],
            to = v[1];
        if (!nodes[from]) nodes[from] = new Node(from);
        if (!nodes[to]) nodes[to] = new Node(to);
        nodes[from].afters.push(to);
    });

    // 2. topological sort
    Object.keys(nodes).forEach(function visit(idstr, ancestors) {
        let node = nodes[idstr],
            id = node.id;

        // if already exists, do nothing
        if (visited[idstr]) return;

        if (!Array.isArray(ancestors)) ancestors = [];

        ancestors.push(id);

        visited[idstr] = true;

        node.afters.forEach(function (afterID) {
            if (ancestors.indexOf(afterID) >= 0)
                // if already in ancestors, a closed chain exists.
                throw new Error("closed chain : " + afterID + " is in " + id);

            visit(
                afterID.toString(),
                ancestors.map(function (v) {
                    return v;
                })
            ); // recursive call
        });

        sorted.unshift(id);
    });

    return sorted;
}

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

    let sorted = tsort(edges);
    console.log(sorted);

    // example 2: failure ( A > B > C > A )
    edges = [
        ["A", "B"],
        ["B", "C"],
        ["C", "A"],
    ];

    try {
        sorted = tsort(edges);
    } catch (e) {
        console.log(e.message);
    }

    // example 3: generate random edges
    let max = 100,
        iteration = 30;
    function randomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    edges = (function () {
        let ret = [],
            i = 0;
        while (i++ < iteration) ret.push([randomInt(max), randomInt(max)]);
        return ret;
    })();

    try {
        sorted = tsort(edges);
        console.log("succeeded", sorted);
    } catch (e) {
        console.log("failed", e.message);
    }
}

tsortTest();
