// Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
//
// The root is the maximum number in the array.
// The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
// The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
// Construct the maximum tree by the given array and output the root node of this tree.
//
// Example 1:
// Input: [3,2,1,6,0,5]
// Output: return the tree root node representing the following tree:
//
//       6
//     /   \
//    3     5
//     \    /
//      2  0
//        \
//         1
// Note:
// The size of the given array will be in the range [1,1000].

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function constructMaximumBinaryTree(nums) {
    let max = null;
    let pivotIdx = 0;
    let newNode = null;
    for (let i = 0; i < nums.length; i++) {
        if (max === null || max < nums[i]) {
            max = nums[i];
            pivotIdx = i;
        }
    }
    if (max !== null) {
        newNode = new TreeNode(max);
        newNode.left = constructMaximumBinaryTree(nums.slice(0, pivotIdx));
        newNode.right = constructMaximumBinaryTree(nums.slice(pivotIdx + 1));
    }
    return newNode;
};
