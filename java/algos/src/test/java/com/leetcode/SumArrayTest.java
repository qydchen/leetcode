package com.leetcode;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class SumArrayTest {

    @Test
    public void sum() {
        int[] nums = { 3, 1, 4, 5, 6, 8, 10 };
        int sum = SumArray.solution(nums);
        assertEquals(37, sum);
    }
}
