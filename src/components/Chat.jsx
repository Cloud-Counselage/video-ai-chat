import { useState } from 'react';

export default function Chat() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const askAI = async () => {
    setResponse('Thinking...');
    // simulate AI response
    setTimeout(() => {
      setResponse(`AI says: "${question}?" is a great question!`);
    }, 1500);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Ask AI about the video</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex-1 p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
          placeholder="Type your question..."
        />
        <button
          onClick={askAI}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Ask
        </button>
      </div>
      {response && <p className="mt-4">{response}</p>}
    </div>
  );
}
