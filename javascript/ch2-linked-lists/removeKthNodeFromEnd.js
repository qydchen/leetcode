/*
    Implement a function that removes the kth node from the end from a linked list

    a -> b -> c -> d

    head = node 'a'
    
    removeKthNodeFromEnd(head, 2)
    a -> b -> c -> d
    0    1    2    3    
    remove the 2nd to last node, which is 'c'
*/

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeKthNodeFromEnd(head, k) {
    let behind = head;
    let ahead = head;
    let count = 0;
    while (count < k) {
        ahead = ahead.next;
        count++;
    }
    if (ahead === null) {
        head.value = head.next.value;
        head.next = head.next.next;
        return;
    }
    while (ahead.next !== null) {
        ahead = ahead.next;
        behind = behind.next;
    }
    behind.next = behind.next.next;
}

let head = new LinkedList("1");
head.next = new LinkedList("2");
head.next.next = new LinkedList("3");
head.next.next.next = new LinkedList("4");
head.next.next.next.next = new LinkedList("5");
head.next.next.next.next.next = new LinkedList("6");
head.next.next.next.next.next.next = new LinkedList("7");

const printList = (head) => {
    let curr = head;
    while (curr) {
        console.log(curr.value);
        curr = curr.next;
    }
};

console.log(removeKthNodeFromEnd(head, 3));
console.log(printList(head));
