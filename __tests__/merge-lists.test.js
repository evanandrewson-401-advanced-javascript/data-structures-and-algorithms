const { LinkedList } = require('../challenges/linkedList/linked-list');
const mergeLists = require('../challenges/llMerge/ll-merge');

describe('linked list merge', () => {
  it('mergeLists merges lists of the same length', () => {
    const linkedList1 = new LinkedList();
    linkedList1.insert(3);
    linkedList1.insert(2);
    linkedList1.insert(1);
    const linkedList2 = new LinkedList();
    linkedList2.insert(3);
    linkedList2.insert(2);
    linkedList2.insert(1);
    const merged = mergeLists(linkedList1, linkedList2);
    expect(merged.head).toEqual({'value': 1, 'next': {'value': 1, 'next': {'value': 2, 'next': {'value': 2, 'next': {'value': 3, 'next': {'value': 3, 'next': null }}}}}});
  });
  it('mergeLists merges lists of different lengths', () => {
    const linkedList1 = new LinkedList();
    linkedList1.insert(4);
    linkedList1.insert(3);
    linkedList1.insert(2);
    linkedList1.insert(1);
    const linkedList2 = new LinkedList();
    linkedList2.insert(3);
    linkedList2.insert(2);
    linkedList2.insert(1);
    const merged = mergeLists(linkedList1, linkedList2);
    expect(merged.head).toEqual({'value': 1, 'next': {'value': 1, 'next': {'value': 2, 'next': {'value': 2, 'next': {'value': 3, 'next': {'value': 3, 'next': {'value': 4, 'next': null} }}}}}});
  });
});