// invert a singly linked list

class LinkedNode {
  constructor(val = null) {
    this.val = val
    this.next = null;
  }

  link(node) {
    if (!this.next) {
      this.next = node;
    } else {
      this.next.link(node);
    }
  }

  print() {
    this._print(this);
  }

  _print(node) {
    console.log(node.val);
    if (node.next) {
      this._print(node.next);
    }
  }

  invert() {
    this._invert(this);
  }

  _invert(node) {
    console.log(node.val);
    if (node.next) {
      let copy = node.next;
      node.next.next = node;
      this._invert(copy);
    }
  }

}
// a -> b -> c -> d
// a <- b <- c <- d
const linkedHead = new LinkedNode('a');
linkedHead.link(new LinkedNode('b'));
linkedHead.next.link(new LinkedNode('c'));
linkedHead.next.next.link(new LinkedNode('d'));
linkedHead.invert();
// linkedHead.print();
