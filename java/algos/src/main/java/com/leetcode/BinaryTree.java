package com.leetcode;

import java.util.LinkedList;
import java.util.Queue;

// binary tree traversal in level order
public class BinaryTree {
    TreeNode<Integer> tree;

    public void printLevelOrder() {
        Queue<TreeNode<Integer>> queue = new LinkedList<>();
        queue.add(tree);
        while (!queue.isEmpty()) {
            TreeNode<Integer> curr = queue.poll();
            if (curr == null) {
                return;
            }
            queue.add(curr.left);
            queue.add(curr.right);
            System.out.print(curr.val);
        }
    }

    public void setTree(TreeNode<Integer> tree) {
        this.tree = tree;
    }

}
