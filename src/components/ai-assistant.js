"use client";

import { IoMdSend } from "react-icons/io";
import MultiSelect from "./multi-select";
import { useState } from "react";
import { playAutoPiano } from "./playback";

function AiSideBar({ post, notes, setNotes }) {
  const options = [
    { value: "Happy", label: "Happy" },
    { value: "Sad", label: "Sad" },
    { value: "Surprised", label: "Surprised" },
    { value: "Angry", label: "Angry" },
    { value: "Calming", label: "Calming" },
    { value: "Moody", label: "Moody" },
  ];
  const genre_options = [
    { value: "Pop", label: "Pop" },
    { value: "Classical", label: "Classical" },
    { value: "Rock", label: "Rock" },
    { value: "R&B", label: "R&B" },
    { value: "Lofi", label: "Lofi" },
    { value: "Jazz", label: "Jazz" },
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [details, setDetails] = useState("");
  const [response, setResponse] = useState("");
  const [music, setMusic] = useState(
    '[\n {"name": 60, "duration": 0.25, "start": 0.0},\n {"name": 62, "duration": 0.25, "start": 0.25},\n {"name": 64, "duration": 0.25, "start": 0.5},\n {"name": 60, "duration": 0.25, "start": 0.75},\n {"name": 62, "duration": 0.25, "start": 1.0},\n {"name": 64, "duration": 0.25, "start": 1.25},\n {"name": 60, "duration": 0.25, "start": 1.5},\n {"name": 62, "duration": 0.25, "start": 1.75},\n {"name": 64, "duration": 0.25, "start": 2.0},\n {"name": 65, "duration": 0.25, "start": 2.25},\n {"name": 67, "duration": 0.25, "start": 2.5},\n {"name": 65, "duration": 0.25, "start": 2.75},\n {"name": 67, "duration": 0.25, "start": 3.0},\n {"name": 65, "duration": 0.25, "start": 3.25},\n {"name": 67, "duration": 0.25, "start": 3.5},\n {"name": 65, "duration": 0.25, "start": 3.75},\n {"name": 67, "duration": 0.25, "start": 4.0},\n {"name": 60, "duration": 0.25, "start": 4.25},\n {"name": 62, "duration": 0.25, "start": 4.5},\n {"name": 64, "duration": 0.25, "start": 4.75},\n {"name": 60, "duration": 0.25, "start": 5.0},\n {"name": 62, "duration": 0.25, "start": 5.25},\n {"name": 64, "duration": 0.25, "start": 5.5},\n {"name": 60, "duration": 0.25, "start": 5.75},\n {"name": 62, "duration": 0.25, "start": 6.0},\n {"name": 64, "duration": 0.25, "start": 6.25},\n {"name": 65, "duration": 0.25, "start": 6.5},\n {"name": 67, "duration": 0.25, "start": 6.75},\n {"name": 65, "duration": 0.25, "start": 7.0},\n {"name": 67, "duration": 0.25, "start": 7.25},\n {"name": 65, "duration": 0.25, "start": 7.5},\n {"name": 67, "duration": 0.25, "start": 7.75},\n {"name": 65, "duration": 0.25, "start": 8.0},\n {"name": 67, "duration": 0.25, "start": 8.25},\n {"name": 60, "duration": 0.25, "start": 8.5},\n {"name": 62, "duration": 0.25, "start": 8.75},\n {"name": 64, "duration": 0.25, "start": 9.0},\n {"name": 60, "duration": 0.25, "start": 9.25},\n {"name": 62, "duration": 0.25, "start": 9.5},\n {"name": 64, "duration": 0.25, "start": 9.75},\n {"name": 60, "duration": 0.25, "start": 10.0}\n]'
  );

  async function handleOnAISubmit(e) {
    e.preventDefault();
    console.log(
      details,
      selectedOptions.map((option) => option.value),
      music
    );
    const res = await post(
      details,
      [...selectedGenres, ...selectedOptions],
      JSON.stringify(
        notes?.map((note) => {
          return {
            midi: note.pitch,
            start: note.start,
            duration: note.duration,
          };
        })
      )
    );
    setResponse(res);
    let mus = JSON.parse(res);
    let musx = JSON.parse(mus);
    playAutoPiano(musx);
    setNotes((notes) => [
      ...notes,
      ...musx.map((m) => {
        console.log(m);
        return {
          duration: m.duration,
          id: Math.floor(Math.random() * 10000000),
          pitch: m.name,
          start: m.start,
          selected: false,
        };
      }),
    ]);
  }

  return (
    <>
      <form
        onSubmit={(e) => handleOnAISubmit(e)}
        className=" absolute top-[200px]"
      >
        <div>
          <p>Pick a mood!</p>
          <MultiSelect
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            options={options}
            name={"mood"}
          />
        </div>
        <div>
          <p>Pick a Genre!</p>
          <MultiSelect
            selectedOptions={selectedGenres}
            setSelectedOptions={setSelectedGenres}
            options={genre_options}
            name={"genre"}
          />
        </div>
        <div>
          <p>more specifics</p>
          <textarea
            className="w-[200px] h-[500px]"
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>
        <div></div>
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
      {response}
    </>
  );
}

export default AiSideBar;
