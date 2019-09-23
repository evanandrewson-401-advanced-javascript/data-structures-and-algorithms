class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    return this.head; 
  }
  includes(value) {
    let current = this.head;
    while(current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }
  toString() {
    let current = this.head;
    let result = [];
    while(current) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(', ');
  }
}

module.exports = { Node, LinkedList };