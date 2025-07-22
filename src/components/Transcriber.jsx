import React, { useEffect } from "react";
import createModule from "@transcribe/shout";
import { FileTranscriber } from "@transcribe/transcriber";

export default function Transcriber({ file, onTranscript }) {
  useEffect(() => {
    async function run() {
      const t = new FileTranscriber({ createModule, model: "/ggml-tiny.en-q5_1.bin" });
      await t.init();
      const res = await t.transcribe(file);
      onTranscript(res.transcription.map(s => s.text).join(" "));
    }
    run();
  }, [file]);
  return <div>Transcribing… please wait (might take 1–2 min)</div>;
}
