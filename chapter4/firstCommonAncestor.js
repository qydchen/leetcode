// Design an algorithm and write code to find the first common ancestor of two
// nodes in a binary tree. Avoid storing additional nodes in a data structure.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function leastCommonAncestor(root, node1, node2) {
  if (!root) return null;
  if (root === node1 || root == node2) return root;
  const left = leastCommonAncestor(root.left, node1, node2);
  const right = leastCommonAncestor(root.right, node1, node2);
  if (left !== null && right !== null) return root;
  if (left === null && right === null) return null;
  return left !== null ? left : right;
}

const a = new TreeNode('a')
const b = new TreeNode('b')
const c = new TreeNode('c')
const d = new TreeNode('d')
const e = new TreeNode('e')
const f = new TreeNode('f')
const g = new TreeNode('g')
const h = new TreeNode('h')
const i = new TreeNode('i')
const x = new TreeNode('x')


const tree = a;
tree.left = b;
tree.right = c;
tree.left.left = d;
tree.left.right = e;
tree.right.left = f;
tree.right.right = g;
tree.left.left.left = h;
tree.left.left.right = i;
tree.right.right.left = x;

console.log(leastCommonAncestor(tree, i, e)) // b
console.log(leastCommonAncestor(tree, f, x)) // c
