package com.leetcode;

import java.util.HashMap;
import java.util.Map;

// Given some string having number of '*' and '#' as its only characters find the longest
// substring which has the highest number of equal number of '*' and '#'.
public class LongestSubstringEqualNumber {
    public static String solution(String word) { // O(n) time | O(n) space
        int length = 0;
        int cumDiff = 0;
        Map<Integer, Integer> firstIdx = new HashMap<>(); // O(n) space
        firstIdx.put(0, -1);
        String longestString = "";
        for (int i = 0; i < word.length(); i++) { // O(n) time
            char c = word.charAt(i);
            if (c == '#') {
                cumDiff += 1;
            } else if (c == '*') {
                cumDiff -= 1;
            }
            if (firstIdx.containsKey(cumDiff)) {
                length = Math.max(length, i - firstIdx.get(cumDiff));
                longestString = word.substring(i - length + 1, i + 1);
            } else {
                firstIdx.put(cumDiff, i);
            }
        }
        return longestString;
    }
}
