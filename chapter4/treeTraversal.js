class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// In-order traversal
function inOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.val)
    inOrder(node.right);
  }
}

// Pre-order traversal
function preOrder(node) {
  if (node !== null) {
    console.log(node.val)
    preOrder(node.left);
    preOrder(node.right);
  }
}

// Post-order traversal
function postOrder(node) {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.val)
  }
}
//       a
//     b   c
//   d  e  f  g

let a = new Node('a');
a.left = new Node('b');
a.right = new Node('c');
a.left.left = new Node('d');
a.left.right = new Node('e');
a.right.left = new Node('f');
a.right.right = new Node('g');

console.log('in order');
inOrder(a);
console.log('pre order');
preOrder(a);
console.log('post order');
postOrder(a);
