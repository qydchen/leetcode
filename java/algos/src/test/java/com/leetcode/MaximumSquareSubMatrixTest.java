package com.leetcode;

import static org.junit.Assert.assertTrue;

import java.util.Arrays;

import org.junit.Test;

public class MaximumSquareSubMatrixTest {
    @Test
    public void test1() {
        int[][] input = { { 1, 2, -1, 4 },
                { -8, -3, 4, 2 },
                { 3, 8, 10, -8 },
                { -4, -1, 1, 7 } };
        int[][] solution = MaximumSquareSubMatrix.solution(input, 3);
        assertTrue(Arrays.deepEquals(new int[][] { { -3, 4, 2 }, { 8, 10, -8 }, { -1, 1, 7 } }, solution));
    }
}
