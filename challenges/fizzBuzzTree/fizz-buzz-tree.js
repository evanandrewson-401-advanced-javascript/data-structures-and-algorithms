function fizzBuzzTree(root) {
  if(root.value % 15 === 0) {
    root.value = 'FizzBuzz';
  } else if(root.value % 5 === 0) {
    root.value = 'Buzz';
  } else if(root.value % 3 === 0) {
    root.value = 'Fizz';
  }
  if(root.left !== null) {
    fizzBuzzTree(root.left);
  }
  if(root.right !== null) {
    fizzBuzzTree(root.right);
  }
  return root;
}

module.exports = fizzBuzzTree;