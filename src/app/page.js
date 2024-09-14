import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import QuantModal from "@/components/modal";
import { Input } from "@nextui-org/input";
import AiSideBar from "@/components/ai-assistant";
import { FaStop } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import SynthPiano from "@/components/playback";
import ShortcutModal from "@/components/shortcut-modal";

export default function Home() {
  return (
    <div className=" min-h-screen min-w-[100%]">
      <SynthPiano />
      <ShortcutModal />
      {/* <Button /> */}
      <main>
        <div className="bg-gray-300 h-screen flex flex-col">
          {/* Top section */}
          <div className="flex justify-between p-4">
            <QuantModal className="bg-blue-200">
              quantization / subdivision
            </QuantModal>
            <button className="bg-green-500 h-10 w-10 rounded-full flex justify-center items-center">
              <FaPlay className="fill-white" />
            </button>
            <button className="bg-red-500 h-10 w-10 rounded-full flex justify-center items-center">
              <FaStop className="fill-white" />
            </button>
          </div>

          {/* Main section */}
          <div className="flex-1 flex">
            {/* Left sidebar */}
            <AiSideBar />

            {/* Main content */}
            <div className="flex-1 bg-purple-900"></div>
          </div>

          {/* Bottom section */}
          <div className="bg-blue-900 p-4 text-white text-center">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="Email" label="Enter Your Prompt" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
