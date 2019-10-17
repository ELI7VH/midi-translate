const assert = require('assert')
const { noteToString, stringToNote, noteToFrequency } = require('../src/index')

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

describe('noteToFrequency', () => {
  it('returns 27.500 from 21', () => {
    assert.equal(noteToFrequency(21), 27.5)
  })
  it('returns 55.000 from 33', () => {
    assert.equal(noteToFrequency(33), 55)
  })
  it('returns 110.000 from 45', () => {
    assert.equal(noteToFrequency(45), 110)
  })
  it('returns 220.000 from 57', () => {
    assert.equal(noteToFrequency(57), 220)
  })
  it('returns 440.000 from 69', () => {
    assert.equal(noteToFrequency(69), 440)
  })
  it('returns 880.000 from 81', () => {
    assert.equal(noteToFrequency(81), 880)
  })
  it('returns 1760.000 from 93', () => {
    assert.equal(noteToFrequency(93), 1760)
  })
})

