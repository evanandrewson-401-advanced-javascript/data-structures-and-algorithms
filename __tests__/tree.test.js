const { BinarySearchTree } = require('../challenges/tree/tree');

describe('Binary Search Tree', () => {
  it('creates an empty tree', () => {
    const binarySearchTree = new BinarySearchTree();
    expect(binarySearchTree.root).toBeNull();
  });
  
  it('creates a tree with one root node', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(1);
    expect(binarySearchTree.root).toEqual({
      value: 1,
      left: null,
      right: null,
    });
  });

  it('can add a right and left node to root node', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    expect(binarySearchTree.root).toEqual({
      value: 2,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    });
  });

  it('preorder traversal', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    expect(binarySearchTree.preOrder(binarySearchTree.root)).toEqual([2, 1, 3]);
  });
});