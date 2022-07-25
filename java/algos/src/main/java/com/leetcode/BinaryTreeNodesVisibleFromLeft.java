package com.leetcode;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

//  Given a binary tree, return the nodes visible from the
//  left side (the leftmost node in each row)
public class BinaryTreeNodesVisibleFromLeft<T> {
    public List<TreeNode<T>> solution(TreeNode<T> a) { // O(n) time | O(n) space
        if (a == null)
            return null;
        Queue<TreeNode<T>> queue = new LinkedList<TreeNode<T>>();
        List<TreeNode<T>> result = new ArrayList<TreeNode<T>>();
        queue.add(a);
        while (!queue.isEmpty()) {
            Queue<TreeNode<T>> newQueue = new LinkedList<TreeNode<T>>();
            result.add(queue.peek());
            for (TreeNode<T> node : queue) {
                if (node.left != null) {
                    newQueue.add(node.left);
                }
                if (node.right != null) {
                    newQueue.add(node.right);
                }
            }
            queue = newQueue;
        }
        return result;
    }
}
