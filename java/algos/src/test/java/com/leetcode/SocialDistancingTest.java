package com.leetcode;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class SocialDistancingTest {
    @Test
    public void test1() {
        int[][] theater = new int[][] { { 0, 0, 0, 0 }, { 0, 1, 0, 0 }, { 0, 0, 0, 1 } };
        boolean solution = SocialDistancing.solution(theater, 1);
        assertTrue(solution);
    }

    @Test
    public void test2() {
        int[][] theater = new int[][] { { 1, 0, 0, 0 }, { 0, 1, 0, 0 }, { 0, 0, 0, 1 } };
        boolean solution = SocialDistancing.solution(theater, 1);
        assertFalse(solution);
    }

    @Test
    public void test3() {
        int[][] theater = new int[][] { { 0, 0, 0, 0 }, { 0, 1, 0, 0 }, { 0, 0, 0, 1 } };
        boolean solution = SocialDistancing.solution(theater, 2);
        assertFalse(solution);
    }

    @Test
    public void test4() {
        int[][] theater = new int[][] { { 1, 1, 1, 1 }, { 1, 1, 1, 1 }, { 1, 1, 1, 1 } };
        boolean solution = SocialDistancing.solution(theater, 0);
        assertTrue(solution);
    }
}
