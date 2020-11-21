const { expect } = require('@jest/globals')
const { number } = require('yargs')
const sum = require('./sum')
test('properly adds two numbers',()=>{
    expect(sum(2,2)).toBe(4)
    expect(sum(0,0)).toBe(0)
    expect(sum(-9,9)).toBe(0)
    expect(sum(NaN,NaN)).toBe(NaN)
})