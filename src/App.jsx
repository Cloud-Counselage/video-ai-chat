import React, { useState } from "react";
import Transcriber from "./components/Transcriber";
import VideoPlayer from "./components/VideoPlayer";
import Chat from "./components/Chat";

export default function App() {
  const [file, setFile] = useState(null);
  const [src, setSrc] = useState("");
  const [transcript, setTranscript] = useState("");

  const handleFile = e => {
    const f = e.target.files[0];
    setFile(f);
    setSrc(URL.createObjectURL(f));
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Video‑AI Chat</h1>
      <input type="file" accept="video/*" onChange={handleFile} />
      {src && <VideoPlayer src={src} />}
      {file && !transcript && <Transcriber file={file} onTranscript={setTranscript} />}
      {transcript && <Chat transcript={transcript} />}
    </div>
  );
}
