const assert = require('assert');
/* Design a stack that supports push, pop, top, and retrieving the minimum element
 in constant time.

push(x) --Push element x onto stack.
pop() --Removes the element on top of the stack.
top() --Get the top element.
getMin() --Retrieve the minimum element in the stack.
Example:
    MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();
-- > Returns - 3.
minStack.pop();
minStack.top();
-- > Returns 0.
minStack.getMin();
-- > Returns - 2.

*/

const MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (typeof x !== 'number') {
        return;
    }
    this.stack = this.stack.concat(x);
    if (this.minStack[this.minStack.length - 1] === undefined || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack = this.minStack.concat(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const popped = this.stack.pop();
    if (this.minStack[this.minStack.length - 1] !== undefined && this.minStack[this.minStack.length - 1] === popped) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1] ? this.minStack[this.minStack.length - 1] : null;
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
assert.equal(minStack.getMin(), -3);
// -- > Returns - 3.
minStack.pop();
assert.equal(minStack.top(), 0);
// -- > Returns 0.
assert.equal(minStack.getMin(), -2);
// // -- > Returns - 2.

const minStack2 = new MinStack();
minStack2.push(-2);
minStack2.push(0);
minStack2.push(-1);
assert.equal(minStack2.getMin(), -2);
// -- > Returns - 2.
minStack2.pop();
assert.equal(minStack2.top(), 0);
// -- > Returns 0.
assert.equal(minStack2.getMin(), -2);
// -- > Returns - 2.