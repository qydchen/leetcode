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

    // reverse linkedlist in k subset
    // 1->2->3->4->5->6->7->8->NULL k = 3
    // 3->2->1->6->5->4->8->7->NULL'
    public Node reverse(Node head, int k) { // O(n) time | O(n/k) space
        if (head == null) {
            return null;
        }
        Node curr = head;
        Node next = null;
        Node prev = null;

        int count = 0;

        while (count < k && curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            count += 1;
        }

        if (next != null) {
            head.next = this.reverse(next, k);
        }
        this.head = prev;
        return prev;
    }
}
