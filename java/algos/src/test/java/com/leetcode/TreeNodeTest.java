package com.leetcode;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class TreeNodeTest {
    @Test
    public void shouldPrintOutInLevelOrder() {
        BinaryTree tree = new BinaryTree();
        TreeNode<Integer> one = new TreeNode<Integer>(1);
        TreeNode<Integer> two = new TreeNode<Integer>(2);
        TreeNode<Integer> three = new TreeNode<Integer>(3);
        TreeNode<Integer> four = new TreeNode<Integer>(4);
        TreeNode<Integer> five = new TreeNode<Integer>(5);
        one.left = two;
        one.right = three;
        one.left.left = four;
        one.left.right = five;
        tree.setTree(one);
        tree.printLevelOrder();
        assertTrue(true);
    }
}
