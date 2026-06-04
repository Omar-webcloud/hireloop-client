"use client";

import { useState } from "react";
import { Card, Button, Link, TextField, Label, InputGroup, Input } from "@heroui/react";
import { AtSign, Eye, EyeOff, Shield } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import { useAuth } from "@/app/context/AuthContext";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("seeker");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { setUser, redirectToDashboard } = useAuth();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { error: authError } = await signIn.email({ email, password });

      if (authError) {
        setError(authError.message || "Invalid email or password.");
        return;
      }

      // Fetch the real session to get the stored role from MongoDB
      const res = await fetch("/api/auth/session", { credentials: "include" });
      const session = res.ok ? await res.json() : null;
      const actualRole = session?.user?.role ?? null;

      // RBAC check: the selected role must match the account's role in the DB
      // Admin accounts are never selectable from the toggle — they go through directly
      if (actualRole !== "admin" && actualRole !== role) {
        // Sign them back out so the session isn't left dangling
        await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
        setError(
          `This account is registered as a ${actualRole}. Please select "${actualRole === "recruiter" ? "Recruiter" : "Job Seeker"}" to continue.`
        );
        return;
      }

      setUser(session?.user ?? null);
      redirectToDashboard(actualRole);
    } catch {
      setError("An unexpected network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
      <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Welcome back
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Role toggle — seeker / recruiter */}
        <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => setRole("seeker")}
            className={`flex-1 text-sm font-medium py-2 rounded-lg transition-colors ${
              role === "seeker"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm"
                : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            }`}
          >
            Job Seeker
          </button>
          <button
            type="button"
            onClick={() => setRole("recruiter")}
            className={`flex-1 text-sm font-medium py-2 rounded-lg transition-colors ${
              role === "recruiter"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm"
                : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            }`}
          >
            Recruiter
          </button>
        </div>

        <form onSubmit={handleSignin} className="flex flex-col gap-5">
          <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email Address
            </Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
              <AtSign className="text-zinc-400 pointer-events-none" size={16} />
              <Input
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
              />
            </InputGroup>
          </TextField>

          <TextField isRequired name="password" className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
              <Shield className="text-zinc-400 pointer-events-none" size={16} />
              <Input
                type={isVisible ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
              />
              <button
                className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </InputGroup>
          </TextField>

          {error && (
            <div className="p-3.5 text-xs font-medium rounded-xl bg-red-100/60 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900">
              <span className="font-semibold">Error:</span> {error}
            </div>
          )}

          <Button
            type="submit"
            color="primary"
            className="w-full font-semibold rounded-xl text-sm h-12"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Sign In
          </Button>

          <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            New to HireLoop?{" "}
            <Link
              href="/auth/signup"
              className="font-medium cursor-pointer text-sm text-blue-600 dark:text-blue-400"
            >
              Create an account
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}