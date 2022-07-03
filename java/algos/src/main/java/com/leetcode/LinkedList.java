package com.leetcode;

// Delete a node from a linked list optimally
public class LinkedList {
    Node head;
    int size;

    public Node deleteNode(int val) { // O(N) time | O(1) space
        Node curr = head;
        Node prev = null;
        while (curr != null) {
            if (curr.data == val) {
                Node temp = curr;
                if (prev != null) {
                    prev.next = curr.next;
                } else {
                    head = curr.next;
                }
                temp.next = null;
                size -= 1;
                return temp;
            }
            prev = curr;
            curr = curr.next;
        }
        return null;
    }

    public void push(int val) {
        Node newNode = new Node(val);
        newNode.next = head;
        head = newNode;
        size += 1;
    }

    public void printList() {
        Node curr = head;
        while (curr != null) {
            System.out.print(curr.data + " ");
            curr = curr.next;
        }
        System.out.println(' ');
    }
}
