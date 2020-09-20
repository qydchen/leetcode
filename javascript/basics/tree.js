const assert = require("assert");
// Construct a tree

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function inOrderPrint(node) {
    if (node) {
        inOrderPrint(node.left);
        console.log(node.val);
        inOrderPrint(node.right);
    }
}

function preOrderPrint(node) {
    if (node) {
        console.log(node.val);
        preOrderPrint(node.left);
        preOrderPrint(node.right);
    }
}

function postOrderPrint(node) {
    if (node) {
        postOrderPrint(node.left);
        postOrderPrint(node.right);
        console.log(node.val);
    }
}

function dfs(node, searchVal) {
    if (node === null) return null;
    if (node.val === searchVal) return node;
    const left = dfs(node.left, searchVal);
    const right = dfs(node.right, searchVal);
    if (left !== null) return left;
    if (right !== null) return right;
    return null;
}

function bfs(node, searchVal) {
    if (node === null) return null;
    let queue = [];
    queue.push(node);
    while (queue.length !== 0) {
        let current = queue.shift();
        if (current.val === searchVal) return current;
        if (current.left !== null) {
            queue.push(current.left);
        }
        if (current.right !== null) {
            queue.push(current.right);
        }
    }
    return null;
}

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");
const g = new TreeNode("g");
const x = new TreeNode("x");
const y = new TreeNode("y");

a.left = b;
a.right = c;
a.left.left = d;
a.left.right = e;
a.left.left.left = f;
a.left.left.right = g;

a.right.left = x;
a.right.right = y;

inOrderPrint(a);
console.log("---");
preOrderPrint(a);
console.log("---");
postOrderPrint(a);
console.log("---");

//     a
//   b     c
// d   e   x y
//f g

assert.strictEqual(dfs(a, "e").val, "e");
assert.strictEqual(dfs(a, "d").val, "d");

assert.strictEqual(bfs(a, "e").val, "e");
assert.strictEqual(bfs(a, "b").val, "b");

module.exports = TreeNode;
