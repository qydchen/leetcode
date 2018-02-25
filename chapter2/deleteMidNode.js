// Implement an algorithm to delete a node in the middle (i.e, any node but
// the first and last node, not necessarily the exact middle) of a singly linked
// list

function ListNode(val) {
  this.val = val;
  this.next = null;
  this.print = function(node) {
    while (node !== null) {
      console.log(node.val);
      node = node.next;
    }
  }
}

function deleteMidNode(node) {
  let slow = node;
  let fast = node;

  while (fast !== null && fast.next !== null) {
    if (fast.next.next === null) node.next = slow.next; // handles evens
    node = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  if (slow) node.next = slow.next; // handles odd
}

let head1 = new ListNode('a');
head1.next = new ListNode('b');
head1.next.next = new ListNode('c');
head1.next.next.next = new ListNode('d');

deleteMidNode(head1) // should delete node 'b'
head1.print(head1);

let head2 = new ListNode('a');
head2.next = new ListNode('b');
head2.next.next = new ListNode('c');
head2.next.next.next = new ListNode('d');
head2.next.next.next.next = new ListNode('e');

deleteMidNode(head2) // should delete node 'c'
head2.print(head2);

let head3 = null;
deleteMidNode(head3);

let head4 = new ListNode('a');
head4.next = new ListNode('b');
head4.next.next = new ListNode('c');
head4.next.next.next = new ListNode('d');
head4.next.next.next.next = new ListNode('e');
head4.next.next.next.next.next = new ListNode('f');
deleteMidNode(head4);
head4.print(head4);
