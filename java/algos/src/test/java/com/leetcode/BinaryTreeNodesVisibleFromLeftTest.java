package com.leetcode;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class BinaryTreeNodesVisibleFromLeftTest {
    @Test
    public void test1() {
        TreeNode<String> a = new TreeNode<String>("a");
        TreeNode<String> b = new TreeNode<String>("b");
        TreeNode<String> c = new TreeNode<String>("c");
        TreeNode<String> d = new TreeNode<String>("d");
        TreeNode<String> e = new TreeNode<String>("e");
        TreeNode<String> f = new TreeNode<String>("f");
        a.left = b;
        a.right = c;
        c.left = d;
        c.right = e;
        e.right = f;
        BinaryTreeNodesVisibleFromLeft<String> solution = new BinaryTreeNodesVisibleFromLeft<String>();
        List<TreeNode<String>> ans = solution.solution(a);
        assertEquals(Arrays.asList(a, b, d, f), ans);
    }
}
