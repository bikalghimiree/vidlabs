"use client";

import { useState } from "react";
import { ArrowUpIcon } from "hugeicons-react";

export function PromptBar() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-full max-w-[700px] -translate-x-1/2 px-6">
      <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-card px-4 py-3 shadow-xl shadow-black/30">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the video you want to create..."
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/50"
        />
        <button
          disabled={!prompt.trim()}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity disabled:opacity-30"
        >
          <ArrowUpIcon size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
