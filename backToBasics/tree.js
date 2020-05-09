var assert = require('assert');
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

const a = new TreeNode('a');
const b = new TreeNode('b');
const c = new TreeNode('c');
const d = new TreeNode('d');
const e = new TreeNode('e');

a.left = b;
a.right = c;
a.left.left = d;
a.left.right = e;

inOrderPrint(a);
console.log('---');
preOrderPrint(a);
console.log('---');
postOrderPrint(a);
console.log('---');

//   a
//  b c
// d e

assert.equal(dfs(a, 'e').val, 'e');
assert.equal(dfs(a, 'd').val, 'd');

assert.equal(bfs(a, 'e').val, 'e');
assert.equal(bfs(a, 'b').val, 'b');

