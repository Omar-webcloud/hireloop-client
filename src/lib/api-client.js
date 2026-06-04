/**
 * Client-side API wrapper.
 * Ensures NEXT_PUBLIC_API_URL always includes the `/api` prefix.
 */
// /hireloop-client/src/lib/api-client.js

function normalizeApiBaseUrl(raw) {
  const base = (raw || '').trim().replace(/\/+$/, '');
  if (!base) return 'http://localhost:5000/api';

  if (!base.endsWith('/api')) return `${base}/api`;
  return base;
}

const API_URL = normalizeApiBaseUrl(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api');

// Get session/auth token
async function getAuthHeaders() {
  try {
    const response = await fetch('/api/auth/session');
    const session = await response.json();

    return {
      'x-user-id': session?.user?.id,
      'x-user-role': session?.user?.role,
      'Content-Type': 'application/json',
    };
  } catch (error) {
    console.error('Auth error:', error);
    return { 'Content-Type': 'application/json' };
  }
}

// Seeker APIs
export const seekerAPI = {
  async getProfile() {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/profile`, { headers });
    if (!res.ok) throw new Error('Failed to fetch profile');
    return res.json();
  },

  async updateProfile(data) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/profile`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update profile');
    return res.json();
  },

  async getApplications() {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/applications`, { headers });
    if (!res.ok) throw new Error('Failed to fetch applications');
    return res.json();
  },

  async applyJob(jobId, coverLetter = '', resumeUrl = '') {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/apply`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ jobId, coverLetter, resumeUrl }),
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error?.error || 'Failed to apply');
    }
    return res.json();
  },

  async getSavedJobs() {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/saved-jobs`, { headers });
    if (!res.ok) throw new Error('Failed to fetch saved jobs');
    return res.json();
  },

  async saveJob(jobId) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/saved-jobs`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ jobId }),
    });
    if (!res.ok) throw new Error('Failed to save job');
    return res.json();
  },

  async unsaveJob(jobId) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/saved-jobs/${jobId}`, {
      method: 'DELETE',
      headers,
    });
    if (!res.ok) throw new Error('Failed to unsave job');
    return res.json();
  },

  async upgradeSubscription(plan) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/subscribe`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ plan }),
    });
    if (!res.ok) throw new Error('Failed to upgrade subscription');
    return res.json();
  },
};

// Recruiter APIs
export const recruiterAPI = {
  async registerCompany(data) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/companies`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error?.error || 'Failed to register company');
    }
    return res.json();
  },

  async getMyCompany() {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/companies/my`, { headers });
    if (!res.ok) throw new Error('Company not found');
    return res.json();
  },

  async updateCompany(data) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/companies/my`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update company');
    return res.json();
  },

  async postJob(data) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/jobs`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error?.error || 'Failed to post job');
    }
    return res.json();
  },

  async getMyJobs() {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/jobs`, { headers });
    if (!res.ok) throw new Error('Failed to fetch jobs');
    return res.json();
  },

  async getApplicants(jobId) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/jobs/${jobId}/applicants`, { headers });
    if (!res.ok) throw new Error('Failed to fetch applicants');
    return res.json();
  },

  async updateApplicationStatus(applicationId, status) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/applications/${applicationId}/status`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ status }),
    });

    if (!res.ok) throw new Error('Failed to update status');
    return res.json();
  },
};
