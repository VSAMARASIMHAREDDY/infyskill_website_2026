'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
    setFeedback({ message: 'Creating account...', type: '' });

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      setFeedback({ message: data.message || 'Signup successful. Redirecting to login...', type: 'success' });
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      
      setTimeout(() => {
        router.push('/login');
      }, 1200);
    } catch (error: any) {
      setFeedback({ message: error.message, type: 'error' });
    }
  };

  return (
    <>
      <Navbar />
      
      <section className="auth-hero">
        <div className="container">
          <div className="auth-card">
            <h1>Create Your Account</h1>
            <p>Join thousands of learners and start building your future.</p>
            <form id="signupForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-full">Sign Up</button>
            </form>
            <p className="auth-switch">
              Already have an account? <a href="/login">Log in</a>
            </p>
            {feedback.message && (
              <div className={`auth-feedback ${feedback.type}`} id="signupFeedback">
                {feedback.message}
              </div>
            )}
          </div>
          <div className="auth-side">
            <img src="/images/image11.jpg" alt="Learning" />
            <div className="auth-side-content">
              <h2>Personalized Learning</h2>
              <p>Receive tailored course recommendations based on your goals.</p>
              <ul className="auth-benefits">
                <li><i className="fas fa-check-circle"></i> Live workshops every week</li>
                <li><i className="fas fa-check-circle"></i> Career mentorship and guidance</li>
                <li><i className="fas fa-check-circle"></i> Project-based learning modules</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}