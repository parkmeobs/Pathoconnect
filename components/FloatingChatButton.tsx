'use client';

import { useState } from 'react';

export default function FloatingChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#e85c41] text-white shadow-lg hover:scale-105 transition"
        aria-label="Open chat"
      >
        💬
      </button>

      {/* Chat Modal */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-xl bg-white shadow-2xl border">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-[#e85c41] text-white rounded-t-xl">
            <span className="font-semibold">Chat Support</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Body */}
          <div className="p-4 h-60 overflow-y-auto text-sm text-gray-700">
            👋 Hi! How can I help you today?
          </div>

          {/* Input */}
          <div className="p-3 border-t">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#e85c41]"
            />
          </div>
        </div>
      )}
    </>
  );
}
