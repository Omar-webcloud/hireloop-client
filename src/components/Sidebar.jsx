"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { navigation } from "@/config/navigation";
import { Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const role = user?.role ?? "public";
  const links = navigation[role] || navigation.public;
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <aside
      className="flex flex-col flex-shrink-0 bg-[#0D0D12] border-r border-white/10 transition-all duration-300"
      style={{ width: open ? "240px" : "64px" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-4 border-b border-white/10">
        {open && (
          <img src="/images/logo.png" alt="HireLoop" className="h-6 w-auto" />
        )}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto p-2 rounded-lg text-zinc-400 hover:bg-white/10 hover:text-white transition"
          aria-label="Toggle sidebar"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* User info */}
      {user && (
        <div
          className={`flex items-center gap-3 px-3 py-4 border-b border-white/10 ${
            open ? "" : "justify-center"
          }`}
        >
          {user.image ? (
            <img
              src={user.image}
              alt="avatar"
              className="h-9 w-9 rounded-full object-cover flex-shrink-0"
            />
          ) : (
            <div className="h-9 w-9 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
              <User size={16} className="text-violet-400" />
            </div>
          )}
          {open && (
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-zinc-100 truncate leading-tight">
                {user.name}
              </p>
              <span className="inline-block mt-0.5 text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 capitalize">
                {user.role}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto py-3 space-y-0.5 px-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive =
            link.href === pathname ||
            (link.href !== "/dashboard/seeker" &&
              link.href !== "/dashboard/recruiter" &&
              link.href !== "/dashboard/admin" &&
              pathname.startsWith(link.href));

          return (
            <Link
              key={link.href}
              href={link.href}
              title={!open ? link.label : undefined}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                isActive
                  ? "bg-violet-500/15 text-violet-300"
                  : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
              } ${!open ? "justify-center" : ""}`}
            >
              {Icon && (
                <Icon
                  size={18}
                  className={`flex-shrink-0 ${
                    isActive ? "text-violet-400" : "text-zinc-500 group-hover:text-zinc-300"
                  }`}
                />
              )}
              {open && <span className="truncate">{link.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      {user && (
        <div className="p-3 border-t border-white/10">
          <button
            onClick={logout}
            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-500 hover:bg-red-500/10 hover:text-red-400 transition-all ${
              !open ? "justify-center" : ""
            }`}
            title={!open ? "Sign out" : undefined}
          >
            <LogOut size={18} className="flex-shrink-0" />
            {open && <span>Sign out</span>}
          </button>
        </div>
      )}
    </aside>
  );
}