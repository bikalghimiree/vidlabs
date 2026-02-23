import { Header } from "@/components/header";
import { PromptBar } from "@/components/prompt-bar";

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1400px] px-6 pb-24">
        {/* Project content coming soon */}
      </main>
      <PromptBar />
    </>
  );
}
