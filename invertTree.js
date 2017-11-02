class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function invertTree(root) {
  if (!root) {
    return [];
  }
  let left = root.left;
  let right = root.right;
  root.left = right;
  root.right = left;
  if (root.left) {
    invertTree(root.left);
  }
  if (root.right) {
    invertTree(root.right);
  }
  return root;
}

let rootNode = new Node('a');
rootNode.left = new Node('b');
rootNode.right = new Node('c');
rootNode.left.left = new Node('d');
rootNode.left.right = new Node('e');

console.log(invertTree(rootNode));
