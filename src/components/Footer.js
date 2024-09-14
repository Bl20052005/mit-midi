export default function Footer({ tempo, setTempo, volume, setVolume }) {
  return (
    <div className="flex items-center justify-between bg-gray-700 p-4 text-white">
      {/* Left Controls */}
      <div className="flex space-x-4">
        <button className="text-blue-400">Sound</button>
        <button className="text-gray-400">Property</button>
      </div>

      {/* Tempo and Volume Controls */}
      <div className="flex items-center space-x-6">
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

        {/* Volume Control */}
        <div className="flex items-center space-x-2">
          <span>Volume</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="bg-gray-600"
          />
          <span>{volume}%</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex space-x-4">
        <button className="text-gray-400">Settings</button>
        <button className="text-gray-400">Undo</button>
        <button className="text-gray-400">Save</button>
      </div>
    </div>
  );
}
