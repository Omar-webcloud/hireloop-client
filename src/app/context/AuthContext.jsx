"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Simple client‑side session fetch – expects a JSON response { user: { name, email, avatar, role } }
export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Load session on mount
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/auth/session", { credentials: "include" });
        if (!res.ok) throw new Error("No session");
        const data = await res.json();
        setUser(data.user);
      } catch (e) {
        setUser(null);
      }
    };
    fetchSession();
  }, [router]);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    setUser(null);
    router.replace("/");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
