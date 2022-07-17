package com.leetcode;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class TwoSum {
    // Amazon Music Runtime - similar to Leetcode's Two Sum problem
    public static List<List<Integer>> bruteForce(List<Integer> nums, Integer target) {
        // O(n^2) time | O(n^2) space
        List<List<Integer>> output = new ArrayList<>();
        for (int i = 0; i < nums.size() - 1; i++) {
            Integer outer = nums.get(i);
            for (int j = i + 1; j < nums.size(); j++) {
                Integer inner = nums.get(j);
                if (outer + inner == target) {
                    output.add(Arrays.asList(outer, inner));
                }
            }
        }
        return output;
    }

    public static List<List<Integer>> hashSolution(List<Integer> nums, Integer target) {
        List<List<Integer>> output = new ArrayList<>();
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.size(); i++) {
            Integer current = nums.get(i);
            if (map.containsKey(current)) {
                output.add(Arrays.asList(map.get(current), current));
            } else {
                map.put(target - current, current);
            }
        }
        return output;
    }

    public static List<List<Integer>> sortedSolution(List<Integer> nums, Integer target) {
        // O(n log n) time | O(n) space
        Collections.sort(nums);
        List<List<Integer>> output = new ArrayList<>();
        int left = 0;
        int right = nums.size() - 1;
        while (left != right) {
            Integer leftNum = nums.get(left);
            Integer rightNum = nums.get(right);
            Integer sum = leftNum + rightNum;
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else if (sum == target) {
                output.add(Arrays.asList(leftNum, rightNum));
                left++;
            }
        }
        return output;
    }
}
