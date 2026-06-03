"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Button, TextField, Label, InputGroup, Input } from "@heroui/react";
import { User, Eye, EyeOff, Shield } from "lucide-react";
import { signIn, signUp } from "@/lib/auth-client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    // The user requested username "admin" and pass "123"
    if (username !== "admin" || password !== "123") {
      setError("Invalid admin credentials.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // In better-auth we use emails. Let's try to sign in with an admin email.
      // If it fails because the user doesn't exist, we can register them on the fly
      // so the proxy allows access.
      const adminEmail = "admin@hireloop.local";
      
      const { error: signInErr } = await signIn.email({
        email: adminEmail,
        password: password,
      });

      if (signInErr) {
        // Assume user doesn't exist, let's create the admin user
        await signUp.email({
          email: adminEmail,
          password: password,
          name: "Admin",
          role: "admin",
        });
        
        // Log in again just in case, though signUp usually logs you in
        await signIn.email({
          email: adminEmail,
          password: password,
        });
      }

      router.push("/dashboard/admin");
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
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Admin Portal</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Secure access for administrators only</p>
        </div>

        <form onSubmit={handleAdminLogin} className="flex flex-col gap-5">
          <TextField isRequired name="username" className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Username</Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
              <User className="text-zinc-400 pointer-events-none" size={16} />
              <Input
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                placeholder="Enter admin password"
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
            className="w-full font-semibold rounded-xl text-sm h-12 mt-2"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Login to Admin Dashboard
          </Button>
        </form>
      </Card>
    </div>
  );
}
