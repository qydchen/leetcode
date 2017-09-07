class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let addTwoNumbers = function(l1, l2) {
  let result = [];
  let resultArr = [];
  l1 = l1 ? l1 : new ListNode(0);
  l2 = l2 ? l2 : new ListNode(0);
  let sum = l1.val + l2.val;
  result.push(sum % 10);
  let carry = Math.floor(sum / 10);
  if (l1.next) {
    l1.next.val = l1.next.val + carry;
    resultArr = addTwoNumbers(l1.next, l2.next);
  } else if (l2.next) {
    l2.next.val = l2.next.val + carry;
    resultArr = addTwoNumbers(l1.next, l2.next);
  } else if (carry) {
    resultArr = [carry];
  }
  return result.concat(resultArr);
};


let one = new ListNode(2)
one.next = new ListNode(5)
one.next.next = new ListNode(3)

let two = new ListNode(2)
two.next = new ListNode(5)
two.next.next = new ListNode(3)
two.next.next.next = new ListNode(8)
two.next.next.next.next = new ListNode(9)

console.log(addTwoNumbers(one, two))

let five = new ListNode(5)
console.log(addTwoNumbers(five, five))
