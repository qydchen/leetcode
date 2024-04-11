/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head == null || head.next == null) return head;
  let curr = head;
  let newHead = null;
  let prev = null;
  while (curr) {
    const [left, right] = swap(curr);
    if (prev) prev.next = left;
    prev = right;
    curr = right?.next;
    if (newHead === null) {
      newHead = left;
    }
  }
  return newHead;
};

const swap = (left) => {
  if (left == null) return left;
  let right = left.next;
  if (right) {
    let after = right.next;
    right.next = left;
    left.next = after;
    return [right, left];
  } else {
    return [left, null];
  }
};
