package com.leetcode;

// You are given an array of numbers. Return an array of the same length. Each value 
// in the return array should be the product of all of the other values except for the current value. 
// EX. 
// Given Array: [1, 2, 3, 4, 5, 6]
// Return Array: [2*3*4*5*6, 1*3*4*5*6, 1*2*4*5*6...]
public class ProductOfAllOthers {
    public int[] solution(int[] arr) { // O(n^2) time complexity | O(n) space complexity
        int[] result = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            int product = 1;
            for (int j = 0; j < arr.length; j++) {
                if (i == j) {
                    continue;
                }
                product *= arr[j];
            }
            result[i] = product;
        }
        return result;
    }

    public int[] solution2(int[] arr) { // O(n) time complexity | O(n) space complexity
        int[] result = new int[arr.length];
        int totalProduct = 1;
        for (int n : arr) {
            totalProduct *= n;
        }
        for (int i = 0; i < arr.length; i++) {
            result[i] = totalProduct / arr[i];
        }
        return result;
    }
}
