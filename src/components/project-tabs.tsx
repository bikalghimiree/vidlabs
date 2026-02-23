"use client";

import { useState } from "react";
import { PlusSignIcon } from "hugeicons-react";

const TABS = ["Your projects", "Community"] as const;

export function ProjectTabs({ onChange }: { onChange?: (tab: string) => void }) {
  const [active, setActive] = useState<string>(TABS[0]);

  return (
    <div className="mt-6 flex items-center justify-between">
      <div className="inline-flex rounded-full bg-white/[0.05] p-1">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActive(tab);
              onChange?.(tab);
            }}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              active === tab
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <button className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:scale-105 active:scale-95">
        <PlusSignIcon size={16} strokeWidth={2.5} />
        New project
      </button>
    </div>
  );
}
