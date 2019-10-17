const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']
const tuning = 400

const noteToString = noteNumber => {
  if (noteNumber % 1 !== 0) return false
  const octave = Math.floor((noteNumber - 12) / 12)
  return `${notes[noteNumber % 12]}${octave}`
}

const stringToNote = noteString => {
  for (let i in notes) {
    if (noteString.includes(notes[i])) {
      let note = parseInt(i)
      let octave

      const parsedRemainder = noteString.split(notes[i])[1]

      if (parsedRemainder.includes('#')) {
        octave = parseInt(parsedRemainder.split('#')[1])
        note += 1
      } else {
        octave = parseInt(parsedRemainder)
      }

      return note + 12 * octave + 12
    }
  }
  return -1
}

const noteToFrequency = noteNumber => {
  const a4hz = tuning
  const a4midi = 69

  return 2 ** ((noteNumber - a4midi) / 12) * 440
}

module.exports = { noteToString, stringToNote, noteToFrequency }
