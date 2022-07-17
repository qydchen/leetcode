package com.leetcode;
// Suppose we have some input data describing a graph of relationships between parents 

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

// and children over multiple generations. The data is formatted as a list of (parent, child)
// pairs, where each individual is assigned a unique positive integer identifier.

// For example, in this diagram, 6 and 8 have common ancestors of 4 and 14.

//                15
//               / \
//          14  13  21
//          |   |
// 1   2    4   12
//  \ /   / | \ /
//    3  5  8  9
//    \ / \     \
//     6   7     11

// parentChildPairs2 = [
//     (1, 3), (2, 3), (3, 6), (5, 6), (5, 7), (4, 5),
//     (15, 21), (4, 8), (4, 9), (9, 11), (14, 4), (13, 12),
//     (12, 9), (15, 13)
// ]

// Write a function that takes this data and the identifiers of two individuals 
// as inputs and returns true if and only if they share at least one ancestor. 

// Sample input and output:

// hasCommonAncestor(parentChildPairs2, 3, 8)   => false
// hasCommonAncestor(parentChildPairs2, 5, 8)   => true
// hasCommonAncestor(parentChildPairs2, 6, 8)   => true
// hasCommonAncestor(parentChildPairs2, 6, 9)   => true
// hasCommonAncestor(parentChildPairs2, 1, 3)   => false
// hasCommonAncestor(parentChildPairs2, 3, 1)   => false
// hasCommonAncestor(parentChildPairs2, 7, 11)  => true
// hasCommonAncestor(parentChildPairs2, 6, 5)   => true
// hasCommonAncestor(parentChildPairs2, 5, 6)   => true
// hasCommonAncestor(parentChildPairs2, 3, 6)   => true
// hasCommonAncestor(parentChildPairs2, 21, 11) => true

// Complexity Analysis variables:

// n: number of pairs in the input

// */

// "use strict";

// const parentChildPairs2 = [
//     [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [15, 21],
//     [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9],
//     [15, 13]
// ];
public class HasCommonAncestor {
    public static boolean solution(int[][] parentChildPairs, int target1, int target2) { // O(n^2) time | O(n) space
        // O(n) time to create | O(n) space
        Map<Integer, ArrayList<Integer>> adjacencyMap = new HashMap<Integer, ArrayList<Integer>>();
        for (int i = 0; i < parentChildPairs.length; i++) {
            if (!adjacencyMap.containsKey(parentChildPairs[i][0])) {
                adjacencyMap.put(parentChildPairs[i][0], new ArrayList<Integer>());
            }
            if (!adjacencyMap.containsKey(parentChildPairs[i][1])) {
                adjacencyMap.put(parentChildPairs[i][1], new ArrayList<Integer>());
            }
            adjacencyMap.get(parentChildPairs[i][0]).add(parentChildPairs[i][1]);
        }
        for (Integer key : adjacencyMap.keySet()) { // O(n) time | O(1) space
            boolean hasAncestor = dfs(adjacencyMap, key, target1, target2); // O(n) time | O(n) space
            if (hasAncestor) {
                return true;
            }
        }

        return false;
    }

    private static boolean dfs(Map<Integer, ArrayList<Integer>> adjacencyMap, Integer key, int target1, int target2) {
        Integer left = helper(adjacencyMap, key, target1, key); // O(n) time | O(n) space
        Integer right = helper(adjacencyMap, key, target2, key); // O(n) time | O(n) space

        if (left == -1 || right == -1) {
            return false;
        }
        if (left == right && key != target1 && key != target2) {
            return true;
        }
        return false;
    }

    private static Integer helper(Map<Integer, ArrayList<Integer>> adjacencyMap, Integer key, int target,
            Integer ancestor) {
        if (key == target) {
            return ancestor;
        }
        for (Integer child : adjacencyMap.get(key)) {
            Integer output = helper(adjacencyMap, child, target, ancestor);
            if (output != -1) {
                return output;
            }
        }
        return -1;
    }
}
