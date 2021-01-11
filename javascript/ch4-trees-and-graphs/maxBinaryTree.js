//     -10
//     /  \
//    2    4
//   / \
//  1   3

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

const findSum = (root) => {
  if (!root) return 0;
  let ans = { v: -Infinity };
  findLargestUtil(root, ans);
  return ans.v;
};

const findLargestUtil = (root, ans) => {
  if (!root) return 0;
  let sum =
    root.val +
    findLargestUtil(root.left, ans) +
    findLargestUtil(root.right, ans);
  ans.v = Math.max(ans.v, sum);
  return sum;
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
console.log(findSum(ten));

let root = new Node(1);
root.left = new Node(-2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(-6);
root.right.right = new Node(2);

console.log(maxBinaryTree(root));
console.log(findSum(root));
