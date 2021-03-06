'use strict';

const PseudoQueue = require('../queue-with-stacks');

let queue;

beforeEach(() => {
  queue = new PseudoQueue();
});

describe('Test PseudoQueue', () => {

  it('can successfully instantiate an empty queue', () => {
    expect(queue).toBeTruthy();
  });

  it('returns null when attempting to dequeue an empty queue', () => {
    expect(queue.dequeue()).toBeNull();
  });

  it('can successfully enqueue and dequeue a value with a queue', () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
  });

  it('can successfully enqueue and dequeue multiple values with a queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
  });

});
