package com.leetcode;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TwoSumTest {
    @Test
    public void bruteForce() {
        Integer target = 15;
        List<Integer> nums = Arrays.asList(2, 3, 1, 7, 6, 13, 11, 4);
        List<List<Integer>> output = TwoSum.bruteForce(nums, target);
        assertEquals(Arrays.asList(Arrays.asList(2, 13), Arrays.asList(11, 4)), output);
    }

    @Test
    public void hashSolution() {
        Integer target = 15;
        List<Integer> nums = Arrays.asList(2, 3, 1, 7, 6, 13, 11, 4);
        List<List<Integer>> output = TwoSum.hashSolution(nums, target);
        assertEquals(Arrays.asList(Arrays.asList(2, 13), Arrays.asList(11, 4)), output);
    }

    @Test
    public void sortSolution() {
        Integer target = 15;
        List<Integer> nums = Arrays.asList(2, 3, 1, 7, 6, 13, 11, 4);
        List<List<Integer>> output = TwoSum.sortedSolution(nums, target);
        assertEquals(Arrays.asList(Arrays.asList(2, 13), Arrays.asList(4, 11)), output);
    }
}
