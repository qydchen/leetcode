package com.leetcode;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class HasCommonAncestorTest {
    @Test
    public void test() {
        int[][] parentChildPairs2 = new int[][] {
                { 1, 3 }, { 2, 3 }, { 3, 6 }, { 5, 6 }, { 5, 7 }, { 4, 5 }, { 15, 21 },
                { 4, 8 }, { 4, 9 }, { 9, 11 }, { 14, 4 }, { 13, 12 }, { 12, 9 },
                { 15, 13 }
        };

        assertEquals(false, HasCommonAncestor.solution(parentChildPairs2, 3, 8));
        assertEquals(true, HasCommonAncestor.solution(parentChildPairs2, 5, 8));
        assertEquals(true, HasCommonAncestor.solution(parentChildPairs2, 6, 8));
        assertEquals(true, HasCommonAncestor.solution(parentChildPairs2, 6, 9));
        assertEquals(false, HasCommonAncestor.solution(parentChildPairs2, 1, 3));
        assertEquals(false, HasCommonAncestor.solution(parentChildPairs2, 3, 1));
        assertEquals(true, HasCommonAncestor.solution(parentChildPairs2, 7, 11));
        assertEquals(true, HasCommonAncestor.solution(parentChildPairs2, 6, 5));
        assertEquals(true, HasCommonAncestor.solution(parentChildPairs2, 5, 6));
        assertEquals(true, HasCommonAncestor.solution(parentChildPairs2, 3, 6));
        assertEquals(true, HasCommonAncestor.solution(parentChildPairs2, 21, 11));
    }
}
