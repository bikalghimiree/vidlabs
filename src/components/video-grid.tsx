import { VideoCard } from "./video-card";

const MOCK_VIDEOS = [
  {
    title: "Dragon's Reign",
    thumbnail: "/mocks/dragon.png",
    date: "Feb 22 · 15:31",
    prompt: "A majestic dragon breathing blue fire over a medieval castle at sunset",
  },
  {
    title: "Aurora Spacewalk",
    thumbnail: "/mocks/astronaut.png",
    date: "Feb 21 · 09:14",
    prompt: "An astronaut floating above Earth with northern lights reflecting off the visor",
  },
  {
    title: "Neon Rain: Tokyo 2077",
    thumbnail: "/mocks/cyberpunk.png",
    date: "Feb 20 · 22:45",
    prompt: "A woman walking through a neon-lit cyberpunk Tokyo street at night with rain",
  },
  {
    title: "Dragon's Reign II",
    thumbnail: "/mocks/dragon.png",
    date: "Feb 19 · 11:03",
    prompt: "Dragon sequel — dramatic aerial battle above the burning castle",
  },
  {
    title: "Deep Space",
    thumbnail: "/mocks/astronaut.png",
    date: "Feb 18 · 16:22",
    prompt: "Astronaut drifting into deep space with stars and nebula in background",
  },
  {
    title: "Shibuya Nights",
    thumbnail: "/mocks/cyberpunk.png",
    date: "Feb 17 · 03:58",
    prompt: "Rainy night at Shibuya crossing with holographic billboards",
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
