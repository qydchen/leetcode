package com.leetcode;

import java.util.Arrays;

public class CheckAnagram {
    // Given 2 strings Write a function to check whether they are anagrams

    // "cinema" = "iceman"
    // "restful" = "fluster"
    // "evil" = "live"
    public boolean solution(String str1, String str2) { // O(n log n) time | O(n)
        if (str1.length() != str2.length()) {
            return false;
        }
        char[] charArr1 = str1.toCharArray();
        char[] charArr2 = str2.toCharArray();
        Arrays.sort(charArr1);
        Arrays.sort(charArr2);

        return Arrays.equals(charArr1, charArr2);

    }
}
