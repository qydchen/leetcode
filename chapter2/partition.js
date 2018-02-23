// Write code to partition a linked list around a value x, such that all
// nodes less than x come before all nodes greater than or equal to x. If
// x is contained within the list, the values of x only need to be after the
// elements less than x (see below). The partition element x can appear anywhere
// 'right partitions'; it does not need to appear between the left and
// right partitions


// REVIEW THIS
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  print(node) {
    let current = node;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

function partition(node, num) {
  let beforeStart = null
  let beforeEnd = null
  let afterStart = null
  let afterEnd = null

  while (node !== null) {
    let {next} = node;
    node.next = null;
    if (node.val < num) {
      if (!beforeStart) {
        beforeStart = node;
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = node;
        beforeEnd = node;
      }
    } else {
      if (!afterStart) {
        afterStart = node
        afterEnd = afterStart;
      } else {
        afterEnd.next = node;
        afterEnd = node;
      }
    }
    node = next;
  }
  if (!beforeStart) {
    return afterStart;
  }
  beforeEnd.next = afterStart;
  return beforeStart;
}

let head = new ListNode(3);
head.next = new ListNode(5);
head.next.next = new ListNode(8);
head.next.next.next = new ListNode(5);
head.next.next.next.next = new ListNode(10);
head.next.next.next.next.next = new ListNode(2);
head.next.next.next.next.next.next = new ListNode(1);

let list = partition(head, 6)
list.print(list)
