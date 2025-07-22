import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import VideoPlayer from "./components/VideoPlayer"
import Transcriber from "./components/Transcriber"
import Chat from "./components/Chat"

export default function App() {
  const [dark, setDark] = useState(false)
  const [videoUrl, setVideoUrl] = useState(null)
  const [transcript, setTranscript] = useState("")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    <div>
      <Navbar dark={dark} toggleDark={() => setDark(!dark)} />
      <main className="p-4 flex flex-col items-center">
        <VideoPlayer setVideoUrl={setVideoUrl} />
        <Transcriber videoUrl={videoUrl} setTranscript={setTranscript} />
        <Chat transcript={transcript} />
      </main>
    </div>
  )
}
