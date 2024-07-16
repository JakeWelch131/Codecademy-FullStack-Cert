var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('tests if the output of 5! is equal to 120.', () => {
    //setup
    const expectedResult = 120;
    //exercise
    let result = Calculate.factorial(5);
    //verify
    assert.equal(expectedResult, result);
    });

    it('tests if the output of 3! is equal to 6.', () => {
    //setup
    const expectedResult = 6;
    //exercise
    let result = Calculate.factorial(3);
    //verify
    assert.equal(expectedResult, result);
    });

    it('tests if the output of 0! is equal to 1.', () => {
    //setup
    const expectedResult = 1;
    //exercise
    let result = Calculate.factorial(0);
    //verify
    assert.equal(expectedResult, result);
    });
  });
});
