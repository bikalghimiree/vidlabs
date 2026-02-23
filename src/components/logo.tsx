import Link from "next/link";
import { PlayIcon } from "hugeicons-react";

export function Logo({ size = 26 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-1">
      <span className="rotate-90">
        <PlayIcon size={size} color="#00D4FF" fill="#00D4FF" strokeWidth={0} />
      </span>
      <span className="text-lg font-semibold tracking-tight">VidLabs</span>
    </Link>
  );
}
