import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobById, getJobs } from "@/lib/data";
import { ArrowLeft, BriefcaseBusiness, Building2, DollarSign, MapPin, CheckCircle2 } from "lucide-react";

export default async function JobDetailsPage({ params }) {
  // Next.js 16: params must be awaited
  const { jobId } = await params;
  const job = await getJobById(jobId);

  if (!job) {
    notFound();
  }

  // Get similar jobs (just mock other jobs for now)
  const allJobs = await getJobs();
  const similarJobs = allJobs.filter(j => j.id !== jobId).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Back Link */}
        <Link href="/jobs" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to all jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Header */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-2">{job.company}</p>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.04] px-4 py-2 text-sm text-gray-300 font-medium">
                  <MapPin className="h-4 w-4 text-fuchsia-400" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.04] px-4 py-2 text-sm text-gray-300 font-medium">
                  <BriefcaseBusiness className="h-4 w-4 text-fuchsia-400" />
                  {job.type}
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.04] px-4 py-2 text-sm text-gray-300 font-medium">
                  <DollarSign className="h-4 w-4 text-fuchsia-400" />
                  {job.salaryRange}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-invert prose-violet max-w-none">
              <h2 className="text-2xl font-semibold text-white mb-4">About the Role</h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{job.description}</p>
              
              <h2 className="text-2xl font-semibold text-white mt-10 mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities?.split('. ').filter(Boolean).map((req, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <CheckCircle2 className="h-6 w-6 text-violet-500 shrink-0" />
                    <span>{req}.</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-10 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements?.split('. ').filter(Boolean).map((req, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <CheckCircle2 className="h-6 w-6 text-violet-500 shrink-0" />
                    <span>{req}.</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Card */}
            <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f]/90 p-8 shadow-2xl">
              <button className="w-full rounded-xl bg-violet-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 transition duration-300 mb-4">
                Apply for this job
              </button>
              <p className="text-xs text-center text-gray-400">
                Requires a paid Seeker plan to apply directly.
              </p>
            </div>

            {/* Company Card */}
            <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f]/90 p-8">
              <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-gray-400" />
                About {job.company}
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Leading the industry with innovative solutions. We are constantly looking for top talent to join our remote-first team.
              </p>
              <Link href={`/companies/${job.companyId}`} className="text-sm font-medium text-violet-400 hover:text-violet-300">
                View company profile &rarr;
              </Link>
            </div>
          </div>
          
        </div>

        {/* Similar Jobs */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold text-white mb-8">Similar Roles</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {similarJobs.map((simJob) => (
              <Link key={simJob.id} href={`/jobs/${simJob.id}`} className="block group">
                <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f]/50 p-6 hover:bg-[#0d0d0f] hover:border-violet-500/20 transition-all duration-300">
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-1">{simJob.company}</p>
                  <h3 className="text-lg font-semibold text-white group-hover:text-violet-400 mb-3">{simJob.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-md">{simJob.location}</span>
                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-md">{simJob.salaryRange}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
