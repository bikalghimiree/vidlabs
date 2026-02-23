import { Logo } from "@/components/logo";
import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex justify-center">
          <Logo size={32} />
        </div>
        <h1 className="mt-8 text-center text-2xl font-semibold tracking-tight">
          Welcome back
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Sign in to your account to continue
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
