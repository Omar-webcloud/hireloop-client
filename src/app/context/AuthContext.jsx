"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { roleDashboard } from "@/config/navigation";

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/auth/session", { credentials: "include" });
        if (!res.ok) throw new Error("No session");
        const data = await res.json();
        setUser(data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, []);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    setUser(null);
    router.replace("/");
  };

  /** Call this after a successful sign-in to redirect to the correct dashboard */
  const redirectToDashboard = (role) => {
    const path = roleDashboard[role] ?? "/";
    router.replace(path);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout, redirectToDashboard }}>
      {children}
    </AuthContext.Provider>
  );
};