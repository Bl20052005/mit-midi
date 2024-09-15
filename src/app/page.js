"use client";

import Image from "next/image";
// import QuantModal from "@/components/modal";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import PromptForm from "@/components/PromptForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AssistantServer from "@/components/ai-assistant-server";
import SynthPiano from "@/components/playback";
import AIChat from "@/components/ai-chat";
import MidiJsonEdit from "@/components/midi-json-edit";
import { playAutoPiano } from "@/components/instruments-test";
import InstrumentsDropdown from "@/components/instruments-dropdown";
import PianoRoll from "@/components/piano";
import ReplaceMidi from "@/components/replace-midi";
// import MidiPlayerComponent from "@/components/test";

export default function Home() {
  const [tempo, setTempo] = useState(120);
  const [volume, setVolume] = useState(50); // New state for volume
  const [notes, setNotes] = useState([]);

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-300">
      <Header />
      <AssistantServer notes={notes} setNotes={setNotes} />
      <SynthPiano notes={notes} setNotes={setNotes} />
      <AIChat notes={notes} />
      <ReplaceMidi notes={notes} setNotes={setNotes}/>
      {/* <InstrumentsDropdown /> */}
      <button
        onClick={() =>
          MidiJsonEdit(
            '[\n {"name": 72, "duration": 0.3, "start": 0.0},\n {"name": 74, "duration": 0.3, "start": 0.3},\n {"name": 76, "duration": 0.3, "start": 0.6},\n {"name": 72, "duration": 0.3, "start": 0.9},\n {"name": 74, "duration": 0.3, "start": 1.2},\n {"name": 76, "duration": 0.3, "start": 1.5},\n {"name": 73, "duration": 0.3, "start": 1.8},\n {"name": 75, "duration": 0.3, "start": 2.1},\n {"name": 77, "duration": 0.3, "start": 2.4},\n {"name": 73, "duration": 0.3, "start": 2.7},\n {"name": 75, "duration": 0.3, "start": 3.0},\n {"name": 77, "duration": 0.3, "start": 3.3},\n {"name": 73, "duration": 0.3, "start": 3.6},\n {"name": 75, "duration": 0.3, "start": 3.9},\n {"name": 77, "duration": 0.3, "start": 4.2},\n {"name": 71, "duration": 0.3, "start": 4.5},\n {"name": 73, "duration": 0.3, "start": 4.8},\n {"name": 75, "duration": 0.3, "start": 5.1},\n {"name": 71, "duration": 0.3, "start": 5.4},\n {"name": 73, "duration": 0.3, "start": 5.7},\n {"name": 75, "duration": 0.3, "start": 6.0},\n {"name": 71, "duration": 0.3, "start": 6.3},\n {"name": 73, "duration": 0.3, "start": 6.6},\n {"name": 75, "duration": 0.3, "start": 6.9},\n {"name": 71, "duration": 0.3, "start": 7.2},\n {"name": 73, "duration": 0.3, "start": 7.5},\n {"name": 75, "duration": 0.3, "start": 7.8},\n {"name": 71, "duration": 0.3, "start": 8.1},\n {"name": 73, "duration": 0.3, "start": 8.4},\n {"name": 75, "duration": 0.3, "start": 8.7},\n {"name": 71, "duration": 0.3, "start": 9.0},\n {"name": 73, "duration": 0.3, "start": 9.3},\n {"name": 75, "duration": 0.3, "start": 9.6},\n {"name": 71, "duration": 0.3, "start": 9.9}\n]',
            "please make it faster"
          )
        }
      >
        hoefrioihvfefhrpoeuofeqfhoeqrf
      </button>
      {/* <MidiPlayerComponent /> */}
      <PianoRoll notes={notes} setNotes={setNotes} />

      {/* Main Grid, add the piano UI here */}
      <div className="flex-grow flex justify-center items-center">
        <div className="grid grid-cols-16 grid-rows-8 gap-1 bg-gray-500 p-4">
          <div className="bg-blue-400 col-start-1 row-start-7"></div>
          <div className="bg-orange-400 col-start-2 row-start-6"></div>
          <div className="bg-yellow-400 col-start-3 row-start-5"></div>
          <div className="bg-green-400 col-start-4 row-start-4"></div>
          <div className="bg-blue-400 col-start-5 row-start-3"></div>
          <div className="bg-cyan-400 col-start-6 row-start-2"></div>
          <div className="bg-orange-400 col-start-7 row-start-3"></div>
          <div className="bg-green-400 col-start-8 row-start-4"></div>
          <div className="bg-yellow-400 col-start-9 row-start-5"></div>
          <div className="bg-cyan-400 col-start-10 row-start-2"></div>
          <div className="bg-green-400 col-start-11 row-start-7"></div>
          <div className="bg-blue-400 col-start-12 row-start-3"></div>
          <div className="bg-purple-400 col-start-13 row-start-8 col-span-3"></div>
        </div>
      </div>

      {/* Footer Controls */}
      <Footer
        tempo={tempo}
        setTempo={setTempo}
        volume={volume}
        setVolume={setVolume}
        notes={notes}
      />
    </div>
  );
}
