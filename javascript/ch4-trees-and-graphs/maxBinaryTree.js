//     -10
//     /  \
//    2    4
//   / \
//  1  3

class Node {
  constructor(val) {
    this.left = this.right = null;
    this.val = val;
  }
}

const maxBinaryTree = (root) => {
  if (!root) return 0;
  const leftVal = maxBinaryTree(root.left);
  const rightVal = maxBinaryTree(root.right);
  return Math.max(root.val + leftVal + rightVal, leftVal, rightVal);
};

const ten = new Node(-10);
const two = new Node(2);
const one = new Node(1);
const three = new Node(3);
const four = new Node(4);

ten.left = two;
ten.right = four;
two.left = one;
two.right = three;

console.log(maxBinaryTree(ten));
