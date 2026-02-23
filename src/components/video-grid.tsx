import { VideoCard } from "./video-card";

const MOCK_VIDEOS = [
  {
    title: "Dragon's Reign",
    thumbnail: "/mocks/dragon.png",
    createdAt: new Date(Date.now() - 1000 * 60 * 6),        // 6 minutes ago
  },
  {
    title: "Aurora Spacewalk",
    thumbnail: "/mocks/astronaut.png",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3),   // 3 hours ago
  },
  {
    title: "Neon Rain: Tokyo 2077",
    thumbnail: "/mocks/cyberpunk.png",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
  },
  {
    title: "Dragon's Reign II",
    thumbnail: "/mocks/dragon.png",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
  },
  {
    title: "Deep Space",
    thumbnail: "/mocks/astronaut.png",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14), // 2 weeks ago
  },
  {
    title: "Shibuya Nights",
    thumbnail: "/mocks/cyberpunk.png",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 45), // ~2 months ago
  },
];

export function VideoGrid() {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_VIDEOS.map((video, i) => (
          <VideoCard key={i} {...video} />
        ))}
      </div>
    </section>
  );
}
