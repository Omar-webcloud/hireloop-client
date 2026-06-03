// src/config/navigation.js
export const navigation = {
  seeker: [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/jobs', label: 'Browse Jobs' },
    { href: '/applications', label: 'My Applications' },
  ],
  recruiter: [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/company', label: 'Company Profile' },
    { href: '/postings', label: 'Job Postings' },
  ],
  admin: [
    { href: '/admin/users', label: 'User Management' },
    { href: '/admin/companies', label: 'Company Review' },
    { href: '/admin/analytics', label: 'Platform Analytics' },
  ],
  public: [
    { href: '/', label: 'Home' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
  ],
};
