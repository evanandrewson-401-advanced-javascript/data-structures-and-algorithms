const { Node } = require('../linkedList/linked-list');

class AnimalShelter {
  constructor() {
    this.front = null;
  }
  enqueue(animal) {
    const newNode = new Node(animal, null);
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
  dequeue(pref) {
    let result;
    if(this.front.value) {
      result = this.front.value;
    } else {
      result = null;
    }
    if(this.front) {
      this.front = this.front.next;
    } else {
      this.front = null;
    }
    return result;
  }
}

module.exports = AnimalShelter;