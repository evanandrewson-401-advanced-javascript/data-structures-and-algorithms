const Stack = require('../challenges/stacksAndQueues/stacks-and-queues');

describe('stacks and queues', () => {
  it('pushes a single value to the top of the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.top).toEqual({ value: 1, next: null });
  });
  it('pushes multiple values to the top of the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.top).toEqual({ value: 2, next: { value: 1, next: null}});
  });
});