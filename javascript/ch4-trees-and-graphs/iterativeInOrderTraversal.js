class Node {
  constructor(val, parent) {
    this.left = this.right = null;
    this.val = val;
    this.parent = parent;
  }
}

function iterativeInOrderTraversal(tree, callback) {
  let prev = null;
  let curr = tree;
  while (curr) {
    let next;
    if (prev === null || prev === curr.parent) {
      if (curr.left) {
        next = curr.left;
      } else {
        callback(curr);
        next = curr.right ? curr.right : curr.parent;
      }
    } else if (prev === curr.left) {
      callback(curr);
      next = curr.right ? curr.right : curr.parent;
    } else {
      next = curr.parent;
    }
    prev = curr;
    curr = next;
  }
}

let root = new Node(1);
root.left = new Node(-2, root);
root.right = new Node(3, root);
root.left.left = new Node(4, root.left);
root.left.right = new Node(5, root.left);
root.right.left = new Node(-6, root.right);
root.right.right = new Node(2, root.right);

iterativeInOrderTraversal(root, function (node) {
  console.log(node.val);
});
