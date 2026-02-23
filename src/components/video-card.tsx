import Image from "next/image";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  createdAt: Date;
}

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? "" : "s"} ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`;
  const years = Math.floor(months / 12);
  return `${years} year${years === 1 ? "" : "s"} ago`;
}

export function VideoCard({ title, thumbnail, createdAt }: VideoCardProps) {
  return (
    <div className="cursor-pointer overflow-hidden rounded-xl bg-card border border-white/[0.06] p-2.5">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="px-1 pt-2.5 pb-1">
        <p className="truncate text-sm font-medium">{title}</p>
        <p className="mt-1 text-xs text-muted-foreground/60">
          Created {timeAgo(createdAt)}
        </p>
      </div>
    </div>
  );
}
