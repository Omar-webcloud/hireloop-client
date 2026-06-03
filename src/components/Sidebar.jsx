"use client";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { navigation } from "@/config/navigation";
import { Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const role = user?.role ?? "public";
  const links = navigation[role] || navigation.public;

  const [open, setOpen] = useState(false);

  return (
    <aside className="flex flex-col bg-white/70 dark:bg-black/70 backdrop-blur-lg shadow-lg border-r border-zinc-200 dark:border-zinc-800 transition-width duration-300" style={{ width: open ? "250px" : "64px" }}>
      <div className="flex items-center justify-between p-4">
        <button onClick={() => setOpen(!open)} className="p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        {open && (
          <div className="flex items-center">
            <img src="/images/logo.png" alt="HireLoop" className="h-6 w-auto" />
          </div>
        )}
      </div>
      {open && user && (
        <div className="flex flex-col items-center p-4 space-y-2 border-b border-zinc-200 dark:border-zinc-800">
          {user.avatar ? (
            <img src={user.avatar} alt="avatar" className="h-12 w-12 rounded-full object-cover" />
          ) : (
            <div className="h-12 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700">
              <User size={24} />
            </div>
          )}
          <div className="text-center">
            <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{user.name}</p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">{user.email}</p>
            <p className="text-xs text-primary capitalize">{user.role}</p>
          </div>
          <button onClick={logout} className="flex items-center gap-1 text-xs text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-600 transition">
            <LogOut size={14} /> Logout
          </button>
        </div>
      )}
      <nav className="flex-1 overflow-y-auto py-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition"
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
