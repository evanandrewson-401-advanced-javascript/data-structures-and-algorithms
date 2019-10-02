const PsuedoQueue = require('../challenges/queueWithStacks/queue-with-stacks');

describe('PsuedoQueue', () => {
  it('enqueue inserts value using first-in first-out', () => {
    const pseudoQueue = new PsuedoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    expect(pseudoQueue.outStack.top).toEqual({ value: 1, next: { value: 2, next: { value: 3, next: null }}});
  });
  it('dequeue extracts the first value out of the psuedoqueue', () => {

  });
});