import RemoveSelected from "./remove-selected";

async function RemoveAssistant(notes, setNotes, instructions = "") {
  let removed = RemoveSelected(notes, setNotes);
  let generatePrompt = `The following notes were removed:
    ${JSON.stringify(removed).slice(0, 2000)}
    they all had this format:
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
Further, you should aim to FULFIL the following instruction: ${instructions}, make sure that the notes generated are of approximately the same duration, pitch, but DIFFERENT ENOUGH to
not be the same exact piece of music.
Your output must contain this json formatted output and the json alone, under no circumstances should extra characters or confirmations be added.
Also make sure that the json outputted will be complete, and no curly braces, strings, or brackets remain hanging.
`;

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
  console.log("res", res);
  let mus = JSON.parse(res.result);
  let musx = JSON.parse(mus);
  console.log(mus, musx);

  setNotes((notes) => [
    ...notes,
    ...musx.map((m) => {
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

export default RemoveAssistant;
