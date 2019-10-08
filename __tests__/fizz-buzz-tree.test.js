const { BinarySearchTree } = require('../challenges/tree/tree');
const fizzBuzzTree = require('../challenges/fizzBuzzTree/fizz-buzz-tree');

describe('FizzBuzzTree', () => {
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.add(5);
  binarySearchTree.add(3);
  binarySearchTree.add(15);
  it('replaces values divisible with 3 with fizz, values divisible by 5 with buzz, and values divisible by both with FizzBuzz', () => {
    expect(fizzBuzzTree(binarySearchTree.root)).toEqual({
      value: 'Buzz',
      left: {
        value: 'Fizz',
        left: null,
        right: null,
      },
      right: {
        value: 'FizzBuzz',
        left: null,
        right: null,
      },
    });
  });
});