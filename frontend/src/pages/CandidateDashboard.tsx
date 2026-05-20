export default function CandidateDashboard() {
  return (
    <div className="rounded-3xl bg-white p-10 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Candidate dashboard</h1>
          <p className="mt-2 text-slate-600">Track your interview progress, review AI feedback, and join live sessions.</p>
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 p-6">
          <p className="text-sm uppercase text-slate-500">Next interview</p>
          <h2 className="mt-4 text-2xl font-semibold">Mock Interview #12</h2>
          <p className="mt-2 text-slate-500">Scheduled for tomorrow at 10:00 AM</p>
        </div>
        <div className="rounded-3xl border border-slate-200 p-6">
          <p className="text-sm uppercase text-slate-500">Skill growth</p>
          <h2 className="mt-4 text-2xl font-semibold">React & Data Structures</h2>
          <p className="mt-2 text-slate-500">AI suggests practicing behavioral responses.</p>
        </div>
      </div>
    </div>
  );
}
