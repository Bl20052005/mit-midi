import * as Tone from "tone";

var Instruments = require("webaudio-instruments");
var player = new Instruments();

import { JZZ } from "jzz";
import { Tiny } from "jzz-synth-tiny";
Tiny(JZZ);

export const playAutoPiano = (instrument, midiData) => {
  // JZZ.synth
  //   .Tiny()
  //   .noteOn(0, "C5", 127)
  //   .wait(500)
  //   .noteOn(0, "E5", 127)
  //   .wait(500)
  //   .noteOn(0, "G5", 127)
  //   .wait(500)
  //   .noteOff(0, "C5")
  //   .noteOff(0, "E5")
  //   .noteOff(0, "G5");

  // midiData.map((data, i) => {
  //   let mid;
  //   if (data.name) {
  //     mid = Tone.Frequency(data.name).toMidi();
  //   } else {
  //     mid = data.midi;
  //   }
  //   player.play(
  //     0, // instrument: 24 is "Acoustic Guitar (nylon)"
  //     mid, // note: midi number or frequency in Hz (if > 127)
  //     0.5, // velocity: 0..1
  //     i * 0.01, // delay in seconds
  //     1 // duration in seconds
  //   );
  // });
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      let data = midiData[i];
      console.log(data);
      player.play(
        0, // instrument: 24 is "Acoustic Guitar (nylon)"
        50, // note: midi number or frequency in Hz (if > 127)
        0.5, // velocity: 0..1
        data.start, // delay in seconds
        1 // duration in seconds
      );
      player.play(
        0, // instrument: 24 is "Acoustic Guitar (nylon)"
        56, // note: midi number or frequency in Hz (if > 127)
        0.5, // velocity: 0..1
        data.start, // delay in seconds
        1 // duration in seconds
      );
      player.play(
        0, // instrument: 24 is "Acoustic Guitar (nylon)"
        53, // note: midi number or frequency in Hz (if > 127)
        0.5, // velocity: 0..1
        data.start, // delay in seconds
        1 // duration in seconds
      );
    }
  }

  //   const now = Tone.now();

  //   console.log(midiData, "mididata", midiData[0]);

  //   // Trigger C4, E4, G4 to simulate a chord
  //   let synth = new Tone.PolySynth(Tone.Synth).toDestination();
  //   midiData.map((note) => {
  //     synth.triggerAttackRelease(
  //       Tone.Frequency(note.name, "midi").toNote(),
  //       note.duration,
  //       now + note.start
  //     );
  //   });
  //   // synth.triggerAttackRelease("C4", "8n", now);
  //   // synth.triggerAttackRelease("E4", "8n", now + 0.5);
  //   // synth.triggerAttackRelease("G4", "8n", now + 1.0);
};
