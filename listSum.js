class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var addTwoNumbers = function(l1, l2) {
  var result = [];
  var resultArr = [];
  if (!l1) {
    l1 = new ListNode(0)
  }
  if (!l2) {
    l2 = new ListNode(0)
  }
  var firstVal = l1.val;
  var secondVal = l2.val;
  var sum = firstVal + secondVal;
  var numArr = String(sum).split("");
  var lastDigit = Number(numArr[numArr.length - 1]);
  result.push(lastDigit);
  var otherDigits = numArr.slice(0, numArr.length - 1).join("");
  if (l1.next) {
    l1.next.val = l1.next.val + Number(otherDigits);
    resultArr = addTwoNumbers(l1.next, l2.next);
  } else if (l2.next) {
    l2.next.val = l2.next.val + Number(otherDigits);
    resultArr = addTwoNumbers(l1.next, l2.next);
  } else if (otherDigits){
    resultArr = Number(otherDigits);
  }
  return result.concat(resultArr);
};


var one = new ListNode(2)
one.next = new ListNode(5)
one.next.next = new ListNode(3)

var two = new ListNode(2)
two.next = new ListNode(5)
two.next.next = new ListNode(3)
two.next.next.next = new ListNode(8)
two.next.next.next.next = new ListNode(9)

console.log(addTwoNumbers(one, two))

var five = new ListNode(5)
console.log(addTwoNumbers(five, five))
