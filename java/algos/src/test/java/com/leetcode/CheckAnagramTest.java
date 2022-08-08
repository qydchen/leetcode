package com.leetcode;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class CheckAnagramTest {
    @Test
    public void test1() {
        CheckAnagram solution = new CheckAnagram();
        boolean actual = solution.solution("cinema", "iceman");
        assertTrue(actual);
    }

    @Test
    public void test2() {
        CheckAnagram solution = new CheckAnagram();
        boolean actual = solution.solution("live", "evil");
        assertTrue(actual);
    }

    @Test
    public void test3() {
        CheckAnagram solution = new CheckAnagram();
        boolean actual = solution.solution("hello world", "goodbye");
        assertFalse(actual);
    }
}
