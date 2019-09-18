const insertShiftArray = require('../challenges/array-shift/array-shift')

describe('function', () => {
    const arr = [1, 2, 3, 4];
    const value = 5;

    it('adds value to beginning of array', () => {
        expect(insertShiftArray(arr, value)).toEqual([5, 1, 2, 3, 4]);
    });
});