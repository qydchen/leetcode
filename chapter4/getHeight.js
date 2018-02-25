const { ans1, ans2, ans3, ans4, ans5 } = require('./minimalTree');

// O(n) time complexity, where n is the total number of nodes to go through
// O(h) space complexity, where h is the height

function getHeight(root) {
  if (!root || (!root.left && !root.right)) return 0;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

console.log(getHeight(ans1));
console.log(getHeight(ans2));
console.log(getHeight(ans3));
console.log(getHeight(ans4));
console.log(getHeight(ans5));
