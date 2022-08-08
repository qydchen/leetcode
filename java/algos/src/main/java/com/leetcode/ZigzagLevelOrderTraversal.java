package com.leetcode;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class ZigzagLevelOrderTraversal {
    // Given the root of a binary tree, return the zigzag level order traversal of
    // its nodes' values. (i.e., from left to right, then right to left for the next
    // level and alternate between).
    public List<List<Integer>> solution(TreeNodeLC root) {
        List<List<Integer>> output = new ArrayList<>();
        if (root == null)
            return output;
        Stack<TreeNodeLC> stack = new Stack<>();
        stack.add(root);
        boolean isLeftToRight = true;
        while (!stack.isEmpty()) {
            Stack<TreeNodeLC> newStack = new Stack<>();
            List<Integer> list = new ArrayList<>();
            while (!stack.isEmpty()) {
                TreeNodeLC node = stack.pop();
                list.add(node.val);
                if (isLeftToRight) {
                    if (node.left != null) {
                        newStack.push(node.left);
                    }
                    if (node.right != null) {
                        newStack.push(node.right);
                    }
                } else {
                    if (node.right != null) {
                        newStack.push(node.right);
                    }
                    if (node.left != null) {
                        newStack.push(node.left);
                    }
                }
            }
            stack = newStack;
            output.add(list);
            isLeftToRight = !isLeftToRight;
        }
        return output;
    }
}
