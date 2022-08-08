package com.leetcode;

public class TreeNodeLC {
    int val;
    TreeNodeLC left;
    TreeNodeLC right;

    TreeNodeLC() {
    }

    TreeNodeLC(int val) {
        this.val = val;
    }

    TreeNodeLC(int val, TreeNodeLC left, TreeNodeLC right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}