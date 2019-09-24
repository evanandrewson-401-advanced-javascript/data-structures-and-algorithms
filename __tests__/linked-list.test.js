const { LinkedList } = require('../challenges/linkedList/linked-list');

describe('Linked List', () => {
  it('inserts a node into the beginning of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.head).toEqual({'value': 1, 'next': {'value': 2, 'next': {'value': 3, 'next': null}}});
  });
  it('.includes returns true if the linked list has a value', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.includes(3)).toBe(true);
  });
  it('.includes returns false if the linked list doesn\'t have a value', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.includes(4)).toBe(false);
  });
  it('toString returns a string of all the values in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.toString()).toBe('1, 2, 3');
  });
  it('append adds node to end of list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    linkedList.append(5);
    expect(linkedList.head).toEqual({'value': 1, 'next': {'value': 2, 'next': {'value': 3, 'next': {'value': 5, 'next': null }}}});
  });
  it('insertBefore adds node before a value', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    linkedList.insertBefore(2, 5);
    expect(linkedList.head).toEqual({'value': 1, 'next': {'value': 5, 'next': {'value': 2, 'next': {'value': 3, 'next': null }}}});
  });
  it('insertAfter adds node after a value', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    linkedList.insertAfter(1, 5);
    expect(linkedList.head).toEqual({'value': 1, 'next': {'value': 5, 'next': {'value': 2, 'next': {'value': 3, 'next': null }}}});
  });
  it('valueAtEndMinusK where k is greater than the length of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(() => {
      linkedList.valueAtEndMinusK(5);
    }).toThrow();
  });
  it('valueAtEndMinusK where k and the length of the list are the same', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(() => {
      linkedList.valueAtEndMinusK(3);
    }).toThrow();
  });
  it('valueAtEndMinusK where k is not a positive integer', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(() => {
      linkedList.valueAtEndMinusK(-3);
    }).toThrow();
  });
  it('valueAtEndMinusK where the linked list is of a size 1', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    expect(linkedList.valueAtEndMinusK(0)).toBe(1);
  });
  it('valueAtEndMinusK where k is somewhere in the middle of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.valueAtEndMinusK(2)).toBe(1);
  });
});