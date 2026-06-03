import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, DollarSign, MapPin, Search } from "lucide-react";
import { getJobs } from "@/lib/data";

export default async function JobsPage({ searchParams }) {
  // In Next.js 16, searchParams is a Promise. We must await it.
  const params = await searchParams;
  const query = params?.q || "";
  
  // Basic search filtering (if not using real DB query yet)
  let jobs = await getJobs();
  
  if (query) {
    const lowerQ = query.toLowerCase();
    jobs = jobs.filter(job => 
      job.title.toLowerCase().includes(lowerQ) || 
      job.company.toLowerCase().includes(lowerQ)
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
            Find your next opportunity
          </h1>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-3xl">
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="q"
                defaultValue={query}
                className="block w-full rounded-xl border-0 bg-white/[0.04] py-4 pl-12 pr-4 text-white ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                placeholder="Job title, keywords, or company"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-violet-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 transition duration-300"
            >
              Search Jobs
            </button>
          </form>
        </div>

        {/* Layout: Sidebar Filters + Job Grid */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Job Type</h3>
              <div className="space-y-3">
                {['Full-time', 'Part-time', 'Contract', 'Hybrid', 'Remote'].map((type) => (
                  <label key={type} className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-violet-600 focus:ring-violet-600 focus:ring-offset-gray-900" />
                    <span className="text-sm text-gray-300">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Salary Range</h3>
              <div className="space-y-3">
                {['Under $50k', '$50k - $100k', '$100k - $150k', '$150k+'].map((range) => (
                  <label key={range} className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-violet-600 focus:ring-violet-600 focus:ring-offset-gray-900" />
                    <span className="text-sm text-gray-300">{range}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-400">Showing <span className="text-white font-medium">{jobs.length}</span> jobs</p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0d0d0f]/90 p-8 hover:border-violet-500/20 group hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)] transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-violet-500/0 opacity-0 blur-2xl group-hover:bg-violet-500/10 group-hover:opacity-100 transition-all duration-500" />

                  <div className="mb-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-1">{job.company}</p>
                    <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors duration-300">
                      {job.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-8">
                    <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.04] px-3.5 py-1.5 text-xs text-gray-300 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-fuchsia-400" />
                      {job.location}
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.04] px-3.5 py-1.5 text-xs text-gray-300 font-medium">
                      <BriefcaseBusiness className="h-3.5 w-3.5 text-fuchsia-400" />
                      {job.type}
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.04] px-3.5 py-1.5 text-xs text-gray-300 font-medium">
                      <DollarSign className="h-3.5 w-3.5 text-fuchsia-400" />
                      {job.salaryRange}
                    </div>
                  </div>

                  <Link
                    href={`/jobs/${job.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-violet-400 transition-colors duration-300"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
              
              {jobs.length === 0 && (
                <div className="col-span-full py-12 text-center border border-white/5 rounded-3xl bg-white/[0.02]">
                  <p className="text-gray-400">No jobs found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
