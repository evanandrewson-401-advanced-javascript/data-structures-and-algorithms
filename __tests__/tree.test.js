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

  it('inorder traversal', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    expect(binarySearchTree.inOrder(binarySearchTree.root)).toEqual([1, 2, 3]);
  });

  it('postorder traversal', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);
    expect(binarySearchTree.postOrder(binarySearchTree.root)).toEqual([1, 3, 2]);
  });

  it('breadth first traversal', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(5);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    binarySearchTree.add(3);
    binarySearchTree.add(2);
    binarySearchTree.add(7);
    binarySearchTree.add(8);
    expect(binarySearchTree.breadthFirst(binarySearchTree.root)).toEqual([5, 4, 6, 3, 7, 2, 8]);
  });

  it('finds the maximum value in the tree', () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(5);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    binarySearchTree.add(3);
    binarySearchTree.add(2);
    binarySearchTree.add(7);
    binarySearchTree.add(8);
    expect(binarySearchTree.findMaximumValue(binarySearchTree.root, 0)).toBe(8);
  });
});