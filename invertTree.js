class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

let invertTree = (root) => {
  if (!root) {
    return [];
  }
  const {left, right} = root;
  root.left = invertTree(right);
  root.right = invertTree(left);
  return root;
}

let rootNode = new Node('a');
rootNode.left = new Node('b');
rootNode.right = new Node('c');
rootNode.left.left = new Node('d');
rootNode.left.right = new Node('e');
rootNode.left.right.left = new Node('f');

console.log(rootNode);
invertTree(rootNode);
console.log(rootNode);
