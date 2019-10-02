const AnimalShelter = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');

describe('Animal shelter', () => {
  it('enqueue adds an animal to the front of the queue', () => {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue('dog');
    animalShelter.enqueue('dog');
    animalShelter.enqueue('cat');
    expect(animalShelter.front).toEqual({ value: 'dog', next: { value: 'dog', next: { value: 'cat', next: null }}})
  });
});