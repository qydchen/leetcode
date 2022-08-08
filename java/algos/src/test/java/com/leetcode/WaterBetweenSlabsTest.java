package com.leetcode;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class WaterBetweenSlabsTest {
    @Test
    public void test1() {
        WaterBetweenSlabs solution = new WaterBetweenSlabs();
        int actual = solution.solution(new int[] { 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 });
        assertEquals(6, actual);
    }

    @Test
    public void test2() {
        WaterBetweenSlabs solution = new WaterBetweenSlabs();
        int actual = solution.solution(new int[] { 4, 2, 0, 3, 2, 5 });
        assertEquals(9, actual);
    }
}
