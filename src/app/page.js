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
// import MidiPlayerComponent from "@/components/test";

export default function Home() {
  const [tempo, setTempo] = useState(120);
  const [volume, setVolume] = useState(50); // New state for volume

  const [result, setResult] = useState(""); // Initially set result to an empty string

  const [notes, setNotes] = useState([]);

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-300">
      <Header />
      <AssistantServer notes={notes} setNotes={setNotes} />
      <SynthPiano notes={notes} setNotes={setNotes}/>
      <AIChat notes={notes} />
      <InstrumentsDropdown />
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
      <button
        onClick={() =>
          playAutoPiano(0, [
            {
              name: "G4",
              duration: 0.2065971395833333,
              start: 0.4166665,
            },
            {
              name: "C5",
              duration: 0.20659713958333337,
              start: 0.62499975,
            },
            {
              name: "E5",
              duration: 0.20659713958333314,
              start: 0.833333,
            },
            {
              name: "G4",
              duration: 0.20659713958333326,
              start: 1.04166625,
            },
            {
              name: "C5",
              duration: 0.20659713958333326,
              start: 1.2499995,
            },
            {
              name: "E5",
              duration: 0.20659713958333326,
              start: 1.45833275,
            },
            {
              name: "G4",
              duration: 0.20659713958333326,
              start: 2.0833325,
            },
            {
              name: "C5",
              duration: 0.20659713958333326,
              start: 2.29166575,
            },
            {
              name: "E5",
              duration: 0.2065971395833337,
              start: 2.499999,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 2.7083322499999998,
            },
            {
              name: "C5",
              duration: 0.20659713958333326,
              start: 2.9166655,
            },
            {
              name: "E5",
              duration: 0.20659713958333326,
              start: 3.12499875,
            },
            {
              name: "A4",
              duration: 0.2065971395833337,
              start: 3.7499985,
            },
            {
              name: "D5",
              duration: 0.2065971395833328,
              start: 3.95833175,
            },
            {
              name: "F5",
              duration: 0.2065971395833337,
              start: 4.166665,
            },
            {
              name: "A4",
              duration: 0.2065971395833337,
              start: 4.37499825,
            },
            {
              name: "D5",
              duration: 0.2065971395833337,
              start: 4.5833315,
            },
            {
              name: "F5",
              duration: 0.2065971395833337,
              start: 4.79166475,
            },
            {
              name: "A4",
              duration: 0.2065971395833337,
              start: 5.4166644999999995,
            },
            {
              name: "D5",
              duration: 0.2065971395833328,
              start: 5.62499775,
            },
            {
              name: "F5",
              duration: 0.2065971395833328,
              start: 5.833331,
            },
            {
              name: "A4",
              duration: 0.2065971395833328,
              start: 6.04166425,
            },
            {
              name: "D5",
              duration: 0.2065971395833337,
              start: 6.2499975,
            },
            {
              name: "F5",
              duration: 0.2065971395833337,
              start: 6.45833075,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 7.0833305,
            },
            {
              name: "D5",
              duration: 0.2065971395833337,
              start: 7.29166375,
            },
            {
              name: "F5",
              duration: 0.2065971395833337,
              start: 7.499997,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 7.7083302499999995,
            },
            {
              name: "D5",
              duration: 0.2065971395833337,
              start: 7.9166635,
            },
            {
              name: "F5",
              duration: 0.2065971395833337,
              start: 8.12499675,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 8.7499965,
            },
            {
              name: "D5",
              duration: 0.20659713958333192,
              start: 8.95832975,
            },
            {
              name: "F5",
              duration: 0.2065971395833337,
              start: 9.166663,
            },
            {
              name: "G4",
              duration: 0.20659713958333192,
              start: 9.37499625,
            },
            {
              name: "D5",
              duration: 0.2065971395833337,
              start: 9.5833295,
            },
            {
              name: "F5",
              duration: 0.2065971395833337,
              start: 9.79166275,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 10.4166625,
            },
            {
              name: "C5",
              duration: 0.2065971395833337,
              start: 10.62499575,
            },
            {
              name: "E5",
              duration: 0.2065971395833337,
              start: 10.833328999999999,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 11.04166225,
            },
            {
              name: "C5",
              duration: 0.20659713958333192,
              start: 11.2499955,
            },
            {
              name: "E5",
              duration: 0.2065971395833337,
              start: 11.45832875,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 12.0833285,
            },
            {
              name: "C5",
              duration: 0.2065971395833337,
              start: 12.29166175,
            },
            {
              name: "E5",
              duration: 0.2065971395833337,
              start: 12.499995,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 12.70832825,
            },
            {
              name: "C5",
              duration: 0.2065971395833337,
              start: 12.9166615,
            },
            {
              name: "E5",
              duration: 0.2065971395833337,
              start: 13.124994749999999,
            },
            {
              name: "A4",
              duration: 0.20659713958333192,
              start: 13.7499945,
            },
            {
              name: "E5",
              duration: 0.20659713958333192,
              start: 13.95832775,
            },
            {
              name: "A5",
              duration: 0.20659713958333192,
              start: 14.166661,
            },
            {
              name: "A4",
              duration: 0.20659713958333192,
              start: 14.37499425,
            },
            {
              name: "E5",
              duration: 0.20659713958333192,
              start: 14.5833275,
            },
            {
              name: "A5",
              duration: 0.20659713958333192,
              start: 14.79166075,
            },
            {
              name: "A4",
              duration: 0.20659713958333192,
              start: 15.416660499999999,
            },
            {
              name: "E5",
              duration: 0.20659713958333192,
              start: 15.62499375,
            },
            {
              name: "A5",
              duration: 0.20659713958333015,
              start: 15.833327,
            },
            {
              name: "A4",
              duration: 0.2065971395833337,
              start: 16.04166025,
            },
            {
              name: "E5",
              duration: 0.2065971395833337,
              start: 16.2499935,
            },
            {
              name: "A5",
              duration: 0.20659713958333015,
              start: 16.45832675,
            },
            {
              name: "F#4",
              duration: 0.2065971395833337,
              start: 17.0833265,
            },
            {
              name: "A4",
              duration: 0.20659713958333015,
              start: 17.29165975,
            },
            {
              name: "D5",
              duration: 0.20659713958333015,
              start: 17.499993,
            },
            {
              name: "F#4",
              duration: 0.2065971395833337,
              start: 17.70832625,
            },
            {
              name: "A4",
              duration: 0.20659713958333015,
              start: 17.9166595,
            },
            {
              name: "D5",
              duration: 0.20659713958333015,
              start: 18.12499275,
            },
            {
              name: "F#4",
              duration: 0.20659713958333015,
              start: 18.7499925,
            },
            {
              name: "A4",
              duration: 0.20659713958333015,
              start: 18.95832575,
            },
            {
              name: "D5",
              duration: 0.2065971395833337,
              start: 19.166659,
            },
            {
              name: "F#4",
              duration: 0.2065971395833337,
              start: 19.37499225,
            },
            {
              name: "A4",
              duration: 0.20659713958333015,
              start: 19.5833255,
            },
            {
              name: "D5",
              duration: 0.20659713958333015,
              start: 19.79165875,
            },
            {
              name: "G4",
              duration: 0.20659713958333015,
              start: 20.4166585,
            },
            {
              name: "D5",
              duration: 0.2065971395833337,
              start: 20.62499175,
            },
            {
              name: "G5",
              duration: 0.2065971395833337,
              start: 20.833325,
            },
            {
              name: "G4",
              duration: 0.20659713958333015,
              start: 21.04165825,
            },
            {
              name: "D5",
              duration: 0.20659713958333015,
              start: 21.2499915,
            },
            {
              name: "G5",
              duration: 0.2065971395833337,
              start: 21.45832475,
            },
            {
              name: "G4",
              duration: 0.20659713958333015,
              start: 22.0833245,
            },
            {
              name: "D5",
              duration: 0.2065971395833337,
              start: 22.29165775,
            },
            {
              name: "G5",
              duration: 0.20659713958333015,
              start: 22.499991,
            },
            {
              name: "G4",
              duration: 0.20659713958333015,
              start: 22.70832425,
            },
            {
              name: "D5",
              duration: 0.2065971395833337,
              start: 22.9166575,
            },
            {
              name: "G5",
              duration: 0.2065971395833337,
              start: 23.12499075,
            },
            {
              name: "E4",
              duration: 0.2065971395833337,
              start: 23.7499905,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 23.958323749999998,
            },
            {
              name: "C5",
              duration: 0.20659713958333015,
              start: 24.166657,
            },
            {
              name: "E4",
              duration: 0.20659713958333015,
              start: 24.37499025,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 24.5833235,
            },
            {
              name: "C5",
              duration: 0.20659713958333015,
              start: 24.79165675,
            },
            {
              name: "E4",
              duration: 0.2065971395833337,
              start: 25.4166565,
            },
            {
              name: "G4",
              duration: 0.20659713958333015,
              start: 25.62498975,
            },
            {
              name: "C5",
              duration: 0.20659713958333015,
              start: 25.833323,
            },
            {
              name: "E4",
              duration: 0.2065971395833337,
              start: 26.04165625,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 26.249989499999998,
            },
            {
              name: "C5",
              duration: 0.20659713958333015,
              start: 26.45832275,
            },
            {
              name: "E4",
              duration: 0.2065971395833337,
              start: 27.0833225,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 27.29165575,
            },
            {
              name: "C5",
              duration: 0.2065971395833337,
              start: 27.499989,
            },
            {
              name: "E4",
              duration: 0.20659713958333725,
              start: 27.70832225,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 27.9166555,
            },
            {
              name: "C5",
              duration: 0.2065971395833337,
              start: 28.12498875,
            },
            {
              name: "E4",
              duration: 0.2065971395833337,
              start: 28.7499885,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 28.95832175,
            },
            {
              name: "C5",
              duration: 0.20659713958333725,
              start: 29.166655,
            },
            {
              name: "E4",
              duration: 0.2065971395833337,
              start: 29.37498825,
            },
            {
              name: "G4",
              duration: 0.2065971395833337,
              start: 29.5833215,
            },
            {
              name: "C5",
              duration: 0.2065971395833337,
              start: 29.79165475,
            },
            {
              name: "D4",
              duration: 0.2065971395833337,
              start: 30.4166545,
            },
            {
              name: "F#4",
              duration: 0.20659713958333725,
              start: 30.62498775,
            },
            {
              name: "C5",
              duration: 0.20659713958333725,
              start: 30.833320999999998,
            },
            {
              name: "D4",
              duration: 0.2065971395833337,
              start: 31.04165425,
            },
            {
              name: "F#4",
              duration: 0.2065971395833337,
              start: 31.2499875,
            },
            {
              name: "C5",
              duration: 0.20659713958333725,
              start: 31.45832075,
            },
            {
              name: "D4",
              duration: 0.20659713958333725,
              start: 32.0833205,
            },
            {
              name: "F#4",
              duration: 0.20659713958333015,
              start: 32.29165375,
            },
            {
              name: "C5",
              duration: 0.20659713958333725,
              start: 32.499987,
            },
            {
              name: "D4",
              duration: 0.20659713958333725,
              start: 32.70832025,
            },
            {
              name: "F#4",
              duration: 0.20659713958333015,
              start: 32.9166535,
            },
            {
              name: "C5",
              duration: 0.20659713958333725,
              start: 33.12498675,
            },
            {
              name: "D4",
              duration: 0.20659713958333725,
              start: 33.7499865,
            },
            {
              name: "G4",
              duration: 0.20659713958333015,
              start: 33.95831975,
            },
            {
              name: "B4",
              duration: 0.20659713958333725,
              start: 34.166653,
            },
            {
              name: "D4",
              duration: 0.20659713958333725,
              start: 34.37498625,
            },
            {
              name: "G4",
              duration: 0.20659713958333015,
              start: 34.5833195,
            },
            {
              name: "B4",
              duration: 0.20659713958333725,
              start: 34.79165275,
            },
            {
              name: "D4",
              duration: 0.20659713958333725,
              start: 35.4166525,
            },
            {
              name: "G4",
              duration: 0.20659713958333725,
              start: 35.62498575,
            },
            {
              name: "B4",
              duration: 0.20659713958333015,
              start: 35.833319,
            },
            {
              name: "D4",
              duration: 0.20659713958333725,
              start: 36.04165225,
            },
            {
              name: "G4",
              duration: 0.20659713958333015,
              start: 36.2499855,
            },
            {
              name: "B4",
              duration: 0.20659713958333725,
              start: 36.45831875,
            },
            {
              name: "E4",
              duration: 0.20659713958333725,
              start: 37.0833185,
            },
            {
              name: "G4",
              duration: 0.20659713958333725,
              start: 37.29165175,
            },
            {
              name: "C#5",
              duration: 0.20659713958333015,
              start: 37.499985,
            },
            {
              name: "E4",
              duration: 0.20659713958333725,
              start: 37.70831825,
            },
            {
              name: "G4",
              duration: 0.20659713958333725,
              start: 37.9166515,
            },
            {
              name: "C#5",
              duration: 0.20659713958333015,
              start: 38.12498475,
            },
            {
              name: "E4",
              duration: 0.20659713958333725,
              start: 38.7499845,
            },
            {
              name: "G4",
              duration: 0.20659713958333725,
              start: 38.95831775,
            },
            {
              name: "C#5",
              duration: 0.20659713958333015,
              start: 39.166651,
            },
            {
              name: "E4",
              duration: 0.20659713958333725,
              start: 39.37498425,
            },
            {
              name: "G4",
              duration: 0.20659713958333725,
              start: 39.5833175,
            },
            {
              name: "C#5",
              duration: 0.20659713958333015,
              start: 39.79165075,
            },
            {
              name: "D4",
              duration: 0.20659713958333015,
              start: 40.4166505,
            },
            {
              name: "A4",
              duration: 0.20659713958333725,
              start: 40.62498375,
            },
            {
              name: "D5",
              duration: 0.20659713958333015,
              start: 40.833317,
            },
            {
              name: "D4",
              duration: 0.20659713958333725,
              start: 41.041650249999996,
            },
            {
              name: "A4",
              duration: 0.20659713958333725,
              start: 41.2499835,
            },
            {
              name: "D5",
              duration: 0.20659713958333015,
              start: 41.45831675,
            },
            {
              name: "D4",
              duration: 0.20659713958333015,
              start: 42.0833165,
            },
            {
              name: "A4",
              duration: 0.20659713958333725,
              start: 42.29164975,
            },
            {
              name: "D5",
              duration: 0.20659713958333725,
              start: 42.499983,
            },
            {
              name: "D4",
              duration: 0.20659713958333015,
              start: 42.70831625,
            },
            {
              name: "A4",
              duration: 0.20659713958333725,
              start: 42.9166495,
            },
            {
              name: "D5",
              duration: 0.20659713958333015,
              start: 43.12498275,
            },
            {
              name: "D4",
              duration: 0.20659713958333015,
              start: 43.7499825,
            },
            {
              name: "F4",
              duration: 0.20659713958333725,
              start: 43.95831575,
            },
            {
              name: "B4",
              duration: 0.20659713958333725,
              start: 44.166649,
            },
            {
              name: "D4",
              duration: 0.20659713958333015,
              start: 44.37498225,
            },
            {
              name: "F4",
              duration: 0.20659713958333725,
              start: 44.5833155,
            },
            {
              name: "B4",
              duration: 0.20659713958333725,
              start: 44.79164875,
            },
            {
              name: "D4",
              duration: 0.20659713958333015,
              start: 45.4166485,
            },
            {
              name: "F4",
              duration: 0.20659713958333725,
              start: 45.624981749999996,
            },
            {
              name: "B4",
              duration: 0.20659713958333725,
              start: 45.833315,
            },
            {
              name: "D4",
              duration: 0.20659713958333015,
              start: 46.04164825,
            },
            {
              name: "F4",
              duration: 0.20659713958333725,
              start: 46.2499815,
            },
            {
              name: "B4",
              duration: 0.20659713958333725,
              start: 46.45831475,
            },
            {
              name: "C4",
              duration: 0.20659713958333725,
              start: 47.0833145,
            },
            {
              name: "G4",
              duration: 0.20659713958333015,
              start: 47.29164775,
            },
            {
              name: "C5",
              duration: 0.20659713958333725,
              start: 47.499981,
            },
            {
              name: "C4",
              duration: 0.20659713958333015,
              start: 47.70831425,
            },
            {
              name: "G4",
              duration: 0.20659713958333725,
              start: 47.916647499999996,
            },
            {
              name: "C5",
              duration: 0.20659713958333725,
              start: 48.12498075,
            },
            {
              name: "C4",
              duration: 0.20659713958333725,
              start: 48.7499805,
            },
            {
              name: "G4",
              duration: 0.20659713958333015,
              start: 48.95831375,
            },
            {
              name: "C5",
              duration: 0.20659713958333725,
              start: 49.166647,
            },
            {
              name: "C4",
              duration: 0.20659713958333725,
              start: 49.37498025,
            },
            {
              name: "G4",
              duration: 0.20659713958333015,
              start: 49.5833135,
            },
            {
              name: "C5",
              duration: 0.20659713958333725,
              start: 49.79164675,
            },
            {
              name: "A3",
              duration: 0.20659713958333725,
              start: 50.4166465,
            },
            {
              name: "C4",
              duration: 0.20659713958333015,
              start: 50.62497975,
            },
            {
              name: "F4",
              duration: 0.20659713958333725,
              start: 50.833313,
            },
            {
              name: "A3",
              duration: 0.20659713958333725,
              start: 51.04164625,
            },
            {
              name: "C4",
              duration: 0.20659713958333015,
              start: 51.2499795,
            },
            {
              name: "F4",
              duration: 0.20659713958333725,
              start: 51.45831275,
            },
            {
              name: "A3",
              duration: 0.20659713958333725,
              start: 52.0833125,
            },
            {
              name: "C4",
              duration: 0.20659713958333015,
              start: 52.29164575,
            },
            {
              name: "F4",
              duration: 0.20659713958333725,
              start: 52.499978999999996,
            },
            {
              name: "A3",
              duration: 0.20659713958333725,
              start: 52.70831225,
            },
            {
              name: "C4",
              duration: 0.20659713958333015,
              start: 52.9166455,
            },
            {
              name: "F4",
              duration: 0.20659713958333725,
              start: 53.12497875,
            },
            {
              name: "A3",
              duration: 0.20659713958333725,
              start: 53.7499785,
            },
            {
              name: "C4",
              duration: 0.20659713958333725,
              start: 53.95831175,
            },
            {
              name: "F4",
              duration: 0.20659713958333015,
              start: 54.166645,
            },
            {
              name: "A3",
              duration: 0.20659713958333725,
              start: 54.37497825,
            },
            {
              name: "C4",
              duration: 0.20659713958333015,
              start: 54.5833115,
            },
            {
              name: "F4",
              duration: 0.20659713958333725,
              start: 54.791644749999996,
            },
          ])
        }
      >
        frbruoetitg
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
