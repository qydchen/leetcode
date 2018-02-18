// invert a singly linked list
// ES5 function style

function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList(head) {
  this.head = head;

  this.append = function(node) {
    this._append(this.head, node);
  }

  this._append = function(curNode, node) {
    if (curNode.next === null) {
      curNode.next = node;
    } else {
      this._append(curNode.next, node);
    }
  }

  this.print = function() {
    this._print(this.head);
  }

  this._print = function(node) {
    if (node) {
      console.log(node.val);
      this._print(node.next);
    }
  }

  this.invert = function() {
    if (this.head === null) {
      return;
    }
    this._invert(this.head, null);
  }

  this._invert = function(curr, prev) {
    if (curr.next === null) {
      this.head = curr;
      curr.next = prev;
      return;
    }
    let {next} = curr;
    curr.next = prev;
    this._invert(next, curr);
  }

}

let list = new LinkedList(new Node('a'));
list.append(new Node('a'));
list.append(new Node('b'));
list.append(new Node('c'));
list.invert();
list.print();
// a a b c
// c b a a
