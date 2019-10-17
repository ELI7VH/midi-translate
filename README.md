# Midi Translate

## Features As Of Release 1.0.4

- Midi note number to english note string
- Midi note number to fundamental frequency
- English musical note to midi note number

# Concept

translate midi between different thingies - primarily for my personal use with tonejs

## TODO:

# ~~Milestone 1~~

- Midi Note Number <=> English Note String

# ~~Milestone 2~~

- note number to frequencies

# Milestone 3

- midi wrapper for incoming midi signals
- note string to frequencies helper

# Milestone 4

- add translations to non-english notes

Use:

```js
import { noteToString } from 'midi-translate'
let incomingNote = Midi.getNote('port1') // however you get midi notes, do that
let stringNote = noteNumberToString(incomingNote)
let noteFrequency = noteNumberToFrequency(incomingNote)
```
