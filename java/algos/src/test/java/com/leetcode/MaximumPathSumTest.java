package com.leetcode;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class MaximumPathSumTest {
    @Test
    public void test1() {
        TreeNode<Integer> one = new TreeNode<Integer>(1);
        TreeNode<Integer> two = new TreeNode<Integer>(2);
        TreeNode<Integer> three = new TreeNode<Integer>(3);
        TreeNode<Integer> four = new TreeNode<Integer>(4);
        TreeNode<Integer> five = new TreeNode<Integer>(5);
        TreeNode<Integer> negEleven = new TreeNode<Integer>(-11);
        one.left = two;
        one.right = three;
        one.left.left = negEleven;
        one.left.right = five;
        one.left.left.left = four;
        MaximumPathSum solution = new MaximumPathSum();
        Integer ans = solution.solution(one);
        assertEquals(11, ans.intValue());
    }

    @Test
    public void test2() {
        TreeNode<Integer> root = new TreeNode<Integer>(-10);
        TreeNode<Integer> nine = new TreeNode<Integer>(9);
        TreeNode<Integer> twenty = new TreeNode<Integer>(20);
        TreeNode<Integer> fifteen = new TreeNode<Integer>(15);
        TreeNode<Integer> seven = new TreeNode<Integer>(7);
        root.left = nine;
        root.right = twenty;
        root.right.left = fifteen;
        root.right.right = seven;
        MaximumPathSum solution = new MaximumPathSum();
        Integer ans = solution.solution(root);
        assertEquals(42, ans.intValue());
    }

    @Test
    public void test3() {
        TreeNode<Integer> root = new TreeNode<Integer>(2);
        TreeNode<Integer> negOne = new TreeNode<Integer>(-1);
        root.left = negOne;
        MaximumPathSum solution = new MaximumPathSum();
        Integer ans = solution.solution(root);
        assertEquals(2, ans.intValue());
    }
}
