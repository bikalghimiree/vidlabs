"use client";

import { PlusSignIcon } from "hugeicons-react";

export function NewProjectButton() {
  return (
    <button
      className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95"
    >
      <PlusSignIcon size={18} strokeWidth={2.5} />
      New project
    </button>
  );
}
