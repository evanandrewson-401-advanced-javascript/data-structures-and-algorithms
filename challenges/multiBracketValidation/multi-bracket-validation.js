const { Stack } = require('../stacksAndQueues/stacks-and-queues');

module.exports = function multiBracketValidation(str) {
  const stack = new Stack();
  const openingBrackets = ['[', '{', '('];
  const closingBrackets = [']', '}', ')'];
  const strArray = str.split('');
  let result;
  let matchingBracket;
  
  strArray.forEach(char => {
    if(closingBrackets.indexOf(char) > -1) {
      matchingBracket = openingBrackets[closingBrackets.indexOf(char)];
      const top = stack.pop();
      if(stack.top === null || top != matchingBracket) {
        result = false;
      }
    }
    if(openingBrackets.indexOf(char) > -1) {
      stack.push(char);
    }
  });
  console.log(stack.top);
  if(stack.top === null) {
    result = true;
  } else {
    result = false;
  }
  return result;
};


