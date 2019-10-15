# Midi Translate

## concept

translate midi between different thingies - primarily for my personal use with tonejs

## TODO:

- strings to midi number note

# Milestone 1

- Midi Note Number <=> English Note String

# Milestone 2

- note number (and string) to frequencies

# Milestone 3

- add translations to non-english notes

# Milestone 4

- midi wrapper for incoming midi signals

Use:

```js
import { noteToString } from 'midi-translate'
let incomingNote = Midi.getNote('port1') // however you get midi notes, do that
let note = noteNumberToString(incomingNote)
```
