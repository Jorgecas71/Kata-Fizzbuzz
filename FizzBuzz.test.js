import { describe, expect, it } from 'vitest';
import fizzbuzz from './FizzBuzz';
import { fizzbuzz } from './FizzBuzz';

describe.skip('FizzBuzz', () => {

    it.skip('if number divisible by 3 return Fizz', () => {
        const num = 3
        const expected = 'Fizz'
        const result = fizzbuzz(num)
        expect(result).toBeTypeOf('string')
        expect(result).toEqual(expected)
    });

});

it('number divisible by five should return<buzz>', () => {
    const num = 5
    const expected = 'Buzz'
    const result = fizzbuzz(num)
    expect(result).toBeTypeOf('string')
    expect(result).toEqual(expected)
});


it('number divisible by three and five should return<FizzBuzz>', () => {
    //Given
    const num = 15
    const expected = 'FizzBuzz'
    //when
    const result = fizzbuzz(num)
    //then
    expect(result).toBeTypeOf('string')
    expect(result).toEqual(expected)
});