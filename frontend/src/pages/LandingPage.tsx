import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="mx-auto max-w-6xl py-24">
      <section className="rounded-3xl bg-white p-12 shadow-soft">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">AI-powered interview readiness</span>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-900">Build confidence for every technical interview.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Mock interviews, live coding rooms, recruiter workflows, and AI feedback for teams that need reliable hiring outcomes.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/register" className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-700">
                Get started
              </Link>
              <Link to="/login" className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Sign in
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-950 p-10 text-white shadow-2xl">
            <h2 className="text-2xl font-semibold">Recruiter-ready analytics</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>Interview sequence scheduling across teams</li>
              <li>AI scoring, strengths & weakness profiling</li>
              <li>Live code collaboration with automated evaluation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
