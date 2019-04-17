// Equations are given in the format A / B = k, where A and B are variables represented as strings, and k 
// is a real number(floating point number).Given some queries, return the answers.
// If the answer does not exist, return -1.0.
//     Example:
// Given a / b = 2.0, b / c = 3.0.
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
// return [6.0, 0.5, -1.0, 1.0, -1.0].
// The input is: vector < pair < string, string >> equations, vector<double>& values, vector < pair < string, string >> 
// queries, where equations.size() == values.size(), and the values are positive.This represents the equations.
// Return vector<double>.
//     According to the example above:
//     equations = [["a", "b"], ["b", "c"]],
//     values = [2.0, 3.0],
//     queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]. 
// The input is always valid.You may assume that evaluating the queries will result in no division by zero and there is 
// no contradiction.
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

const calcEquation = function(equations, values, queries) {
    const parents = {};
    equations.forEach(
        (equation, i) => {
            const [top, bottom] = equation;
            if (!parents[top]) {
                parents[top] = new GraphNode(null, null, top);
            }
            if (!parents[bottom]) {
                parents[bottom] = new GraphNode(parents[top], values[i], top)
            }
            parents[top].addChild(parents[bottom]);
        }
    )
    const calculate = (pair) => {
        const [top, bottom] = pair;
        if (!parents[top] || !parents[bottom]) {
            return -1;
        } else if (top === bottom) {
            return 1;
        }
        let currentNode = parents[top];
        let nodeTraversalHistory = [];
        while (currentNode.symbol !== parents[bottom].symbol) {
            currentNode.children.forEach(node => {
                nodeTraversalHistory.push(node)
                currentNode = node;
            })
        }
        return nodeTraversalHistory.reduce((a, b) => a * b.ratio, 1);
    }
    return queries.map(calculate);
};

class GraphNode {
    constructor(parent, ratio, symbol) {
        this.parent = parent;
        this.ratio = ratio;
        this.children = [];
        this.symbol = symbol;
    }

    addChild(node) {
        this.children = this.children.concat(node);
    }
}

const equations = [["a", "b"], ["b", "c"]];
const values = [2.0, 3.0];
const queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]];

console.log(calcEquation(equations, values, queries));