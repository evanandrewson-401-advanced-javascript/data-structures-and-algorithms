const { BinarySearchTree } = require('../challenges/tree/tree');
const treeIntersection = require('../challenges/treeIntersection/tree-intersection');

describe('Tree intersection', () => {
  it('finds the intersection of two trees', () => {
    const firstTree = new BinarySearchTree();
    firstTree.add(5);
    firstTree.add(4);
    firstTree.add(6);
    firstTree.add(3);
    firstTree.add(2);
    firstTree.add(7);
    firstTree.add(8);

    const secondTree = new BinarySearchTree();
    secondTree.add(1);
    secondTree.add(2);
    secondTree.add(3);
    secondTree.add(4);
    secondTree.add(5);
    secondTree.add(6);
    secondTree.add(7);

    expect(treeIntersection(firstTree, secondTree)).toEqual([2, 3, 4, 5, 6, 7]);
  });
});