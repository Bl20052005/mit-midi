import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import QuantModal from "@/components/modal";
import {Input} from "@nextui-org/input";

export default function Home() {
  return (
    <div className=" min-h-screen min-w-[100%]">
      {/* <Button /> */}
      <main>
        <div className="bg-gray-300 h-screen flex flex-col">
          {/* Top section */}
          <div className="flex justify-between p-4">
            <QuantModal className="bg-blue-200">quantization / subdivision</QuantModal>
            <div className="bg-green-500 h-10 w-10 rounded-full"></div>
            <div className="text-center text-lg">
              <div className="bg-blue-900 w-64 h-4 mx-auto"></div>
              <p className="text-xs mt-1">999 bpm</p>
            </div>
            <div className="bg-red-500 h-10 w-10 rounded-full"></div>
          </div>

          {/* Main section */}
          <div className="flex-1 flex">
            {/* Left sidebar */}
            <div className="w-1/5 bg-purple-900 flex flex-col p-4 justify-between">
              <p className="text-white">AI assistant</p>
            </div>

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
