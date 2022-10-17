const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  q = null;

  getUnderlyingList() {
    return this.q
  }

  enqueue(value) {
    let el = new ListNode(value)
    if(!this.q) {this.q = el; return}
    let last = this.q
    while(last.next) { last = last.next }
    last.next = el
  }

  dequeue() {
    let val = this.q.value
    this.q = this.q.next
    return val
  }
}

module.exports = {
  Queue
};
