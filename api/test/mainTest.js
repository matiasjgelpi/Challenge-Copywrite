const assert = require("chai").assert;
const { getCleanedString } = require("../helpers/helpers");

describe("getCleanedString", () => {
  it('should return "hola" when passed "Hola"', () => {
    assert.equal(getCleanedString("Hola mundo"), "holamundo");
  });

  it('should return "empty"  when passed ""', () => {
    assert.equal(getCleanedString(""), "empty");
  })

  it('shoul return Error message when passed a no string argument', () => {
    assert.Throw(() => getCleanedString(1), "No estring argument");
  })
});
