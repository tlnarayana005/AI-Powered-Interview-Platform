export default function AnalyticsPage() {
  return (
    <div className="rounded-3xl bg-white p-10 shadow-soft">
      <h1 className="text-3xl font-semibold">Analytics</h1>
      <p className="mt-2 text-slate-600">Explore candidate performance, interview success rates, and AI evaluation trends.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Interview completion</h2>
          <p className="mt-3 text-slate-500">92% of candidates completed the mock session.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">AI feedback score</h2>
          <p className="mt-3 text-slate-500">Average communication score: 8.4/10.</p>
        </div>
      </div>
    </div>
  );
}
