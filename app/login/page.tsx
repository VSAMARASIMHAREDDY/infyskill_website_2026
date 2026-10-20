'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('infyskill_token');
    if (token) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback({ message: 'Signing in...', type: '' });

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (!data.token || !data.user) {
        throw new Error('Login failed');
      }

      localStorage.setItem('infyskill_token', data.token);
      localStorage.setItem('infyskill_user', JSON.stringify(data.user));
      setFeedback({ message: 'Login successful. Redirecting...', type: 'success' });
      
      setTimeout(() => {
        router.push('/dashboard');
      }, 800);
    } catch (error: any) {
      localStorage.removeItem('infyskill_token');
      localStorage.removeItem('infyskill_user');
      setFeedback({ message: error.message, type: 'error' });
    }
  };

  return (
    <>
      <Navbar />
      
      <section className="auth-hero">
        <div className="container">
          <div className="auth-card">
            <h1>Welcome Back</h1>
            <p>Log in to access your dashboard and continue learning.</p>
            <form id="loginForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="auth-meta">
                <a href="/forgot-password">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-primary btn-full">Login</button>
            </form>
            <p className="auth-switch">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
            {feedback.message && (
              <div className={`auth-feedback ${feedback.type}`} id="loginFeedback">
                {feedback.message}
              </div>
            )}
          </div>
          <div className="auth-side">
            <img src="/images/home.webp" alt="Learning" />
            <div className="auth-side-content">
              <h2>Stay Ahead</h2>
              <p>Access exclusive courses, personalized recommendations, and mentorship opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}