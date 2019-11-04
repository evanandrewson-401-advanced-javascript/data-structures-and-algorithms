const { Hashtable } = require('../challenges/hashtable/hashtable');

describe('Hashtable', () => {
  it('successfully adds and retrieves a key value pair', () => {
    const hashTable = new Hashtable(20);
    hashTable.add('name', 'Evan');
    expect(hashTable.contains('name')).toBeTruthy();
    expect(hashTable.get('name')).toBe('Evan');
  });
  it('getting a key not in the hashtable returns null', () => {
    const hashTable = new Hashtable(20);
    expect(hashTable.get('name')).toBe(null);
  });
  it('get still works with collisions', () => {
    const hashTable = new Hashtable(20);
    hashTable.add('name', 'Evan');
    hashTable.add('mane', 'horse');
    expect(hashTable.contains('name')).toBeTruthy();
    expect(hashTable.get('name')).toBe('Evan');
    expect(hashTable.contains('mane')).toBeTruthy();
    expect(hashTable.get('mane')).toBe('horse');
  });
  it('hash creates an in value range', () => {
    const hashTable = new Hashtable(20);
    const index = hashTable.hash('abcdefghijklmnopqrstuvwxyz');
    expect(index < 20).toBeTruthy();
  });
});