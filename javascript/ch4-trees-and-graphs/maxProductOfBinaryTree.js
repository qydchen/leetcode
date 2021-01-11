let Node = require("./node");
// Given a binary tree root. Split the binary tree into two subtrees by removing 1 edge such that the
// product of the sums of the subtrees are maximized.

// Since the answer may be too large, return it modulo 10^9 + 7.

// Example 1:

// Input: root = [1,2,3,4,5,6]
// Output: 110
// Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)
// Example 2:

// Input: root = [1,null,2,3,4,null,null,5,6]
// Output: 90
// Explanation:  Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)
// Example 3:

// Input: root = [2,3,9,10,7,8,6,5,4,11,1]
// Output: 1025
// Example 4:

// Input: root = [1,1]
// Output: 1

const MOD = 1e9 + 7;
// Insight: do a post-order traversal, and fill up the postOrderSums array, while gathering the total
// iterate over each running sum, and multiply it by the total - the current running sum

var maxProduct = function (root) {
  let postOrderSums = [];
  let total = 0;
  const traverse = (node) => {
    if (!node) return 0;
    let leftSum = traverse(node.left);
    let rightSum = traverse(node.right);
    let sum = leftSum + rightSum + node.val;
    console.log(postOrderSums, sum);
    postOrderSums.push(sum);
    console.log(total, "+", node.val);
    console.log();
    total += node.val;
    return sum;
  };
  traverse(root);
  let max = 0;
  for (let i = 0; i < postOrderSums.length; i++) {
    let totalOfSubTree = postOrderSums[i];
    let totalOfOtherSubTree = total - totalOfSubTree;
    max = Math.max(totalOfSubTree * totalOfOtherSubTree, max);
  }
  return max % MOD;
};

let one = new Node(1);
one.left = new Node(2);
one.right = new Node(3);
one.left.left = new Node(4);
one.left.right = new Node(5);
one.right.right = new Node(6);

console.log(maxProduct(one));
