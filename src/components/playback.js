"use client";

import { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import { Midi } from "@tonejs/midi";
import UploadMidiFile from "./playback-p";

export default function SynthPiano() {
  const synth = useRef(null);
  const [midiData, setMidiData] = useState(null);

  //   useEffect(() => {
  //     // Create a PolySynth for playing multiple notes simultaneously
  //     synth = new Tone.PolySynth(Tone.Synth).toDestination();
  //   }, []);

  const playPiano = () => {
    if (!synth.current)
      synth.current = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();

    // Trigger C4, E4, G4 to simulate a chord
    midiData.map((note) => {
      synth.current.triggerAttackRelease(
        note.name,
        note.duration,
        now + note.start
      );
    });
    // synth.triggerAttackRelease("C4", "8n", now);
    // synth.triggerAttackRelease("E4", "8n", now + 0.5);
    // synth.triggerAttackRelease("G4", "8n", now + 1.0);
  };

  return (
    <div>
      <UploadMidiFile midiData={midiData} setMidiData={setMidiData} />
      <button onClick={() => Tone.start().then(playPiano)}>Play Piano</button>
      <button onClick={() => synth.current.releaseAll()}>stop</button>
    </div>
  );
}
