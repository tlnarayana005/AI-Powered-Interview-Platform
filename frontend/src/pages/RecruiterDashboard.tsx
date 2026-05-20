export default function RecruiterDashboard() {
  return (
    <div className="rounded-3xl bg-white p-10 shadow-soft">
      <h1 className="text-3xl font-semibold">Recruiter dashboard</h1>
      <p className="mt-2 text-slate-600">Create interview rounds, review candidate reports, and manage live coding evaluations.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Schedule interview</h2>
          <p className="mt-3 text-slate-500">Create a new interview round with AI-curated question sets.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Candidate insights</h2>
          <p className="mt-3 text-slate-500">Monitor performance metrics and AI feedback at a glance.</p>
        </div>
      </div>
    </div>
  );
}
