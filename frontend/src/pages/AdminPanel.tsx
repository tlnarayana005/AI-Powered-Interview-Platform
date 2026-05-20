export default function AdminPanel() {
  return (
    <div className="rounded-3xl bg-white p-10 shadow-soft">
      <h1 className="text-3xl font-semibold">Admin monitoring</h1>
      <p className="mt-2 text-slate-600">Track platform health, audit events, and enable feature flags across tenants.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">System health</h2>
          <p className="mt-3 text-slate-500">All services are operational.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Active sessions</h2>
          <p className="mt-3 text-slate-500">Currently 14 live interviews.</p>
        </div>
      </div>
    </div>
  );
}
