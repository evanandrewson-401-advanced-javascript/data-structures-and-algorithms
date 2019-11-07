const leftJoin = require('../challenges/leftJoin/left-join');

describe('hashmap left join', () => {
  it('performs a left join on two hashmaps', () => {
    const obj1 = {
      fond: 'enamored',
      wrath: 'anger',
      diligent: 'employed',
      outfit: 'garb',
      guide: 'usher',
    };
    const obj2 = {
      fond: 'averse',
      wrath: 'delight',
      diligent: 'idle',
      guide: 'follow',
      flow: 'jam',
    };
    const result = [
      ['fond', 'enamored', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow'],
    ];

    expect(leftJoin(obj1, obj2)).toEqual(result);
  });
});