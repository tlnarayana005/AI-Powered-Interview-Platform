import { ChangeEvent, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';

const socket = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000', { transports: ['websocket'] });

export default function InterviewRoom() {
  const { id } = useParams();
  const [code, setCode] = useState('// Start coding here');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (!id) return;
    socket.emit('join-room', { roomId: id, userId: 'candidate' });
    socket.on('code-update', ({ code: newCode }: { code: string }) => setCode(newCode));
    socket.on('chat-message', ({ message }: { message: string }) => setMessages((prev) => [...prev, message]));

    return () => {
      socket.off('code-update');
      socket.off('chat-message');
    };
  }, [id]);

  const handleCodeChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
    socket.emit('code-update', { roomId: id, code: event.target.value });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <section className="rounded-3xl bg-white p-6 shadow-soft">
        <h1 className="text-2xl font-semibold">Interview room</h1>
        <p className="mt-2 text-slate-600">Live coding session and candidate collaboration view.</p>
        <textarea
          className="mt-4 h-[500px] w-full rounded-3xl border border-slate-200 bg-slate-950 p-4 text-white"
          value={code}
          onChange={handleCodeChange}
        />
      </section>
      <aside className="rounded-3xl bg-white p-6 shadow-soft">
        <h2 className="text-xl font-semibold">Interview chat</h2>
        <div className="mt-4 space-y-3">
          {messages.map((msg, idx) => (
            <div key={idx} className="rounded-2xl bg-slate-100 p-3 text-slate-700">
              {msg}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
