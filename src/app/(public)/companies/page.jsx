import Link from "next/link";
import { getCompanies } from "@/lib/data";
import { Building2, MapPin, Users } from "lucide-react";

export default async function CompaniesPage({ searchParams }) {
  const params = await searchParams;
  const industry = params?.industry || "All";
  
  let companies = await getCompanies();
  
  if (industry !== "All") {
    companies = companies.filter(c => c.industry === industry);
  }

  const industries = ["All", "Fintech", "AI", "Developer Tools", "E-Commerce", "Healthtech"];

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
            Top Companies Hiring Now
          </h1>
          
          <div className="flex flex-wrap gap-3">
            {industries.map((ind) => (
              <Link
                key={ind}
                href={ind === "All" ? "/companies" : `/companies?industry=${ind}`}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                  industry === ind 
                    ? "bg-violet-600 text-white" 
                    : "bg-white/[0.04] border border-white/[0.06] text-gray-300 hover:bg-white/[0.08]"
                }`}
              >
                {ind}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <Link key={company.id} href={`/companies/${company.id}`} className="block group">
              <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0d0d0f]/90 p-8 hover:border-violet-500/20 group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)] transition-all duration-300">
                <div className="absolute top-0 right-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-violet-500/0 opacity-0 blur-2xl group-hover:bg-violet-500/10 group-hover:opacity-100 transition-all duration-500" />

                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {company.logo ? (
                      <img src={company.logo} alt={company.name} className="h-8 w-8 object-contain" />
                    ) : (
                      <Building2 className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                  <span className="inline-flex items-center rounded-full bg-fuchsia-400/10 px-2.5 py-1 text-xs font-medium text-fuchsia-400">
                    {company.openJobs} jobs
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors duration-300 mb-2">
                  {company.name}
                </h3>
                
                <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                  {company.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {company.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    {company.employees}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {companies.length === 0 && (
            <div className="col-span-full py-12 text-center border border-white/5 rounded-3xl bg-white/[0.02]">
              <p className="text-gray-400">No companies found for this industry.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
