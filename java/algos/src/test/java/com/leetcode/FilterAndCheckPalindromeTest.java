package com.leetcode;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class FilterAndCheckPalindromeTest {
    // input: "hello world!@#!@%@!%" -> false
    // input: "ra,.c!ec%#a!!r?" -> true

    @Test
    public void test1() {
        FilterAndCheckPalindrome solution = new FilterAndCheckPalindrome();
        boolean actual = solution.solution("ra,.c!ec%#a!!r?");
        assertEquals(true, actual);
    }

    @Test
    public void test2() {
        FilterAndCheckPalindrome solution = new FilterAndCheckPalindrome();
        boolean actual = solution.solution("!@#,\"'");
        assertEquals(true, actual);
    }

    @Test
    public void test3() {
        FilterAndCheckPalindrome solution = new FilterAndCheckPalindrome();
        boolean actual = solution.solution("hello world!@#!@%@!%");
        assertEquals(false, actual);
    }

    @Test
    public void test4() {
        FilterAndCheckPalindrome solution = new FilterAndCheckPalindrome();
        boolean actual = solution.solution("abba");
        assertEquals(true, actual);
    }

    @Test
    public void test5() {
        FilterAndCheckPalindrome solution = new FilterAndCheckPalindrome();
        boolean actual = solution.solution("abdba");
        assertEquals(true, actual);
    }

    @Test
    public void test6() {
        FilterAndCheckPalindrome solution = new FilterAndCheckPalindrome();
        boolean actual = solution.solution("abbag");
        assertEquals(false, actual);
    }
}
