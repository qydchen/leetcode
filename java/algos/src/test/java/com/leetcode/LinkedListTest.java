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
}
