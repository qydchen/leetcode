package com.leetcode;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class BestAverageScoreTest {
    @Test
    public void test1() {
        String[][] input = new String[][] { { "Bob", "87" }, { "Mike", "35" }, { "Bob", "52" }, { "Jason", "35" },
                { "Mike", "55" }, { "Jessica", "99" } };
        int actual = BestAverageScore.solution(input);
        assertEquals(99, actual);
    }

    @Test
    public void test2() {
        String[][] input = new String[][] { { "Bob", "87" }, { "Bob", "88" }, { "Bob", "88.5" } };
        int actual = BestAverageScore.solution(input);
        assertEquals(87, actual);
    }

}
