"use client";

import { Input } from "@nextui-org/react";
import RemoveAssistant from "./remove-assistant";
import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";

function ReplaceMidi({notes, setNotes}) {
  const [msg, setMsg] = useState("");

  function handleSubmit() {
    console.log("senddddrgreg")
    RemoveAssistant(notes, setNotes, msg);
    setMsg("");
  }

  return (
    <div className=" ml-[300px]">
      <p>Do you need any assistance with the selected parts?</p>
      <textarea onChange={(e) => setMsg(e.target.value)}></textarea>
      <button onClick={handleSubmit}>
        <IoSendSharp />
      </button>
    </div>
  );
}

export default ReplaceMidi;
