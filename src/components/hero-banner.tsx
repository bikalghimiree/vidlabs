import Image from "next/image";

export function HeroBanner() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-2xl">
      <Image
        src="/mocks/dragon.png"
        alt="AI Generated Video"
        width={1400}
        height={400}
        className="h-[340px] w-full object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <h1 className="max-w-md text-3xl font-bold leading-tight tracking-tight">
          Create What You Can Imagine
        </h1>
        <p className="mt-2 max-w-sm text-sm text-white/70">
          Generate stunning AI videos from text prompts. Powered by the latest video AI models.
        </p>
      </div>
    </section>
  );
}
