import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import QuantModal from "@/components/modal";
import {Input} from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import QuantModal from "@/components/modal";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import PromptForm from "@/components/PromptForm";

export default function Home() {
  const [tempo, setTempo] = useState(120);
  const [volume, setVolume] = useState(50); // New state for volume


  const [result, setResult] = useState(""); // Initially set result to an empty string

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-300">
      <Header />
      {/* <SynthPiano /> */}

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
      />
    </div>
  );
}
