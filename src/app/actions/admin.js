"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const BACKEND_URL = process.env.BACKEND_API_URL || "http://localhost:5000/api";

// Helper to get headers for Express server API
async function getAuthHeaders() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  return {
    "x-user-id": session.user.id,
    "x-user-role": session.user.role,
    "Content-Type": "application/json"
  };
}

export async function changeUserRole(userId, newRole) {
  try {
    const authHeaders = await getAuthHeaders();
    
    const res = await fetch(`${BACKEND_URL}/admin/users/${userId}/role`, {
      method: "PATCH",
      headers: authHeaders,
      body: JSON.stringify({ role: newRole })
    });
    
    if (!res.ok) {
      throw new Error("Failed to change user role");
    }

    revalidatePath("/dashboard/admin/users");
    return { success: true };
  } catch (error) {
    console.error("Failed to change user role:", error);
    return { error: error.message || "Failed to change user role" };
  }
}

export async function toggleUserStatus(userId, isSuspended) {
  try {
    const authHeaders = await getAuthHeaders();
    
    const res = await fetch(`${BACKEND_URL}/admin/users/${userId}/status`, {
      method: "PATCH",
      headers: authHeaders,
      body: JSON.stringify({ suspended: isSuspended })
    });
    
    if (!res.ok) {
      throw new Error("Failed to update status");
    }

    revalidatePath("/dashboard/admin/users");
    return { success: true };
  } catch (error) {
    console.error("Failed to toggle user status:", error);
    return { error: error.message || "Failed to toggle user status" };
  }
}

export async function updateCompanyStatus(companyId, status) {
  try {
    const authHeaders = await getAuthHeaders();
    
    const res = await fetch(`${BACKEND_URL}/admin/companies/${companyId}/status`, {
      method: "PATCH",
      headers: authHeaders,
      body: JSON.stringify({ status })
    });
    
    if (!res.ok) {
      throw new Error("Failed to update company status");
    }

    revalidatePath("/dashboard/admin/companies");
    return { success: true };
  } catch (error) {
    console.error("Failed to update company status:", error);
    return { error: error.message || "Failed to update company status" };
  }
}

export async function deleteJobAdmin(jobId) {
  try {
    const authHeaders = await getAuthHeaders();
    
    const res = await fetch(`${BACKEND_URL}/admin/jobs/${jobId}`, {
      method: "DELETE",
      headers: authHeaders
    });
    
    if (!res.ok) {
      throw new Error("Failed to delete job");
    }

    revalidatePath("/dashboard/admin/jobs");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete job:", error);
    return { error: error.message || "Failed to delete job" };
  }
}
