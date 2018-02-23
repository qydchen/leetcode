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
  let slow = null;
  let fast = node;

  while (fast !== null) {
    if (slow === null) {
      slow = node;
    } else {
      node = slow
      slow = slow.next;
    }
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      break;
    }
  }
  node.next = slow.next;
}

let head1 = new ListNode('a');
head1.next = new ListNode('b');
head1.next.next = new ListNode('c');
head1.next.next.next = new ListNode('d');

// deleteMidNode(head1) // should delete node 'b'
// head1.print(head1);

let head2 = new ListNode('a');
head2.next = new ListNode('b');
head2.next.next = new ListNode('c');
head2.next.next.next = new ListNode('d');
head2.next.next.next.next = new ListNode('e');

// deleteMidNode(head2) // should delete node 'c'
// head2.print(head2);
