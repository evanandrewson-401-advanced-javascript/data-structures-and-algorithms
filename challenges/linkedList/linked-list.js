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
  append(value) {
    const newNode = new Node(value, null);
    let tail = this.head;
    while(tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
    return this.head; 
  }
  insertBefore(value, newVal) {
    let current = this.head;
    let previous;
    while(current.value !== value) {
      previous = current;
      current = current.next;
    }
    const newNode = new Node(newVal, current);
    previous.next = newNode;
    return this.head;
  }
  insertAfter(value, newVal) {
    let current = this.head;
    while(current.value !== value) {
      current = current.next;
    }
    let next = current.next;
    const newNode = new Node(newVal, next);
    current.next = newNode;
    return this.head;
  }
}

module.exports = { Node, LinkedList };