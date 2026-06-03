import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";

export default function PostJobPage() {
  return (
    <div className="max-w-4xl mx-auto text-white pb-12">
      <Link href="/dashboard/recruiter/jobs" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Jobs
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Post a New Job</h1>
        <p className="text-gray-400">Fill out the details below to create a new job listing.</p>
      </div>

      <form className="space-y-8">
        {/* Job Info */}
        <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
          <h2 className="text-lg font-medium text-white mb-6 border-b border-white/5 pb-4">Job Information</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">Job Title</label>
              <input type="text" placeholder="e.g. Senior Frontend Engineer" className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Job Category</label>
              <select className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm appearance-none">
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="product">Product</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Job Type</label>
              <select className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm appearance-none">
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="hybrid">Hybrid</option>
                <option value="remote">Remote</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
              <div className="flex gap-4 items-center">
                <input type="text" placeholder="City, Country" className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm" />
                <label className="flex items-center gap-2 whitespace-nowrap shrink-0">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-violet-600" />
                  <span className="text-sm text-gray-300">Fully Remote</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Min Salary</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">$</span>
                <input type="number" placeholder="90,000" className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 pl-8 pr-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Max Salary</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">$</span>
                <input type="number" placeholder="130,000" className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 pl-8 pr-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm" />
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">Application Deadline</label>
              <input type="date" className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm" style={{ colorScheme: 'dark' }} />
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
          <h2 className="text-lg font-medium text-white mb-6 border-b border-white/5 pb-4">Job Description</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">About the Role</label>
              <textarea rows={4} placeholder="Describe the role..." className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Responsibilities</label>
              <textarea rows={4} placeholder="List key responsibilities..." className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Requirements</label>
              <textarea rows={4} placeholder="List requirements..." className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <Link href="/dashboard/recruiter/jobs" className="px-6 py-3 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] text-white text-sm font-semibold rounded-xl transition">
            Cancel
          </Link>
          <button type="button" className="px-6 py-3 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] text-white text-sm font-semibold rounded-xl transition">
            Save as Draft
          </button>
          <button type="submit" className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}
