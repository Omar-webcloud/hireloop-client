// /hireloop-client/src/lib/api-client.js
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Get session/auth token
async function getAuthHeaders() {
  try {
    const response = await fetch('/api/auth/session');
    const session = await response.json();
    
    return {
      'x-user-id': session.user.id,
      'x-user-role': session.user.role,
      'Content-Type': 'application/json'
    };
  } catch (error) {
    console.error('Auth error:', error);
    return { 'Content-Type': 'application/json' };
  }
}

// Seeker APIs
export const seekerAPI = {
  // Get profile
  async getProfile() {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/profile`, { headers });
    if (!res.ok) throw new Error('Failed to fetch profile');
    return res.json();
  },

  // Update profile
  async updateProfile(data) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/profile`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to update profile');
    return res.json();
  },

  // Get applications
  async getApplications() {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/applications`, { headers });
    if (!res.ok) throw new Error('Failed to fetch applications');
    return res.json();
  },

  // Apply for job
  async applyJob(jobId, coverLetter = '', resumeUrl = '') {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/apply`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ jobId, coverLetter, resumeUrl })
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || 'Failed to apply');
    }
    return res.json();
  },

  // Get saved jobs
  async getSavedJobs() {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/saved-jobs`, { headers });
    if (!res.ok) throw new Error('Failed to fetch saved jobs');
    return res.json();
  },

  // Save job
  async saveJob(jobId) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/saved-jobs`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ jobId })
    });
    if (!res.ok) throw new Error('Failed to save job');
    return res.json();
  },

  // Unsave job
  async unsaveJob(jobId) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/saved-jobs/${jobId}`, {
      method: 'DELETE',
      headers
    });
    if (!res.ok) throw new Error('Failed to unsave job');
    return res.json();
  },

  // Upgrade subscription
  async upgradeSubscription(plan) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/seeker/subscribe`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ plan })
    });
    if (!res.ok) throw new Error('Failed to upgrade subscription');
    return res.json();
  }
};

// Recruiter APIs
export const recruiterAPI = {
  // Register company
  async registerCompany(data) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/companies`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || 'Failed to register company');
    }
    return res.json();
  },

  // Get my company
  async getMyCompany() {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/companies/my`, { headers });
    if (!res.ok) throw new Error('Company not found');
    return res.json();
  },

  // Update company
  async updateCompany(data) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/companies/my`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to update company');
    return res.json();
  },

  // Post job
  async postJob(data) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/jobs`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || 'Failed to post job');
    }
    return res.json();
  },

  // Get my jobs
  async getMyJobs() {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/jobs`, { headers });
    if (!res.ok) throw new Error('Failed to fetch jobs');
    return res.json();
  },

  // Get applicants for job
  async getApplicants(jobId) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/jobs/${jobId}/applicants`, { headers });
    if (!res.ok) throw new Error('Failed to fetch applicants');
    return res.json();
  },

  // Update application status
  async updateApplicationStatus(applicationId, status) {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_URL}/recruiter/applications/${applicationId}/status`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ status })
    });
    if (!res.ok) throw new Error('Failed to update status');
    return res.json();
  }
};