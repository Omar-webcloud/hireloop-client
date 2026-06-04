import Link from "next/link";
import { Building2, BriefcaseBusiness, MapPin, Users, Globe, ArrowLeft, BadgeCheck } from "lucide-react";
import { getCompanies, getJobs } from "@/lib/data";

export const metadata = {
  title: "Company Profile | HireLoop",
  description: "View company details, open jobs, and hiring activity.",
};

function getIndustryBadgeClass(industry) {
  const map = {
    Fintech: "bg-violet-400/10 text-violet-300 border-violet-400/20",
    AI: "bg-fuchsia-400/10 text-fuchsia-300 border-fuchsia-400/20",
    "Developer Tools": "bg-blue-400/10 text-blue-300 border-blue-400/20",
    "E-Commerce": "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    Healthtech: "bg-amber-400/10 text-amber-300 border-amber-400/20",
  };

  return map[industry] || "bg-white/5 text-gray-300 border-white/10";
}

export default async function CompanyProfilePage({ params }) {
  const { companyId } = await params;
  const companies = await getCompanies();
  const company = companies.find((item) => item.id === companyId) ?? null;
  const jobs = await getJobs();

  if (!company) {
    return (
      <div className="min-h-screen bg-[#0b0b0f] px-6 py-24 text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-white/10 bg-[#0d0d0f] p-10 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Building2 className="h-8 w-8 text-gray-400" />
          </div>
          <h1 className="text-3xl font-semibold">Company not found</h1>
          <p className="mt-3 max-w-xl text-sm text-gray-400">
            The company profile you’re looking for may have been removed or the link is invalid.
          </p>
          <Link
            href="/companies"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to companies
          </Link>
        </div>
      </div>
    );
  }

  const companyJobs = jobs.filter(
    (job) =>
      job.companyId === company.id ||
      job.company?.toLowerCase() === company.name.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Link
          href="/companies"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to companies
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <section className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  {company.logo ? (
                    <img src={company.logo} alt={company.name} className="h-full w-full object-contain" />
                  ) : (
                    <Building2 className="h-10 w-10 text-gray-400" />
                  )}
                </div>

                <div>
                  <div className={`mb-3 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getIndustryBadgeClass(company.industry)}`}>
                    {company.industry}
                  </div>
                  <h1 className="text-3xl font-semibold">{company.name}</h1>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-400">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {company.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-4 w-4" />
                      {company.employees} employees
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <BadgeCheck className="h-4 w-4" />
                      Approved company
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm">
                <p className="text-gray-400">Open jobs</p>
                <p className="mt-1 text-2xl font-semibold text-white">{company.openJobs ?? companyJobs.length}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <h2 className="text-lg font-medium">About the company</h2>
              <p className="mt-4 leading-7 text-gray-300">
                {company.description || "No company description available yet."}
              </p>

              {company.website && (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
                >
                  <Globe className="h-4 w-4" />
                  Visit website
                </a>
              )}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-6">
              <h2 className="text-lg font-medium">Company snapshot</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
                  <dt className="text-gray-400">Industry</dt>
                  <dd className="text-white">{company.industry}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
                  <dt className="text-gray-400">Location</dt>
                  <dd className="text-white">{company.location}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
                  <dt className="text-gray-400">Company size</dt>
                  <dd className="text-white">{company.employees}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-gray-400">Hiring status</dt>
                  <dd className="text-emerald-400">Active</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-6">
              <h2 className="text-lg font-medium">Why work here</h2>
              <ul className="mt-5 space-y-3 text-sm text-gray-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                  Fast-moving product teams with clear ownership.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                  Transparent compensation and career growth.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                  Remote-friendly hiring across key functions.
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Open roles</h2>
              <p className="mt-2 text-sm text-gray-400">
                Current listings at {company.name}.
              </p>
            </div>
            <BriefcaseBusiness className="h-6 w-6 text-gray-500" />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {companyJobs.length > 0 ? (
              companyJobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/jobs/${job.id}`}
                  className="group rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 transition hover:border-violet-500/25 hover:bg-white/[0.04]"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                    {job.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white transition group-hover:text-violet-300">
                    {job.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 line-clamp-3">
                    {job.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-gray-300">
                      {job.location}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-gray-300">
                      {job.type}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-gray-300">
                      {job.salaryRange}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="md:col-span-2 xl:col-span-3 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-gray-400">
                No public openings are listed for this company yet.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
