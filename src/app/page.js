import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="bg-gray-300 h-screen flex flex-col">
          {/* Top section */}
          <div className="flex justify-between items-center p-4">
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
              <button className="bg-blue-900 text-white py-2">
                quantization / subdivision
              </button>
              <p className="text-white">AI assistant</p>
            </div>

            {/* Main content */}
            <div className="flex-1 bg-purple-900"></div>
          </div>

          {/* Bottom section */}
          <div className="bg-blue-900 p-4 text-white text-center">
            <p>need help?</p>
            <p className="text-xs">(will give possible suggestions)</p>
          </div>
        </div>
      </main>
    </div>
  );
}
