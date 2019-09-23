const binarySearch = require('../challenges/arrayBinarySearch/array-binary-search');

describe('Binary array search', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const searchTerm = 2;
  const notInArray = 7;

  it('finds the index of the search term if it\'s in the array', () => {
    expect(binarySearch(arr, searchTerm)).toBe(1);
  });
  it('returns -1 if the search term is not in the array', () => {
    expect(binarySearch(arr, notInArray)).toBe(-1);
  });
});