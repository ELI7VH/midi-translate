const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']
const tuning = 400

const noteToString = noteNumber => {
  if (noteNumber % 1 !== 0) return false
  const octave = Math.floor((noteNumber - 12) / 12)
  return `${notes[noteNumber % 12]}${octave}`
}

const stringToNote = noteString => {
  return -1
}

const noteToFrequency = noteNumber => {
  const a4hz = tuning
  const a4midi = 69
  
  return 2**((noteNumber-a4midi) / 12)*440

}

module.exports = { noteToString, stringToNote, noteToFrequency }
