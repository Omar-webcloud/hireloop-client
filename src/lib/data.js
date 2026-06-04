import { auth } from "./auth";
import { headers } from "next/headers";

function normalizeBackendBaseUrl(raw) {
  const base = (raw || "").trim().replace(/\/+$/, ""); // trim trailing slashes
  if (!base) return "http://localhost:5000/api";

  // Accept either:
  //  - http://host:5000
  //  - http://host:5000/api
  // and normalize to a base that includes `/api`.
  if (base.endsWith("/api")) return base;
  return `${base}/api`;
}

const BACKEND_URL = normalizeBackendBaseUrl(process.env.BACKEND_API_URL || "http://localhost:5000/api");


// Helper to get authorization headers for backend requests
async function getAuthHeaders() {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    if (session?.user) {
      return {
        "x-user-id": session.user.id || "",
        "x-user-role": session.user.role || "",
        "Content-Type": "application/json"
      };
    }
  } catch (error) {
    console.error("Error getting session headers:", error);
  }
  return { "Content-Type": "application/json" };
}

// ---------------- COMMON / PUBLIC ----------------

export async function getJobs(filters = {}) {
  try {
    const params = new URLSearchParams();
    if (filters.category) params.append("category", filters.category);
    if (filters.type) params.append("type", filters.type);
    if (filters.location) params.append("location", filters.location);
    if (filters.minSalary) params.append("minSalary", filters.minSalary);
    if (filters.search) params.append("search", filters.search);

    // Public jobs should not depend on auth/session headers.
    const res = await fetch(`${BACKEND_URL}/common/jobs?${params.toString()}`, {
      headers: { "Content-Type": "application/json" },
      cache: "no-store"
    });

    if (!res.ok) {
      // Fetch the response body to surface the real backend error.
      let bodyText = "";
      try {
        bodyText = await res.text();
      } catch (_) {
        bodyText = "";
      }
      throw new Error(`Failed to fetch jobs (status: ${res.status}). ${bodyText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return getMockJobs();
  }
}

export async function getJobById(id) {
  try {
    // ✅ Fixed: /api/common/jobs/:id
    const res = await fetch(`${BACKEND_URL}/common/jobs/${id}`, {
      cache: "no-store"
    });
    if (!res.ok) throw new Error("Failed to fetch job details");
    return await res.json();
  } catch (error) {
    console.error(`Error fetching job ${id}:`, error);
    const mockJobs = getMockJobs();
    return mockJobs.find(j => j.id === id) || null;
  }
}

export async function getCompanies() {
  try {
    // ✅ Fixed: /api/common/companies
    const res = await fetch(`${BACKEND_URL}/common/companies`, {
      cache: "no-store"
    });
    if (!res.ok) throw new Error("Failed to fetch companies");
    return await res.json();
  } catch (error) {
    console.error("Error fetching companies:", error);
    return getMockCompanies();
  }
}

// ---------------- SEEKER DASHBOARD ----------------

export async function getSeekerProfile() {
  try {
    const authHeaders = await getAuthHeaders();
    const res = await fetch(`${BACKEND_URL}/seeker/profile`, {
      headers: authHeaders,
      cache: "no-store"
    });
    if (!res.ok) throw new Error("Failed to fetch profile");
    return await res.json();
  } catch (error) {
    console.error("Error fetching seeker profile:", error);
    return { name: "", email: "", profile: { skills: [], contact: "", resumeUrl: "" }, subscriptionPlan: "free" };
  }
}

export async function getSavedJobs() {
  try {
    const authHeaders = await getAuthHeaders();
    const res = await fetch(`${BACKEND_URL}/seeker/saved-jobs`, {
      headers: authHeaders,
      cache: "no-store"
    });
    if (!res.ok) throw new Error("Failed to fetch saved jobs");
    return await res.json();
  } catch (error) {
    console.error("Error fetching saved jobs:", error);
    return [];
  }
}

export async function getSeekerApplications() {
  try {
    const authHeaders = await getAuthHeaders();
    const res = await fetch(`${BACKEND_URL}/seeker/applications`, {
      headers: authHeaders,
      cache: "no-store"
    });
    if (!res.ok) throw new Error("Failed to fetch applications");
    return await res.json();
  } catch (error) {
    console.error("Error fetching seeker applications:", error);
    return [];
  }
}

// ---------------- RECRUITER DASHBOARD ----------------

export async function getRecruiterCompany() {
  try {
    const authHeaders = await getAuthHeaders();
    const res = await fetch(`${BACKEND_URL}/recruiter/companies/my`, {
      headers: authHeaders,
      cache: "no-store"
    });
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error("Failed to fetch company profile");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching recruiter company:", error);
    return null;
  }
}

export async function getRecruiterApplications() {
  try {
    const authHeaders = await getAuthHeaders();
    const res = await fetch(`${BACKEND_URL}/recruiter/applications`, {
      headers: authHeaders,
      cache: "no-store"
    });
    if (!res.ok) throw new Error("Failed to fetch applications");
    return await res.json();
  } catch (error) {
    console.error("Error fetching recruiter applications:", error);
    return [];
  }
}

export async function getRecruiterAnalytics() {
  try {
    const authHeaders = await getAuthHeaders();
    const res = await fetch(`${BACKEND_URL}/recruiter/analytics`, {
      headers: authHeaders,
      cache: "no-store"
    });
    if (!res.ok) throw new Error("Failed to fetch analytics");
    return await res.json();
  } catch (error) {
    console.error("Error fetching recruiter analytics:", error);
    return { totalJobs: 0, totalApplications: 0, statusBreakdown: { accepted: 0, rejected: 0, pending: 0 } };
  }
}

// ---------------- ADMIN DASHBOARD ----------------

export async function getAllUsers(role = "All", search = "") {
  try {
    const authHeaders = await getAuthHeaders();
    const params = new URLSearchParams();
    if (role) params.append("role", role);
    if (search) params.append("search", search);

    const res = await fetch(`${BACKEND_URL}/admin/users?${params.toString()}`, {
      headers: authHeaders,
      cache: "no-store"
    });
    if (!res.ok) throw new Error("Failed to fetch users");
    return await res.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function getAllCompaniesAdmin() {
  try {
    const authHeaders = await getAuthHeaders();
    const res = await fetch(`${BACKEND_URL}/admin/companies`, {
      headers: authHeaders,
      cache: "no-store"
    });
    if (!res.ok) throw new Error("Failed to fetch admin companies");
    return await res.json();
  } catch (error) {
    console.error("Error fetching admin companies:", error);
    return [];
  }
}

export async function getAllJobsAdmin() {
  try {
    const authHeaders = await getAuthHeaders();
    const res = await fetch(`${BACKEND_URL}/admin/jobs`, {
      headers: authHeaders,
      cache: "no-store"
    });
    if (!res.ok) throw new Error("Failed to fetch admin jobs");
    return await res.json();
  } catch (error) {
    console.error("Error fetching admin jobs:", error);
    return [];
  }
}

export async function getAdminAnalytics() {
  try {
    const authHeaders = await getAuthHeaders();
    const res = await fetch(`${BACKEND_URL}/admin/analytics`, {
      headers: authHeaders,
      cache: "no-store"
    });
    if (!res.ok) throw new Error("Failed to fetch admin analytics");
    return await res.json();
  } catch (error) {
    console.error("Error fetching admin analytics:", error);
    return { totalUsers: 0, totalSeekers: 0, totalRecruiters: 0, totalCompanies: 0, totalJobs: 0, totalRevenue: "$0" };
  }
}

export async function getAdminPayments() {
  try {
    const authHeaders = await getAuthHeaders();
    const res = await fetch(`${BACKEND_URL}/admin/payments`, {
      headers: authHeaders,
      cache: "no-store"
    });
    if (!res.ok) throw new Error("Failed to fetch payment records");
    return await res.json();
  } catch (error) {
    console.error("Error fetching payments records:", error);
    return [];
  }
}

// ---------------- FALLBACK MOCKS ----------------

function getMockJobs() {
  return Array(6).fill(null).map((_, i) => ({
    id: `mock-job-${i}`,
    title: "Frontend Developer",
    company: "TechNova Inc.",
    companyId: "mock-company-1",
    location: "New York, USA",
    type: "Hybrid",
    category: "Engineering",
    salaryMin: 90000,
    salaryMax: 130000,
    currency: "USD",
    salaryRange: "$90k - $130k",
    description: "Join our fast-paced frontend team building modern web applications with React and Next.js.",
    requirements: "3+ years of experience with React. Strong understanding of web fundamentals (HTML, CSS, JS).",
    responsibilities: "Build and maintain scalable web applications. Collaborate with designers and backend engineers.",
    createdAt: new Date().toISOString()
  }));
}

function getMockCompanies() {
  return Array(6).fill(null).map((_, i) => ({
    id: `mock-company-${i}`,
    name: "TechNova Inc.",
    industry: "Fintech",
    location: "San Francisco, CA",
    employees: "50-200",
    description: "Leading the future of digital payments.",
    openJobs: 3,
    logo: null,
    createdAt: new Date().toISOString()
  }));
}