import React, { useState, useEffect } from "react";
import { Player as MidiPlayer } from "midi-player-js";
import * as Tone from "tone";

const MidiPlayerComponent = ({ midiFileUrl }) => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentInstrument, setCurrentInstrument] = useState("Synth");

  const instrumentOptions = [
    "Synth",
    "AMSynth",
    "FMSynth",
    "MembraneSynth",
    "PluckSynth",
  ];

  useEffect(() => {
    const midiPlayer = new MidiPlayer(); // Correct usage here
    setPlayer(midiPlayer);

    fetch(midiFileUrl)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        midiPlayer.loadArrayBuffer(arrayBuffer);
      });

    midiPlayer.on("start", () => {
      Tone.start();
    });

    midiPlayer.on("midiEvent", (event) => {
      if (event.name === "Note on") {
        let synth;

        switch (currentInstrument) {
          case "AMSynth":
            synth = new Tone.AMSynth().toDestination();
            break;
          case "FMSynth":
            synth = new Tone.FMSynth().toDestination();
            break;
          case "MembraneSynth":
            synth = new Tone.MembraneSynth().toDestination();
            break;
          case "PluckSynth":
            synth = new Tone.PluckSynth().toDestination();
            break;
          default:
            synth = new Tone.Synth().toDestination();
            break;
        }

        const note = Tone.Frequency(event.noteName).toNote();
        synth.triggerAttackRelease(note, "8n");
      }
    });

    return () => {
      midiPlayer.stop();
    };
  }, [midiFileUrl, currentInstrument]);

  const handlePlayPause = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>

      <select
        onChange={(e) => setCurrentInstrument(e.target.value)}
        value={currentInstrument}
      >
        {instrumentOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MidiPlayerComponent;
