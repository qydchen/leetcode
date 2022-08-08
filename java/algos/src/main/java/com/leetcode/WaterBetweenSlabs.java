package com.leetcode;

public class WaterBetweenSlabs { // O(n) time | O(n) space
    // Calculate the amount of water between slabs
    public int solution(int[] height) {
        int[] runningLeftMax = new int[height.length];
        int[] runningRightMax = new int[height.length];
        for (int i = 0; i < runningLeftMax.length; i++) {
            if (i == 0) {
                runningLeftMax[i] = height[i];
            } else {
                runningLeftMax[i] = Math.max(height[i], runningLeftMax[i - 1]);
            }
        }

        int sum = 0;
        for (int i = runningRightMax.length - 1; i >= 0; i--) {
            if (i == runningRightMax.length - 1) {
                runningRightMax[i] = height[i];
            } else {
                runningRightMax[i] = Math.max(height[i], runningRightMax[i + 1]);
            }
            sum += Math.min(runningLeftMax[i], runningRightMax[i]) - height[i];
        }
        return sum;
    }
}
