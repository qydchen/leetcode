package com.leetcode;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

import org.junit.Test;

public class SumLinkedListTest {
    @Test
    public void test1() {
        SumLinkedList sum = new SumLinkedList();
        LinkedList<Integer> list1 = new LinkedList();
        list1.addAll(Arrays.asList(3, 4, 2));
        LinkedList<Integer> list2 = new LinkedList();
        list2.addAll(Arrays.asList(7, 7, 3));
        LinkedList<Integer> actual = sum.solution(list1, list2);
        LinkedList<Integer> expect = new LinkedList<>();
        expect.addAll(Arrays.asList(1, 1, 1, 5));
        assertEquals(expect, actual);
    }

    @Test
    public void test2() {
        SumLinkedList sum = new SumLinkedList();
        LinkedList<Integer> list1 = new LinkedList();
        list1.addAll(Arrays.asList(1, 4, 2));
        LinkedList<Integer> list2 = new LinkedList();
        list2.addAll(Arrays.asList(7, 7, 3));
        LinkedList<Integer> actual = sum.solution(list1, list2);
        LinkedList<Integer> expect = new LinkedList<>();
        expect.addAll(Arrays.asList(9, 1, 5));
        assertEquals(expect, actual);
    }

    @Test
    public void test3() {
        SumLinkedList sum = new SumLinkedList();
        LinkedList<Integer> list1 = new LinkedList();
        list1.addAll(Arrays.asList(1, 8));
        LinkedList<Integer> list2 = new LinkedList();
        list2.addAll(Arrays.asList(4));
        LinkedList<Integer> actual = sum.solution(list1, list2);
        LinkedList<Integer> expect = new LinkedList<>();
        expect.addAll(Arrays.asList(2, 2));
        assertEquals(expect, actual);
    }

    @Test
    public void test4() {
        SumLinkedList sum = new SumLinkedList();
        LinkedList<Integer> list1 = new LinkedList();
        list1.addAll(Arrays.asList(1, 8, 6));
        LinkedList<Integer> list2 = new LinkedList();
        list2.addAll(Arrays.asList(4));
        LinkedList<Integer> actual = sum.solution(list1, list2);
        LinkedList<Integer> expect = new LinkedList<>();
        expect.addAll(Arrays.asList(1, 9, 0));
        assertEquals(expect, actual);
    }
}
