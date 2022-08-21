package com.leetcode;

public class NumberOfCountries {
    // Find the number of countries in a given map represented by 2D array
    public int solution(char[][] grid) { // O(M*N) time | O(M*N) space
        int count = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == '1') {
                    this.dfs(i, j, grid);
                    count++;
                }
            }
        }
        return count;
    }

    private void dfs(int i, int j, char[][] grid) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] == '0') {
            return;
        }
        grid[i][j] = '0';
        this.dfs(i + 1, j, grid);
        this.dfs(i - 1, j, grid);
        this.dfs(i, j - 1, grid);
        this.dfs(i, j + 1, grid);
    }
}
