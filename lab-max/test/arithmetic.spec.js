// import greet from "../lib/greet.js";
let arithmetic = require('../lib/arithmetic.js');

describe('arithmetic module', () => {
  it('should return sum if passed numbers', () => {
    const expected = 3;
    const actual = arithmetic.add(1,2);
    expect(actual).toBe(expected);
  });

  it('should return null if passed non number', () => {
    const expected = null;
    const actual = arithmetic.add();
    expect(actual).toBe(expected);
  });

  it('should return null if passed non string', () => {
    const expected = null;
    const actual = arithmetic.add('hello');
    expect(actual).toBe(expected);
  });

  it('should return difference if passed numbers', () => {
    const expected = 1;
    const actual = arithmetic.sub(2,1);
    expect(actual).toBe(expected);
  });

  it('should return null if passed non number', () => {
    const expected = null;
    const actual = arithmetic.sub();
    expect(actual).toBe(expected);
  });

  it('should return null if passed a string', () => {
    const expected = null;
    const actual = arithmetic.sub('hello');
    expect(actual).toBe(expected);
  });

});