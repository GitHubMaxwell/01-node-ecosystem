let greet = require('../lib/greet.js');

describe('greet module', () => {
  it('should return null if passed non string', () => {
    const expected = null;
    const actual = greet(0);
    expect(actual).toBe(expected);
  });

  it('should return "hello world" if passed a string', () => {
    const expected = 'hello world';
    const actual = greet('hello world');
    expect(actual).toBe(expected);
  });
});