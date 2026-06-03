import Link from "next/link";
import { getJobs } from "@/lib/data";
import { ArrowRight, BriefcaseBusiness, DollarSign, MapPin, Search, BookmarkPlus } from "lucide-react";

export default async function SeekerJobsPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.q || "";
  let jobs = await getJobs();
  
  if (query) {
    const lowerQ = query.toLowerCase();
    jobs = jobs.filter(job => 
      job.title.toLowerCase().includes(lowerQ) || 
      job.company.toLowerCase().includes(lowerQ)
    );
  }

  return (
    <div className="max-w-6xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Browse Jobs</h1>
        <p className="text-gray-400">Find and apply to your next role.</p>
      </div>

      <div className="mb-8">
        <form className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="q"
              defaultValue={query}
              className="block w-full rounded-xl border-0 bg-white/[0.04] py-3.5 pl-12 pr-4 text-white ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
              placeholder="Job title, keywords, or company"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-violet-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-violet-500 transition"
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-60 shrink-0 space-y-6">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-base font-medium text-white mb-4">Job Type</h3>
            <div className="space-y-3">
              {['Full-time', 'Part-time', 'Contract', 'Hybrid', 'Remote'].map((type) => (
                <label key={type} className="flex items-center gap-3">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-violet-600" />
                  <span className="text-sm text-gray-300">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="flex-1">
          <div className="grid gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group relative flex flex-col sm:flex-row justify-between gap-6 rounded-2xl border border-white/[0.06] bg-[#0d0d0f] p-6 hover:border-violet-500/30 transition-all"
              >
                <div className="flex-1">
                  <div className="mb-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-1">{job.company}</p>
                    <Link href={`/jobs/${job.id}`} className="text-xl font-semibold text-white hover:text-violet-400 transition-colors">
                      {job.title}
                    </Link>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5 my-4">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <MapPin className="h-3.5 w-3.5" /> {job.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <BriefcaseBusiness className="h-3.5 w-3.5" /> {job.type}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <DollarSign className="h-3.5 w-3.5" /> {job.salaryRange}
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-center sm:justify-start gap-3 shrink-0">
                  <button className="flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition">
                    <BookmarkPlus className="h-5 w-5" />
                  </button>
                  <button className="flex items-center justify-center h-10 px-6 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-500 transition text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
