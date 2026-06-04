import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Clock3,
  DollarSign,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { getJobById, getJobs } from "@/lib/data";

export const metadata = {
  title: "Job Details | HireLoop",
  description: "View a job listing, company details, and similar roles.",
};

function formatSalaryRange(job) {
  if (job.salaryRange) return job.salaryRange;
  if (job.salaryMin && job.salaryMax) {
    return `${job.currency || "$"}${job.salaryMin} - ${job.currency || "$"}${job.salaryMax}`;
  }
  return "Salary not disclosed";
}

function getTypeLabel(type) {
  if (!type) return "Full-time";
  return type
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default async function JobDetailsPage({ params }) {
  const { jobId } = await params;
  const job = await getJobById(jobId);

  if (!job) {
    return (
      <div className="min-h-screen bg-[#0b0b0f] px-6 py-24 text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-white/10 bg-[#0d0d0f] p-10 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <BriefcaseBusiness className="h-8 w-8 text-gray-400" />
          </div>
          <h1 className="text-3xl font-semibold">Job not found</h1>
          <p className="mt-3 max-w-xl text-sm text-gray-400">
            This job listing may no longer be active or the URL is invalid.
          </p>
          <Link
            href="/jobs"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to jobs
          </Link>
        </div>
      </div>
    );
  }

  const allJobs = await getJobs();
  const similarJobs = allJobs
    .filter(
      (item) =>
        item.id !== job.id &&
        (item.category === job.category || item.company === job.company)
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Link
          href="/jobs"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to jobs
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.85fr]">
          <section className="space-y-8">
            <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-300">
                  {job.category || "General"}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-gray-300">
                  {getTypeLabel(job.type)}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-gray-300">
                  <Clock3 className="mr-1 inline-block h-3.5 w-3.5" />
                  Posted recently
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                  {job.company}
                </p>
                <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  {job.title}
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300">
                  {job.description}
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-widest text-gray-500">Location</p>
                  <p className="mt-2 flex items-center gap-2 text-sm font-medium text-white">
                    <MapPin className="h-4 w-4 text-violet-400" />
                    {job.location || "Remote"}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-widest text-gray-500">Salary</p>
                  <p className="mt-2 flex items-center gap-2 text-sm font-medium text-white">
                    <DollarSign className="h-4 w-4 text-violet-400" />
                    {formatSalaryRange(job)}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-widest text-gray-500">Employment</p>
                  <p className="mt-2 flex items-center gap-2 text-sm font-medium text-white">
                    <BriefcaseBusiness className="h-4 w-4 text-violet-400" />
                    {getTypeLabel(job.type)}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/auth/signin"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                  Apply for this job
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  View pricing
                </Link>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
                <h2 className="text-xl font-semibold">Responsibilities</h2>
                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-gray-300">
                  {job.responsibilities ||
                    "• Own key product initiatives\n• Collaborate with design and engineering teams\n• Ship high-quality work with measurable impact"}
                </p>
              </div>

              <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
                <h2 className="text-xl font-semibold">Requirements</h2>
                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-gray-300">
                  {job.requirements ||
                    "• Strong communication skills\n• Experience relevant to the role\n• Ability to work cross-functionally\n• Attention to detail"}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold">Similar jobs</h2>
                  <p className="mt-2 text-sm text-gray-400">
                    More roles from the same category or company.
                  </p>
                </div>
                <Sparkles className="h-6 w-6 text-gray-500" />
              </div>

              <div className="mt-8 grid gap-4">
                {similarJobs.length > 0 ? (
                  similarJobs.map((item) => (
                    <Link
                      key={item.id}
                      href={`/jobs/${item.id}`}
                      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:border-violet-500/25 hover:bg-white/[0.04]"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                            {item.company}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex shrink-0 flex-wrap gap-2 text-xs text-gray-300">
                          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                            {item.location}
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                            {getTypeLabel(item.type)}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-gray-400">
                    No similar jobs available right now.
                  </div>
                )}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-6">
              <h2 className="text-lg font-semibold">Company</h2>
              <div className="mt-5 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                  {job.companyLogo ? (
                    <img
                      src={job.companyLogo}
                      alt={job.company}
                      className="h-full w-full rounded-2xl object-contain p-2"
                    />
                  ) : (
                    <Building2 className="h-7 w-7 text-gray-400" />
                  )}
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{job.company}</p>
                  <p className="mt-1 text-sm text-gray-400">
                    {job.companyLocation || job.location || "Company location not provided"}
                  </p>
                </div>
              </div>

              <Link
                href={job.companyId ? `/companies/${job.companyId}` : "/companies"}
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
              >
                <ShieldCheck className="h-4 w-4" />
                View company profile
              </Link>
            </div>

            <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-6">
              <h2 className="text-lg font-semibold">Job summary</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
                  <dt className="text-gray-400">Salary range</dt>
                  <dd className="text-white">{formatSalaryRange(job)}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
                  <dt className="text-gray-400">Job type</dt>
                  <dd className="text-white">{getTypeLabel(job.type)}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
                  <dt className="text-gray-400">Category</dt>
                  <dd className="text-white">{job.category || "General"}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-gray-400">Public status</dt>
                  <dd className="text-emerald-400">Active</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-6">
              <h2 className="text-lg font-semibold">Apply notes</h2>
              <p className="mt-4 text-sm leading-7 text-gray-300">
                Applying through HireLoop requires a signed-in account and a paid seeker plan for direct submissions.
              </p>
              <div className="mt-5">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200"
                >
                  <BadgeCheck className="h-4 w-4" />
                  Compare subscription plans
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
