package com.leetcode;

import static org.junit.Assert.assertArrayEquals;

import org.junit.Test;

public class ProductOfAllOthersTest {
    @Test
    public void test1() {
        ProductOfAllOthers solution = new ProductOfAllOthers();
        int[] actual = solution.solution(new int[] { 1, 2, 3 });
        assertArrayEquals(new int[] { 6, 3, 2 }, actual);
    }

    @Test
    public void test2() {
        ProductOfAllOthers solution = new ProductOfAllOthers();
        int[] actual = solution.solution(new int[] { 1, 2, 3, 4, 5, 6 });
        assertArrayEquals(new int[] { 2 * 3 * 4 * 5 * 6, 1 * 3 * 4 * 5 * 6, 1 * 2 * 4 * 5 * 6, 1 * 2 * 3 * 5 * 6,
                1 * 2 * 3 * 4 * 6, 1 * 2 * 3 * 4 * 5 }, actual);
    }

    @Test
    public void test3() {
        ProductOfAllOthers solution2 = new ProductOfAllOthers();
        int[] actual = solution2.solution2(new int[] { 1, 2, 3 });
        assertArrayEquals(new int[] { 6, 3, 2 }, actual);
    }

    @Test
    public void test4() {
        ProductOfAllOthers solution2 = new ProductOfAllOthers();
        int[] actual = solution2.solution2(new int[] { 1, 2, 3, 4, 5, 6 });
        assertArrayEquals(new int[] { 2 * 3 * 4 * 5 * 6, 1 * 3 * 4 * 5 * 6, 1 * 2 * 4 * 5 * 6, 1 * 2 * 3 * 5 * 6,
                1 * 2 * 3 * 4 * 6, 1 * 2 * 3 * 4 * 5 }, actual);
    }
}
