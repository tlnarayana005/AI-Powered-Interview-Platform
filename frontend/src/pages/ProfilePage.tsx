export default function ProfilePage() {
  return (
    <div className="rounded-3xl bg-white p-10 shadow-soft">
      <h1 className="text-3xl font-semibold">Profile</h1>
      <p className="mt-2 text-slate-600">Manage account settings, update your resume, and review interview history.</p>
      <div className="mt-8 space-y-6">
        <div className="rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Account settings</h2>
          <p className="mt-3 text-slate-500">Enable two-factor auth and update your email preferences.</p>
        </div>
      </div>
    </div>
  );
}
