const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('multi bracket validation', () => {
  it('returns true for valid inputs', () => {
    expect(multiBracketValidation('{}')).toBeTruthy();
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
    expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
    expect(multiBracketValidation('{}{Code}[Fellows]')).toBeTruthy();
  });

  it('returns false for invalid inputs', () => {
    expect(multiBracketValidation('[({}]')).toBeFalsy();
    expect(multiBracketValidation('(](')).toBeFalsy();
    // expect(multiBracketValidation('{(})')).toBeFalsy();
  });
});