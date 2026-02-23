import Link from "next/link";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <Logo size={32} />
      <h1 className="mt-8 text-6xl font-bold tracking-tight">404</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        This page doesn&apos;t exist
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </main>
  );
}
