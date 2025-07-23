import { useState } from 'react';

export default function Chat({ transcript }) {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const askAI = async () => {
    if (!transcript) {
      setResponse('Please load a video first.');
      return;
    }

    setResponse('Thinking...');

    // Simulate Hugging Face API call
    const answer = await fakeAI(transcript, question);
    setResponse(answer);
  };

  const fakeAI = async (context, question) => {
    return `Based on transcript "${context.slice(0, 30)}...", AI says: "${question}?" is interesting!`;
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
