const assert = require('assert')
const { noteToString, stringToNote } = require('../src/index')

describe('noteToString()', () => {
  it('returns c-1 from 0', () => {
    assert.equal(noteToString(0), 'c-1')
  })

  it('returns a0 from 21', () => {
    assert.equal(noteToString(21), 'a0')
  })

  it('returns f#2 from 42', () => {
    assert.equal(noteToString(42), 'f#2')
  })

  it('returns a#7 from 106', () => {
    assert.equal(noteToString(106), 'a#7')
  })
})

describe('stringToNote()', () => {
  it('returns 106 from a#7', () => {
    assert.equal(stringToNote('a#7'), 106)
  })
  it('returns 42 from f#2', () => {
    assert.equal(stringToNote('f#2'), 42)
  })
  it('returns 21 from a0', () => {
    assert.equal(stringToNote('a0'), 21)
  })
  it('returns 0 from c-1', () => {
    assert.equal(stringToNote('c-1'), 0)
  })
})
