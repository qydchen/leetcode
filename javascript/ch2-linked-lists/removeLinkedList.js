const removeElements = function(head, val) {
    if (head === null) return null;
    head.next = removeElements(head.next, val)
    return head.val === val ? head.next : head;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.removeElements = removeElements.bind(this, this.head);
  }

  append(node) {
    this._append(this.head, node);
  }

  _append(curNode, node) {
    if (curNode.next === null) {
      curNode.next = node;
      return node;
    } else {
      this._append(curNode.next, node);
    }
  }

  print() {
    this._print(this.head);
  }

  _print(node) {
    if (node) {
      console.log(node.val)
      this._print(node.next);
    }
  }
}

let list = new LinkedList(new Node('a'));
list.append(new Node('b'));
list.append(new Node('c'));
list.append(new Node('b'));
list.append(new Node('c'));
list.append(new Node('b'));
list.append(new Node('c'));
list.append(new Node('c'));
list.append(new Node('c'));
list.removeElements('c');
list.print();
