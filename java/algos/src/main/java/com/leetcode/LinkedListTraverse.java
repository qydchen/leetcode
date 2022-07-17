package com.leetcode;

// a. Design a linked list
// b. Traverse through it 
// 1. Iteratively
// 2. Recursively
public class LinkedListTraverse {
    Node head;
    public int size = 0;

    public void add(int val) {
        // O(1) time complexity | O(1) space complexity
        Node node = new Node(val);
        Node temp = this.head;
        this.head = node;
        node.next = temp;
        this.size++;
    }

    public int delete(int val) {
        // O(n) time complexity | O(1) space complexity
        if (this.head == null)
            return -1;
        Node prev = null;
        Node curr = this.head;
        while (curr.next != null) {
            if (curr.data == val) {
                if (prev != null) {
                    prev.next = curr.next;
                    curr.next = null;
                } else {
                    this.head = curr.next;
                }
                this.size--;
                return curr.data;
            }
            prev = curr;
            curr = curr.next;
        }
        return -1;
    }

    public void iterativeTraverse() {
        // O(n) time | O(1) space
        if (this.head == null)
            return;
        Node curr = this.head;
        while (curr.next != null) {
            System.out.print(curr.data + " ");
            curr = curr.next;
        }
    }

    public void recursiveTraverse() {
        // O(n) time | O(n) space
        this._recursiveTraverse(this.head);
    }

    private void _recursiveTraverse(Node node) {
        if (node == null)
            return;
        System.out.print(node.data + " ");
        this._recursiveTraverse(node.next);
    }
}
