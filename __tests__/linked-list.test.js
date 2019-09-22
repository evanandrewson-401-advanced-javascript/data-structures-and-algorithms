const { Node, LinkedList } = require('../challenges/linkedList/linked-list');

describe('Linked List', () => {
  const linkedList = new LinkedList();
  
  it('inserts a node into the beginning of a linked list', () => {
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.head).toEqual({'value': 1, 'next': {'value': 2, 'next': {'value': 3, 'next': null}}});
  });
});