import { useState } from "react"

export default function Chat({ transcript }) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  const askAI = async () => {
    const res = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-base", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_HUGGINGFACE_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: `Transcript: ${transcript}\n\nQ: ${input}\nA:`
      })
    })
    const data = await res.json()
    const answer = data[0]?.generated_text || "No answer."
    setMessages([...messages, { q: input, a: answer }])
    setInput("")
  }

  return (
    <div className="w-full max-w-xl mt-6">
      <div className="space-y-2 mb-4">
        {messages.map((m, i) => (
          <div key={i}>
            <p className="font-semibold">Q: {m.q}</p>
            <p className="ml-4">A: {m.a}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 border rounded text-black"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={askAI} className="bg-blue-500 px-4 text-white rounded">
          Ask
        </button>
      </div>
    </div>
  )
}
