package com.leetcode;

// Given a seating status of theater in M*N matrix and distance K. Write a function to determine whether
// social distancing is followed or not and return boolean value.  
public class SocialDistancing {
    public static boolean solution(int[][] theater, int k) { // O(m*n*k^2) time | O(m*n) space complexity
        boolean[][] visited = new boolean[theater.length][theater[0].length];
        for (int i = 0; i < visited.length; i++) {
            for (int j = 0; j < visited[i].length; j++) {
                visited[i][j] = false;
            }
        }

        for (int i = 0; i < theater.length; i++) {
            for (int j = 0; j < theater[i].length; j++) {
                int seat = theater[i][j];
                if (seat == 1) {
                    boolean result = dfs(i, j, theater, i - k, j - k, i + k, j + k, visited, true);
                    if (result == false) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    private static boolean dfs(int i, int j, int[][] theater, int topBound, int leftBound, int bottomBound,
            int rightBound, boolean[][] visited, boolean isRoot) {
        if (i < topBound || i > bottomBound || j < leftBound || j > rightBound) {
            return true;
        }
        if (i < 0 || j < 0 || i >= theater.length || j >= theater[i].length || visited[i][j] == true) {
            return true;
        }
        visited[i][j] = true;
        if (theater[i][j] == 1 && !isRoot) {
            return false;
        }
        return dfs(i + 1, j, theater, topBound, leftBound, bottomBound, rightBound, visited, false) &&
                dfs(i - 1, j, theater, topBound, leftBound, bottomBound, rightBound, visited, false) &&
                dfs(i, j + 1, theater, topBound, leftBound, bottomBound, rightBound, visited, false) &&
                dfs(i, j - 1, theater, topBound, leftBound, bottomBound, rightBound, visited, false);
    }
}
