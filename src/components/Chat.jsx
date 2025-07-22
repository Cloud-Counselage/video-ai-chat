import React, { useState } from "react";

export default function Chat({ transcript }) {
  const [msgs, setMsgs] = useState([]);
  const [q, setQ] = useState("");

  const ask = async () => {
    const resp = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-small", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_HUGGINGFACE_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: `Transcript: ${transcript}\nQuestion: ${q}` })
    });
    const js = await resp.json();
    const answer = js[0]?.generated_text || "No answer.";
    setMsgs([...msgs, { q, a: answer }]);
    setQ("");
  };

  return (
    <div className="space-y-2">
      <div className="border p-2 h-40 overflow-y-auto bg-gray-100">
        {msgs.map((m,i)=><div key={i}><strong>You:</strong> {m.q}<br/><strong>AI:</strong> {m.a}</div>)}
      </div>
      <div className="flex gap-2">
        <input className="flex-grow border p-2" value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask about the video…" />
        <button onClick={ask} className="bg-blue-600 text-white px-4 py-2 rounded">Ask</button>
      </div>
    </div>
  );
}
