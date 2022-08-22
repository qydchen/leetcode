package com.leetcode;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class FilterAndCheckPalindrome {
    // Given a alpha numeric with special characters string write a function to
    // filter out the special characters and then return whether its a palindrome or
    // not.

    // input: "hello world!@#!@%@!%" -> false
    // input: "ra,.c!ec%#a!!r?" -> true
    public boolean solution(String string) { // O(n) time // O(n) space
        final Set<Character> specials = new HashSet<Character>();
        specials.addAll(
                Arrays.asList(
                        new Character[] { ':', ',', '?', '!', '@', '#', '$', '.', '/', ';', ':', '\'', '"', '%' }));
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < string.length(); i++) {
            Character c = string.charAt(i);
            if (!specials.contains(c)) {
                builder.append(c);
            }
        }
        String filtered = builder.toString();
        for (int i = 0; i < Math.floor(filtered.length() / 2); i++) {
            int right = filtered.length() - 1 - i;
            if (filtered.charAt(i) != filtered.charAt(right)) {
                return false;
            }
        }
        return true;
    }
}
