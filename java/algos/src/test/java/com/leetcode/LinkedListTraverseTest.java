package com.leetcode;

import org.junit.Test;

public class LinkedListTraverseTest {
    @Test
    public void test() {
        LinkedListTraverse ll = new LinkedListTraverse();
        int[] nums = new int[] { 5, 4, 3, 2, 1 };
        for (int i = 0; i < nums.length; i++) {
            ll.add(nums[i]);
        }
        ll.iterativeTraverse();
        System.out.println("");
        ll.delete(3);
        ll.recursiveTraverse();
    }

    @Test
    public void testForNulls() {
        LinkedListTraverse ll = new LinkedListTraverse();
        ll.iterativeTraverse();
        System.out.println("");
        ll.delete(3);
        ll.recursiveTraverse();
    }
}
