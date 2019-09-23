const { LinkedList } = require('../challenges/linkedList/linked-list');

describe('Linked List', () => {
  const linkedList = new LinkedList();
  linkedList.insert(3);
  linkedList.insert(2);
  linkedList.insert(1);
  
  it('inserts a node into the beginning of a linked list', () => {
    expect(linkedList.head).toEqual({'value': 1, 'next': {'value': 2, 'next': {'value': 3, 'next': null}}});
  });
  it('.includes returns true if the linked list has a value', () => {
    expect(linkedList.includes(3)).toBe(true);
  });
  it('.includes returns false if the linked list doesn\'t have a value', () => {
    expect(linkedList.includes(4)).toBe(false);
  });
  it('toString returns a string of all the values in the linked list', () => {
    expect(linkedList.toString()).toBe('1, 2, 3');
  });
});