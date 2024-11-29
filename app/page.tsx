'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

export default function LandingPage() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard'); 
    }
  }, [isSignedIn, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-blue-600"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span className="text-xl font-bold text-blue-600">InterviewPro</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
            <li><Link href="/features" className="text-gray-600 hover:text-blue-600">Features</Link></li>
            <li><Link href="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Ace Your Next Interview with AI</h1>
          <p className="text-xl text-gray-600 mb-8">Personalized questions, practice sessions, and instant feedback to boost your confidence.</p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="contained"
              color="primary"
              component={Link}
              href="/auth/sign-up"
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              href="/auth/sign-in"
            >
              Sign In
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">AI-Generated Questions</h2>
            <p className="text-gray-600">Get tailored interview questions based on your industry and experience level.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">Recorded Practice</h2>
            <p className="text-gray-600">Record your answers and review them to improve your delivery and confidence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">Instant AI Feedback</h2>
            <p className="text-gray-600">Receive immediate insights on your answers to refine your interview skills.</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Land Your Dream Job?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of job seekers who have improved their interview skills with InterviewPro.</p>
          <Button
            variant="contained"
            size="large"
            color="primary"
            component={Link}
            href="/auth/sign-up"
          >
            Get Started for Free
          </Button>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 mt-12 text-center text-gray-600">
        <p>&copy; 2024 InterviewPro. All rights reserved.</p>
      </footer>
    </div>
  );
}
