"use client";

import { IoMdSend } from "react-icons/io";
import { useState } from "react";
import { Input } from "@nextui-org/react";

function AIChat() {
  const [userConvo, setUserConvo] = useState("");
  const [response, setResponse] = useState("");
  const [music, setMusic] = useState(``);

  const [history, setHistory] = useState([]);

  async function post() {
    setHistory((history) => [...history, ["user", userConvo]]);
    let generatePrompt = `Based on the following music formatted like so:
    [
  {
    "name": [an integer, 0 - 127, be sure not exceed this range, and focus most of your answers outside the extremes],
    "duration": [a floating point value],
    "start": [a floating point value]
  },
  {
    //same as above...
  }
]
  here is the music:
  ${music}
  answer the following question comprehensively, your answer should revolve around creativity, composition, and useful tips in music and music production; also remember to keep your answers short and concise, only having long answers if the user requests it, and remember the limitations of this program, which is that it is manipulating MIDI: ${userConvo}`;

    const response = await fetch("/api/chatgpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: generatePrompt,
      }),
    });
    const res = await response.json();
    console.log(res);
    return res.result;
  }

  async function handleOnAISubmit(e) {
    e.preventDefault();
    const res = await post();
    setHistory((history) => [...history, ["ai", res]]);
  }

  return (
    <>
      <div>
        {history.map((msg, i) => {
          return (
            <div key={msg[1] + i}>
              {msg[0]} : {msg[1].replace(/\\n/g, '\n')}
            </div>
          );
        })}
      </div>
      <form onSubmit={(e) => handleOnAISubmit(e)}>
        <div>
          <Input label="Chat" placeholder="Ask questions about your music!" onChange={(e) => setUserConvo(e.target.value)}/>
        </div>
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
      {response}
    </>
  );
}

export default AIChat;
