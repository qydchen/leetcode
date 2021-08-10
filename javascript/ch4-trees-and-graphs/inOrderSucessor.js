const assert = require("assert");
let Node = require("./node");
const inOrderSuccessor = (node, k) => {
  let stack = [];
  inOrderPopulate(node, stack);
  for (let i = 0; i < stack.length; i++) {
    if (stack[i].val === k) return stack[i - 1] || null;
  }
  return null;
};

const inOrderPopulate = (node, stack) => {
  if (!node) return;
  inOrderPopulate(node.left, stack);
  stack.push(node);
  inOrderPopulate(node.right, stack);
};

const inOrderSuccessorLessSpace = (node, target) => {
  let prev = null;
  let ans = null;
  const inOrderTraverse = (n) => {
    if (n == null) return;
    inOrderTraverse(n.left);
    if (n.val === target) {
      ans = prev;
      return ans;
    }
    prev = n;
    inOrderTraverse(n.right);
  };
  inOrderTraverse(node);
  return ans;
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

const inOrder = (n) => {
  if (!n) return;
  inOrder(n.left);
  console.log(n.val);
  inOrder(n.right);
};

// inOrder(root);

// console.log(inOrderSuccessor(root, 3)); // 1
// console.log(inOrderSuccessor(root, 7)); // 6
// console.log(inOrderSuccessor(root, 99)); // null

console.log(inOrderSuccessorLessSpace(root, 3));
console.log(inOrderSuccessorLessSpace(root, 7));
console.log(inOrderSuccessorLessSpace(root, 99));

assert.strictEqual(inOrderSuccessor(root, 3)?.val, 1);
assert.strictEqual(inOrderSuccessor(root, 7)?.val, 6);
assert.strictEqual(inOrderSuccessor(root, 99)?.val, undefined);

assert.strictEqual(inOrderSuccessorLessSpace(root, 3)?.val, 1);
assert.strictEqual(inOrderSuccessorLessSpace(root, 7)?.val, 6);
assert.strictEqual(inOrderSuccessorLessSpace(root, 99)?.val, undefined);
