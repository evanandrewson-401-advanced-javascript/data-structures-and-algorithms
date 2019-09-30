const { Node } = require('../linkedList/linked-list');

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    const newNode = new Node(value, this.top);
    this.top = newNode;
    return this.top; 
  }
  pop() {
    let result;
    if(this.top.value) {
      result = this.top.value;
    } else {
      result = null;
    }
    if(this.top) {
      this.top = this.top.next;
    } else {
      this.top = null;
    }
    return result;
  }
  peek() {
    return this.top.value;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }
  enqueue(value) {
    const newNode = new Node(value, null);
    let tail = this.front;
    if(!this.front) {
      this.front = newNode;
    } else {
      while(tail.next !== null) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
    return this.front;
  }

}

module.exports = { Stack, Queue };