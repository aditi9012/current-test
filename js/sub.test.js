const sub = require('./sub')
test('properly adds two numbers',()=>{
    expect(sub(2,2)).toBe(0)
    expect(sub(0,0)).toBe(0)
    expect(sub(-9,9)).toBe(-18)
    expect(sub(NaN,NaN)).toBe(NaN)
})