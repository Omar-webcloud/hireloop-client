import { User, Mail } from "lucide-react";

export default function RecruiterSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Account Settings</h1>
        <p className="text-gray-400">Update your personal recruiter account settings.</p>
      </div>

      <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
        <h2 className="text-lg font-medium text-white mb-6">Personal Information</h2>
        
        <form className="space-y-6">
          <div className="flex items-center gap-6 mb-6">
            <div className="h-20 w-20 rounded-full bg-violet-600/20 border border-violet-500/20 flex items-center justify-center text-2xl font-semibold text-violet-400">
              RJ
            </div>
            <button type="button" className="px-4 py-2 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] rounded-xl text-sm font-medium transition">
              Change Avatar
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <User className="h-4 w-4 text-gray-500" />
                </div>
                <input type="text" defaultValue="Rachel Jones" className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 pl-11 pr-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Mail className="h-4 w-4 text-gray-500" />
                </div>
                <input type="email" defaultValue="rachel@technova.example.com" disabled className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 pl-11 pr-4 text-gray-500 ring-1 ring-inset ring-white/10 sm:text-sm cursor-not-allowed" />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button type="submit" className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 rounded-3xl border border-red-500/20 bg-[#0d0d0f] p-8">
        <h2 className="text-lg font-medium text-white mb-2">Danger Zone</h2>
        <p className="text-sm text-gray-400 mb-6">Irreversible actions for your account.</p>
        
        <button className="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 text-sm font-semibold rounded-xl transition border border-red-500/20">
          Delete Account
        </button>
      </div>
    </div>
  );
}
