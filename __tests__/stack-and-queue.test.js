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
  it('pop removes the node from the top of the stack and returns its value', () => {
    const stack = new Stack();
    stack.push(1);
    const result = stack.pop();
    expect(result).toEqual(1);
    expect(stack.top).toBeNull();
  });
  it('multiple pops gives empty stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });
  it('peek returns the value of the top of the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
  })
});