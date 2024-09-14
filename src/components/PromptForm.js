import {useState} from "react";

export default function PromptForm({ onSubmit }) {

  const [prompt, setPrompt] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault();



      if (prompt == "") {
        return;
      }

      onSubmit(prompt)
      setPrompt("")
    }}>
      <label>Questions</label>
      <input type="text" value={prompt} onChange={e => {
        setPrompt(e.target.value)
      }}/>
      <input type="submit"/>
    </form>
  )
}