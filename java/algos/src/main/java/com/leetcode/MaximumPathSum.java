package com.leetcode;

// Binary Tree Maximum Path Sum

// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence
// has an edge connecting them. A node can only appear in the sequence at most once. Note
// that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.
public class MaximumPathSum {
    int max = Integer.MIN_VALUE;

    public int solution(TreeNode<Integer> root) { // O(n) time complexity | O(n) space complexity
        recurse(root);
        return this.max;
    }

    private Integer recurse(TreeNode<Integer> node) {
        if (node == null)
            return 0;
        int leftSum = recurse(node.left);
        int rightSum = recurse(node.right);
        this.max = Math.max(this.max, leftSum + node.val + rightSum);
        return Math.max(0, Math.max(leftSum + node.val, rightSum + node.val));
    }
}
