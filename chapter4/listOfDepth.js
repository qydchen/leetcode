// Given a binary tree, design an algorithm which creates a linked list of all
// the nodes at each depth (if you have a tree with depth D, youll have D linked lists).
const { ans1, ans2, ans3, ans4, ans5 } = require('./minimalTree');

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  append(node) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  print() {
    this._print(this);
  }

  _print(node) {
    while (node !== null) {
      console.log(node.val);
      node = node.next;
    }
  }
}

function listOfDepths(node) {
  if (!node) return [];
  let lists = [];

  (function dfTraverse(node, level) {
    if (!node) return null;
    const currentList = lists[level];
    let {left, right} = node;

    if (currentList) {
      currentList.append(new ListNode(node.val));
    } else {
      lists.push(new ListNode(node.val));
    }

    dfTraverse(left, level + 1);
    dfTraverse(right, level + 1);
  })(node, 0)

  return lists;
}

const list0 = listOfDepths(null);
const list1 = listOfDepths(ans1);
// list1[0].print()
// list1[1].print()
// list1[2].print()
//       5
//    2     7
//  1   3  6  8
const list2 = listOfDepths(ans2);
//        5
//     3     7
//   2   4  6  8
// 1
// list2[0].print()
// list2[1].print()
// list2[2].print()
// list2[3].print()
const list3 = listOfDepths(ans3); // => [5]
// list3[0].print()
const list4 = listOfDepths(ans4);
//   6
// 4
// list4[0].print();
// list4[1].print();
const list5 = listOfDepths(ans5);
//   2
// 1   3
// list5[0].print();
// list5[1].print();
