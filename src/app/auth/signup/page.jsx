"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Button, Link, TextField, Label, InputGroup, Input } from "@heroui/react";
import { AtSign, Eye, EyeOff, Shield, User } from "lucide-react";
import { signUp } from "@/lib/auth-client";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("seeker");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const { error: authError } = await signUp.email({
        email,
        password,
        name,
        role,
        callbackURL: "/",
      });

      if (authError) {
        setError(authError.message || "Something went wrong during signup.");
      } else {
        setSuccess("Account created successfully! Welcome.");
        setName("");
        setEmail("");
        setPassword("");
        router.replace("/");
      }
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
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Create an account</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Fill in the fields below to get started</p>
        </div>

        <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => setRole("seeker")}
            className={`flex-1 text-sm font-medium py-2 rounded-lg transition-colors ${role === "seeker" ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"}`}
          >
            Job Seeker
          </button>
          <button
            type="button"
            onClick={() => setRole("recruiter")}
            className={`flex-1 text-sm font-medium py-2 rounded-lg transition-colors ${role === "recruiter" ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"}`}
          >
            Recruiter
          </button>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col gap-5">
          <TextField isRequired name="name" className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
              <User className="text-zinc-400 pointer-events-none" size={16} />
              <Input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
              />
            </InputGroup>
          </TextField>

          <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</Label>
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
                placeholder="Choose a password"
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

          {success && (
            <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
              <span className="font-semibold">Success:</span> {success}
            </div>
          )}

          <Button
            type="submit"
            color="primary"
            className="w-full font-semibold rounded-xl text-sm h-12"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Sign Up
          </Button>

          <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Already have an account?{" "}
            <Link href="/auth/signin" className="font-medium cursor-pointer text-sm text-blue-600 dark:text-blue-400">
              Sign in instead
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
