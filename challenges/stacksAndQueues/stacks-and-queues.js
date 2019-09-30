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
}

module.exports = Stack;