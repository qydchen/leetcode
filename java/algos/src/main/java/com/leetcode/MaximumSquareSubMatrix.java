package com.leetcode;


// Given an N x N matrix, find a k x k submatrix where k <= N and k >= 1, such that the sum of all the 
// elements in the submatrix is a maximum. The input matrix can contain zero, positive and negative numbers.

// For example:
// Given k = 3, and the matrix:
// [ [ 1, 2,-1, 4],
//   [-8,-3, 4, 2],
//   [ 3, 8,10,-8],
//   [-4,-1, 1, 7] ]
// the output should be:

// [[-3, 4, 2],
//  [-8,10,-8],
//  [-1, 1, 7]]

public class MaximumSquareSubMatrix {
    public static int[][] solution(int[][] matrix, int k) {
        int[][] preprocess = new int[matrix.length][matrix.length];

        for (int i = 0; i < preprocess[0].length; i++) {
            int sum = 0;
            sum += matrix[0][i];
            preprocess[0][i] = sum;
        }

        for (int i = 0; i < preprocess.length; i++) {
            int sum = 0;
            sum += matrix[i][0];
            preprocess[i][0] = sum;
        }

        for (int i = 1; i < preprocess.length; i++) {
            for (int j = 1; j < preprocess[i].length; j++) {
                preprocess[i][j] = matrix[i][j] + preprocess[i - 1][j] + preprocess[i][j - 1]
                        - preprocess[i - 1][j - 1];
            }
        }

        int maximum = Integer.MIN_VALUE;
        int[] maxPos = new int[] { -1, -1 };
        for (int i = preprocess.length - 1; i >= k; i--) {
            for (int j = preprocess[i].length - 1; j >= k; j--) {
                int top = i - k < 0 ? -1 : i - k;
                int left = j - k < 0 ? -1 : j - k;
                int localMax = preprocess[i][j];
                if (top > -1) {
                    localMax -= preprocess[top][j];
                }
                if (left > -1) {
                    localMax -= preprocess[i][left];
                }
                if (top > -1 && left > -1) {
                    localMax += preprocess[top][left];
                }
                if (localMax > maximum) {
                    maxPos[0] = i;
                    maxPos[1] = j;
                    maximum = localMax;
                }
            }
        }

        int[][] output = new int[k][k];
        int outputI = 0;
        for (int i = maxPos[0] - k + 1; i <= maxPos[0]; i++) {
            int outputJ = 0;
            for (int j = maxPos[1] - k + 1; j <= maxPos[1]; j++) {
                output[outputI][outputJ] = matrix[i][j];
                outputJ++;
            }
            outputI++;
        }

        return output;
    }
}

