import Image from "next/image";
import { PlayIcon } from "hugeicons-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  date: string;
  prompt: string;
}

export function VideoCard({ title, thumbnail, date, prompt }: VideoCardProps) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-xl bg-card transition-colors hover:bg-card/80">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
          <div className="scale-0 transition-transform group-hover:scale-100">
            <PlayIcon size={40} color="white" fill="white" strokeWidth={0} />
          </div>
        </div>
      </div>
      <div className="p-3">
        <p className="truncate text-sm font-medium">{title}</p>
        <p className="mt-1 truncate text-xs text-muted-foreground">{prompt}</p>
        <p className="mt-1 text-xs text-muted-foreground/60">{date}</p>
      </div>
    </div>
  );
}
