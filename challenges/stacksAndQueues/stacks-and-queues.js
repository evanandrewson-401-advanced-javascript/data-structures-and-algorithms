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
}

module.exports = Stack;