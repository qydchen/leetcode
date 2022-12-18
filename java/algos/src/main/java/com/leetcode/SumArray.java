package com.leetcode;

public class SumArray {
    static int solution(int[] nums) { // O(n) time | O(1) space
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        return sum;
    }
}
