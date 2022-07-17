package com.leetcode;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class LinkedListTest {
    @Test
    public void shouldDeleteLinkedListNode() {
        LinkedList linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        linkedList.push(4);

        assertTrue(linkedList.size == 4);
        Node deleted = linkedList.deleteNode(3);
        assertTrue(linkedList.size == 3);
        assertTrue(deleted.data == 3);
        linkedList.printList();

        deleted = linkedList.deleteNode(4);
        assertTrue(linkedList.size == 2);
        assertTrue(deleted.data == 4);
        linkedList.printList();
    }

    @Test
    public void shouldDeleteLinkedListNodeFromTail() {
        LinkedList linkedList = new LinkedList();
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        linkedList.push(4);

        assertTrue(linkedList.size == 4);
        Node deleted = linkedList.deleteNode(1);
        assertTrue(linkedList.size == 3);
        assertTrue(deleted.data == 1);
        linkedList.printList();
    }

    @Test
    public void shouldReverseLinkedListByKSubset() {
        LinkedList linkedList = new LinkedList();
        int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8 };
        for (int i = 0; i < arr.length; i++) {
            linkedList.push(arr[i]);
        }

        linkedList.reverse(linkedList.head, 3);
        linkedList.printList();
        assertTrue(linkedList.head.data == 6);
        assertTrue(linkedList.head.next.data == 7);
        assertTrue(linkedList.head.next.next.data == 8);
        assertTrue(linkedList.head.next.next.next.data == 3);
        assertTrue(linkedList.head.next.next.next.next.data == 4);
        assertTrue(linkedList.head.next.next.next.next.next.data == 5);
    }
}
