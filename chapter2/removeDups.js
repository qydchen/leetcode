// Write code to remove duplicates from an unsorted linked list.
// with set, O(n) time using a set
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  printNode(node) {
    if (node !== null) {
      console.log(node.val);
      this.printNode(node.next);
    }
  }
}

function removeDups(head) {
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


let head = new ListNode('a');
head.next = new ListNode('a');
head.next.next = new ListNode('a');
head.next.next.next = new ListNode('a');
head.next.next.next.next = new ListNode('b');
head.next.next.next.next.next = new ListNode('b');
removeDups(head);
head.printNode(head);
