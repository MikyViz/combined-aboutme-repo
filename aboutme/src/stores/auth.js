import { defineStore } from 'pinia';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081';

async function safeJson(res) {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    if (res.status === 502 || res.status === 503 || res.status === 504) {
      throw new Error('Server is starting up, please try again in a moment.');
    }
    throw new Error(`Request failed (${res.status}). Please try again.`);
  }
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
    fullName: (state) => state.user ? `${state.user.firstName} ${state.user.lastName}` : '',
  },
  actions: {
    async signUp(formData) {
      this.loading = true;
      this.error = null;
      try {
        const res = await fetch(`${API_URL}/users/signUp`, {
          method: 'POST',
          body: formData,
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.msg || 'Sign up failed');
        this._saveUser(data);
        return true;
      } catch (e) {
        this.error = e.message;
        return false;
      } finally {
        this.loading = false;
      }
    },
    async login(email, password) {
      this.loading = true;
      this.error = null;
      try {
        const res = await fetch(`${API_URL}/users/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.msg || 'Login failed');
        this._saveUser(data);
        return true;
      } catch (e) {
        this.error = e.message;
        return false;
      } finally {
        this.loading = false;
      }
    },
    async updateUser(formData) {
      this.loading = true;
      this.error = null;
      try {
        const res = await fetch(`${API_URL}/users/updateUser`, {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${this.token}` },
          body: formData,
        });
        const data = await safeJson(res);
        if (!res.ok) throw new Error(data.msg || 'Update failed');
        this._saveUser({ ...data, token: this.token });
        return true;
      } catch (e) {
        this.error = e.message;
        return false;
      } finally {
        this.loading = false;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    _saveUser(data) {
      this.token = data.token;
      this.user = data;
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));
    },
  },
});
