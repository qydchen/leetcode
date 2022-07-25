package com.leetcode;

import java.util.Iterator;
import java.util.LinkedList;

// Given two integers represented as linked lists. Return their sum as a linked list.
// 1 - > 4 -> 2    +      7 -> 7 -> 3      =       9 -> 1 -> 5
public class SumLinkedList {
    public LinkedList<Integer> solution(LinkedList<Integer> list1, LinkedList<Integer> list2) {
        // O(n) time where n is the longest list
        // O(n) space where n is the longest list
        LinkedList<Integer> result = new LinkedList<>();
        Integer carry = 0;
        Iterator<Integer> one = list1.descendingIterator();
        Iterator<Integer> two = list2.descendingIterator();
        while (one.hasNext() || two.hasNext()) {
            Integer firstNum = !one.hasNext() ? 0 : one.next();
            Integer secondNum = !two.hasNext() ? 0 : two.next();
            Integer sum = firstNum + secondNum + carry;
            if (sum > 9) {
                carry = 1;
            } else {
                carry = 0;
            }
            sum = sum % 10;
            result.addFirst(sum);
        }
        if (carry == 1) {
            result.addFirst(carry);
        }
        return result;
    }
}
