package com.leetcode;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class LongestSubstringEqualNumberTest {
    @Test
    public void test1() {
        String actual = LongestSubstringEqualNumber.solution("##**");
        assertEquals("##**", actual);
    }

    @Test
    public void test2() {
        String actual = LongestSubstringEqualNumber.solution("******#*#*#*******");
        assertEquals("#*#*#*", actual);
    }

    @Test
    public void test3() {
        String actual = LongestSubstringEqualNumber.solution("*#");
        assertEquals("*#", actual);
    }

    @Test
    public void test4() {
        String actual = LongestSubstringEqualNumber.solution("**#");
        assertEquals("*#", actual);
    }
}
