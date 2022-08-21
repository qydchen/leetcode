package com.leetcode;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class NumberOfCountriesTest {
    @Test
    public void test1() {
        NumberOfCountries solution = new NumberOfCountries();
        char[][] input = new char[][] {
                { '1', '1', '0', '0', '0' },
                { '1', '1', '0', '0', '0' },
                { '0', '0', '1', '0', '0' },
                { '0', '0', '0', '1', '1' }
        };
        int actual = solution.solution(input);
        assertEquals(3, actual);
    }
}
