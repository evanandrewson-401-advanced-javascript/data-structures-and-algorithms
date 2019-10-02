const { Stack } = require('../stacksAndQueues/stacks-and-queues');
const { Node } = require('../linkedList/linked-list');

class PsuedoQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }
  enqueue(value) {
    this.inStack.push(value);
    let tail = this.outStack.top;
    if(!this.outStack.top) {
      this.outStack.push(this.inStack.pop());
      return this.outStack.top;
    } else {
      while(tail.next !== null) {
        tail = tail.next;
      }
      tail.next = new Node(this.inStack.pop(), null);
    }
    return this.outStack.top;
  }
  dequeue() {
    return this.outStack.pop();
  }
}

module.exports = PsuedoQueue;
