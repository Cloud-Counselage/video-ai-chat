import { useRef, useState } from 'react';

export default function VideoPlayer({ onTranscriptReady }) {
  const videoRef = useRef();
  const [videoSrc, setVideoSrc] = useState('');
  const [linkInput, setLinkInput] = useState('');

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const localURL = URL.createObjectURL(file);
      setVideoSrc(localURL);
      // Simulate transcript after upload
      simulateTranscript(file.name);
    }
  };

  const handleLink = () => {
    setVideoSrc(linkInput);
    simulateTranscript(linkInput);
  };

  const simulateTranscript = (source) => {
    // You’ll replace this with real whisper transcript call
    const fakeTranscript = `Transcript from ${source}... (simulated)`;
    onTranscriptReady(fakeTranscript);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Load a Video</h2>

      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <input
          type="file"
          accept="video/mp4,video/webm"
          onChange={handleUpload}
          className="bg-white dark:bg-gray-700 p-2 rounded"
        />

        <input
          type="text"
          value={linkInput}
          onChange={(e) => setLinkInput(e.target.value)}
          placeholder="Paste video link..."
          className="flex-1 bg-white dark:bg-gray-700 p-2 rounded"
        />
        <button
          onClick={handleLink}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Load
        </button>
      </div>

      {videoSrc && (
        <video
          ref={videoRef}
          controls
          className="w-full mt-4 rounded bg-black"
          src={videoSrc}
        />
      )}
    </div>
  );
}
