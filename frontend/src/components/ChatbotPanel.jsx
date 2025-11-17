import React, { useState } from 'react';
import { queryChatbot } from '../utils/api';

export default function ChatbotPanel() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    setLoading(true);
    try {
      const res = await queryChatbot(prompt);
      setResponse(res?.response || JSON.stringify(res));
    } catch (err) {
      setResponse('Error querying chatbot');
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside className="chatbot-panel">
      <h3>AI travel assist (chatbot)</h3>
      <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Ask questions" />
      <button onClick={handleAsk} disabled={loading}>Ask</button>
      <div className="chat-response">{response}</div>
    </aside>
  );
}
