// Write code to remove duplicates from a sorted linked list.

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  printNode(node) {
    while (node !== null) {
      console.log(node.val);
      node = node.next;
    }
  }
}

//Solution 1 with set, O(n) time, O(n) space using a set
function removeDups1(head) {
  let set = new Set();
  let prev = null;
  while (head !== null) {
    if (set.has(head.val)) {
      prev.next = head.next;
    } else {
      set.add(head.val);
      prev = head;
    }
    head = head.next;
  }
}

//Solution 2 without set, O(n) time, O(1) space
function removeDups2(head) {
  while (head !== null) {
    let runner = head;
    while (runner.next !== null) {
      if (runner.next.val === head.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    head = head.next;
  }
}

let head = new ListNode('a');
head.next = new ListNode('a');
head.next.next = new ListNode('a');
head.next.next.next = new ListNode('a');
head.next.next.next.next = new ListNode('b');
head.next.next.next.next.next = new ListNode('b');
head.next.next.next.next.next.next = new ListNode('c');
removeDups1(head);
removeDups2(head);
head.printNode(head);
