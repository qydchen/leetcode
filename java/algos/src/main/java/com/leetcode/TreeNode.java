package com.leetcode;

public class TreeNode<T> {
    TreeNode<T> left = null;
    TreeNode<T> right = null;
    T val = null;

    TreeNode(T val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
