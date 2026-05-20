import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginUser } from '../services/auth.service';
import { useAuthStore } from '../store/useStore';

export default function LoginPage() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await loginUser(form);
      setAuth(data.accessToken, { id: 'me', fullName: 'Candidate', email: form.email, role: 'candidate' });
      toast.success('Logged in successfully');
      navigate('/candidate');
    } catch (error: any) {
      toast.error(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 shadow-soft">
      <h1 className="text-3xl font-semibold">Sign in to your account</h1>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-indigo-500 focus:outline-none"
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Password</span>
          <input
            type="password"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-indigo-500 focus:outline-none"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-2xl bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
