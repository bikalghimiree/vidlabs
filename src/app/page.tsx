import { Header } from "@/components/header";
import { HeroBanner } from "@/components/hero-banner";
import { VideoGrid } from "@/components/video-grid";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1400px] px-6 pb-16">
        <HeroBanner />
        <VideoGrid />
      </main>
    </>
  );
}
