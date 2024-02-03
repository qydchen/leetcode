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
var deleteDuplicates = function(head) {
  let sent = head;
  let deleted = sent;
  let curr = head;
  while (curr) {
      if (deleted.val !== curr.val) {
          deleted.next = curr;
          deleted = deleted.next;
      }
      curr = curr.next;
  }
  if (deleted?.next && deleted.val === deleted.next.val) {
      deleted.next = null;
  }
  return sent;
};