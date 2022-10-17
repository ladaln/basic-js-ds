const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  _arr = []

  push(element) {
    this._arr = this._arr.concat(element)
  }

  pop() {
    if(this._arr.length == 0) return undefined
    let res = this._arr[this._arr.length - 1]
    this._arr = this._arr.slice(0, this._arr.length - 1)
    return res
  }

  peek() {
    if(this._arr.length == 0) return undefined
    return this._arr[this._arr.length - 1]
  }
}

module.exports = {
  Stack
};
