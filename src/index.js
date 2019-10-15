const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']

const noteToString = noteNumber => {
  if (noteNumber % 1 !== 0) return false
  const octave = Math.floor((noteNumber - 12) / 12)
  return `${notes[noteNumber % 12]}${octave}`
}

const stringToNote = noteString => {
  return -1
}

module.exports = { noteToString, stringToNote }
