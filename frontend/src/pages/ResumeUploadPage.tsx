export default function ResumeUploadPage() {
  return (
    <div className="rounded-3xl bg-white p-10 shadow-soft">
      <h1 className="text-3xl font-semibold">Upload resume</h1>
      <p className="mt-2 text-slate-600">Upload your resume to receive AI-driven ATS scoring and skill extraction.</p>
      <div className="mt-8 rounded-3xl border border-slate-200 p-6">
        <label className="block text-sm font-medium text-slate-700">Resume file</label>
        <input type="file" className="mt-3 block w-full text-sm text-slate-500" />
      </div>
    </div>
  );
}
