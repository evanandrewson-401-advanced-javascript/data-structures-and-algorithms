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
    if(!this.head) {
      this.head = newNode;
    } else {
      while(tail.next !== null) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
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
  valueAtEndMinusK(k) {
    let tail = this.head;
    let length = 1;
    let current = this.head;
    while(tail.next !== null) {
      tail = tail.next;
      length++;
    }
    if(k < 0 || k >= length) {
      throw new Error('k cannot be less than 0 or greater than or equal to the length of the list');
    } else {
      for(let i = 0; i< length - k - 1; i++) {
        current = current.next;
      }
    }
    return current.value;
  }
}

module.exports = { Node, LinkedList };