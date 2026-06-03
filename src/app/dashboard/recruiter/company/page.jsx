import { Building2, MapPin, Globe, Users, Image as ImageIcon } from "lucide-react";

export default function RecruiterCompanyPage() {
  return (
    <div className="max-w-4xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Company Profile</h1>
        <p className="text-gray-400">Manage your company's public profile on HireLoop.</p>
      </div>

      <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8 mb-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-6">
          <h2 className="text-lg font-medium text-white">Company Registration Status</h2>
          <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-400">
            Approved
          </span>
        </div>

        <form className="space-y-6">
          <div className="flex items-center gap-6 mb-8 border-b border-white/5 pb-8">
            <div className="h-24 w-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Building2 className="h-10 w-10 text-gray-400" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-400 mb-2">Company Logo</label>
              <div className="flex items-center gap-4">
                <button type="button" className="px-4 py-2 flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] rounded-xl text-sm font-medium transition">
                  <ImageIcon className="h-4 w-4" /> Upload Image
                </button>
                <span className="text-xs text-gray-500">PNG, JPG up to 5MB (Square recommended)</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
              <input type="text" defaultValue="TechNova Inc." className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Industry</label>
              <select defaultValue="fintech" className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm appearance-none">
                <option value="fintech">Fintech</option>
                <option value="ai">AI / Machine Learning</option>
                <option value="devtools">Developer Tools</option>
                <option value="ecommerce">E-Commerce</option>
                <option value="healthtech">Healthtech</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Website URL</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Globe className="h-4 w-4 text-gray-500" />
                </div>
                <input type="url" defaultValue="https://technova.example.com" className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 pl-11 pr-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Location (HQ)</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <MapPin className="h-4 w-4 text-gray-500" />
                </div>
                <input type="text" defaultValue="San Francisco, CA" className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 pl-11 pr-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">Employee Count</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Users className="h-4 w-4 text-gray-500" />
                </div>
                <select defaultValue="50-200" className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 pl-11 pr-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm appearance-none">
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="50-200">50-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">Company Description</label>
              <textarea rows={5} defaultValue="Leading the future of digital payments. We are constantly looking for top talent to join our remote-first team." className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm" />
            </div>
          </div>

          <div className="pt-6 flex justify-end">
            <button type="submit" className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition">
              Save Company Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
