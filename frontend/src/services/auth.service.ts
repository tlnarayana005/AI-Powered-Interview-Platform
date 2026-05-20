import api from './api';

export async function loginUser(values: { email: string; password: string }) {
  const response = await api.post('/auth/login', values);
  return response.data;
}

export async function registerUser(values: { fullName: string; email: string; password: string; role: string }) {
  const response = await api.post('/auth/register', values);
  return response.data;
}

export async function fetchProfile() {
  const response = await api.get('/users/me');
  return response.data;
}
