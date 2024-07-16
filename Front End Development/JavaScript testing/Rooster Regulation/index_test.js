const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('return a rooster call', () => {
      //setup
      const expected = 'cock-a-doodle-doo!';

      //Exercise
      const result = Rooster.announceDawn();

      //Verify
      assert.equal(expected, result);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //setup
      const expected = '5';
      
      //exercise
      const result = Rooster.timeAtDawn(5);

      //Verify
      assert.strictEqual(expected, result);
    });
    it('throws an error if passed a number less than 0', () => {
      //setup
      const hour = -1;

      //Verify
      assert.throws( () => 
      { 
        Rooster.timeAtDawn(hour); 
        }, RangeError
        );
    });
    it('throws an error if passed a number greater than 23', () => {
      //setup
      const hour = 24;

      //Verify
      assert.throws( () => 
      { 
        Rooster.timeAtDawn(hour); 
        }, RangeError
        );
    })
  })
});
