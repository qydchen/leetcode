function lca(root, tar1, tar2) {
  if (root == null) return null;
  if (root.val === tar1) return root;
  if (root.val === tar2) return root;
  const left = lca(root.left, tar1, tar2);
  const right = lca(root.right, tar1, tar2);
  if (left !== null && right !== null) return root;
  if (left !== null && right === null) return left;
  if ((right !== null) & (left === null)) return right;
  return null;
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

function lca2(root, tar1, tar2) {
  if (root == null) return null;
  let arr1 = [];
  let arr2 = [];
  dfs(root, tar1, arr1);
  dfs(root, tar2, arr2);
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i].val !== arr2[i].val) {
      return arr1[i - 1];
    }
  }
  return null;
}

function dfs(node, tar, arr) {
  if (node == null) return false;
  if (node.val === tar) {
    arr.unshift(node);
    return true;
  }
  let left = dfs(node.left, tar, arr);
  let right = dfs(node.right, tar, arr);
  if (left === true) {
    arr.unshift(node);
    return true;
  }
  if (right === true) {
    arr.unshift(node);
    return true;
  }
  return false;
}

console.log(lca2(a, "d", "g"));
