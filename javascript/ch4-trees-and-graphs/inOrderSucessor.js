let Node = require("./node");
const inOrderSuccessor = (node, k) => {
  let stack = [];
  inOrderPopulate(node, stack);
  for (let i = 0; i < stack.length; i++) {
    if (stack[i].val === k) return stack[i - 1];
  }
  return null;
};

const inOrderPopulate = (node, stack) => {
  if (!node) return;
  inOrderPopulate(node.left, stack);
  stack.push(node);
  inOrderPopulate(node.right, stack);
};

//      5
//    /   \
//   3     6
//  / \     \
// 1   4     8
//          / \
//         7  11

let root = new Node(5);
root.left = new Node(3);
root.left.left = new Node(1);
root.left.right = new Node(4);
root.right = new Node(6);
root.right.right = new Node(8);
root.right.right.left = new Node(7);
root.right.right.right = new Node(11);

console.log(inOrderSuccessor(root, 3));
console.log(inOrderSuccessor(root, 99));
