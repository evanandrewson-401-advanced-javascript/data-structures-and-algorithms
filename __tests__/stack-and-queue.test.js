const { Stack, Queue } = require('../challenges/stacksAndQueues/stacks-and-queues');

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
  });
  it('instantiates an empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toBeNull();
  });
  it('enqueues a single value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front).toEqual({ value: 1, next: null});
  });
  it('enqueues multiple values', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.front).toEqual({ value: 1, next: { value: 2, next: null}});
  });
  it('dequeues the front value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    const result = queue.dequeue();
    expect(result).toBe(1);
    expect(queue.front).toEqual({ value: 2, next: null});
  });
  it('dequeues all values to an empty queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull();
  });
  it('peek returns the value at the front of the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
  });
  it('instantiates an empty queue', () => {
    const queue = new Queue();
    expect(queue.front).toBeNull();
  });
});