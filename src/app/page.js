"use client";
import { useState } from "react";
import Header from "../components/Header"; // Adjust the path based on your project structure

export default function Home() {
  const [tempo, setTempo] = useState(120);

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-300">
      {/* Header */}
      <Header />

      {/* Main Grid */}
      <div className="flex-grow flex justify-center items-center">
        <div className="grid grid-cols-16 grid-rows-8 gap-1 bg-gray-500 p-4">
          {/* Here are example cells to match the image pattern. You can add more */}
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
      <div className="flex items-center justify-between bg-gray-700 p-4 text-white">
        {/* Left Controls */}
        <div className="flex space-x-4">
          <button className="text-blue-400">Sound</button>
          <button className="text-gray-400">Property</button>
        </div>

        {/* Tempo Control */}
        <div className="flex items-center space-x-2">
          <span>Tempo</span>
          <input
            type="range"
            min="60"
            max="180"
            value={tempo}
            onChange={(e) => setTempo(e.target.value)}
            className="bg-gray-600"
          />
          <span>{tempo} BPM</span>
        </div>

        {/* Right Controls */}
        <div className="flex space-x-4">
          <button className="text-gray-400">Settings</button>
          <button className="text-gray-400">Undo</button>
          <button className="text-gray-400">Save</button>
        </div>
      </div>
    </div>
  );
}
