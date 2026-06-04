import {
  LayoutDashboard,
  Briefcase,
  Bookmark,
  Send,
  CreditCard,
  Settings,
  Building2,
  PlusSquare,
  Users,
  DollarSign,
  Home,
  Tag,
} from "lucide-react";

export const navigation = {
  seeker: [
    { href: "/dashboard/seeker", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/seeker/jobs", label: "Browse Jobs", icon: Briefcase },
    { href: "/dashboard/seeker/saved", label: "Saved Jobs", icon: Bookmark },
    { href: "/dashboard/seeker/applications", label: "My Applications", icon: Send },
    { href: "/dashboard/seeker/billing", label: "Subscription & Billing", icon: CreditCard },
    { href: "/dashboard/seeker/settings", label: "Profile Settings", icon: Settings },
  ],
  recruiter: [
    { href: "/dashboard/recruiter", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/recruiter/company", label: "Company Profile", icon: Building2 },
    { href: "/dashboard/recruiter/jobs", label: "Manage Jobs", icon: Briefcase },
    { href: "/dashboard/recruiter/jobs/new", label: "Post New Job", icon: PlusSquare },
    { href: "/dashboard/recruiter/settings", label: "Settings", icon: Settings },
  ],
  admin: [
    { href: "/dashboard/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/admin/users", label: "Manage Users", icon: Users },
    { href: "/dashboard/admin/companies", label: "Manage Companies", icon: Building2 },
    { href: "/dashboard/admin/jobs", label: "Manage Jobs", icon: Briefcase },
    { href: "/dashboard/admin/payments", label: "Payments & Revenue", icon: DollarSign },
    { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
  ],
  public: [
    { href: "/", label: "Home", icon: Home },
    { href: "/pricing", label: "Pricing", icon: Tag },
    { href: "/companies", label: "Companies", icon: Building2 },
    { href: "/jobs", label: "Browse Jobs", icon: Briefcase },
  ],
};

/** Maps a role to its root dashboard path */
export const roleDashboard = {
  seeker: "/dashboard/seeker",
  recruiter: "/dashboard/recruiter",
  admin: "/dashboard/admin",
};