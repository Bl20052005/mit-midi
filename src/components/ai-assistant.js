"use client";

import { IoMdSend } from "react-icons/io";
import MultiSelect from "./multi-select";
import { useState } from "react";
import { playAutoPiano } from "./playback";

function AiSideBar({ post }) {
  const options = [
    { value: "Happy", label: "Happy" },
    { value: "Sad", label: "Sad" },
    { value: "Surprised", label: "Surprised" },
    { value: "Angry", label: "Angry" },
    { value: "Calming", label: "Calming" },
    { value: "Moody", label: "Moody" },
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [details, setDetails] = useState("");
  const [response, setResponse] = useState("");
  const [music, setMusic] = useState("");

  async function handleOnAISubmit(e) {
    e.preventDefault();
    console.log(
      details,
      selectedOptions.map((option) => option.value),
      music
    );
    const res = await post(details, selectedOptions, music);
    setResponse(res);
    let mus = JSON.parse(res);
    let musx = JSON.parse(mus)
    playAutoPiano(musx);
  }

  return (
    <>
      <form onSubmit={(e) => handleOnAISubmit(e)}>
        <div>
          <p>whats ur mood</p>
          <MultiSelect
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            options={options}
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
