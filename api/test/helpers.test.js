const assert = require('chai').assert
const { getCleanedString } = require('../helpers/helpers')

describe('getCleanedString method', () => {
  it('should return "hola" when passed "Hola"', () => {
    assert.equal(getCleanedString('Hola mundo'), 'holamundo')
  })

  it('should return "empty"  when passed ""', () => {
    assert.equal(getCleanedString(''), 'empty')
  })

  it('should return Error message when passed a no string argument', () => {
    assert.Throw(() => getCleanedString(1), 'No estring argument')
  })

  it('should return a strieng when passed a string argument', () => {
    assert.typeOf(getCleanedString('Hola mundo'), 'string')
  })
})
