package com.leetcode;

import java.util.HashMap;

// Given a 2-D String array of student-marks find the student with the highest average and output his average score. 
// If the average is in decimals, floor it down to the nearest integer.

// Example 1:

// Input:  [{"Bob","87"}, {"Mike", "35"},{"Bob", "52"}, {"Jason","35"}, {"Mike", "55"}, {"Jessica", "99"}]
// Output: 99
// Explanation: Since Jessica's average is greater than Bob's, Mike's and Jason's average.
public class BestAverageScore {
    static int solution(String[][] students) { // O(n) time | O(n) space where n is the total size of students
        HashMap<String, Grades> scores = new HashMap<>();
        for (String[] pair : students) {
            String name = pair[0];
            double grade = Double.parseDouble(pair[1]);
            if (scores.get(name) == null) {
                Grades g = new Grades();
                g.setCount(1);
                g.setScore(g.getScore() + grade);
                scores.put(name, g);
            } else {
                Grades g = scores.get(name);
                g.setCount(g.getCount() + 1);
                g.setScore(g.getScore() + grade);
            }
        }

        double largestAverage = 0;
        for (Grades grades : scores.values()) {
            largestAverage = Math.floor(Math.max(largestAverage, grades.getScore() / grades.getCount()));
        }
        return (int) largestAverage;
    }
}
