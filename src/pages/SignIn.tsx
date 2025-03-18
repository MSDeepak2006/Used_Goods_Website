import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { Package2, Mail } from 'lucide-react';

export default function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-8">
        <Package2 className="h-12 w-12 text-emerald-600" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          {isSignIn ? 'Sign in to your account' : 'Create your account'}
        </h2>
      </div>

      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setIsSignIn(true)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isSignIn
                ? 'bg-emerald-600 text-white'
                : 'text-gray-500 hover:text-emerald-600'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              !isSignIn
                ? 'bg-emerald-600 text-white'
                : 'text-gray-500 hover:text-emerald-600'
            }`}
          >
            Sign Up
          </button>
        </div>

        <form className="space-y-6">
          {!isSignIn && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white"
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
            />
          </div>

          {!isSignIn && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white"
                placeholder="••••••••"
              />
            </div>
          )}

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="your-recaptcha-site-key"
              onChange={handleRecaptchaChange}
              theme="light"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              {isSignIn ? 'Sign In' : 'Create Account'}
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <Mail className="h-5 w-5 mr-2" />
              Continue with Google
            </button>
          </div>

          {isSignIn ? (
            <div className="text-sm text-center">
              <Link to="/forgot-password" className="font-medium text-emerald-600 hover:text-emerald-500">
                Forgot your password?
              </Link>
            </div>
          ) : (
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              By signing up, you agree to our{' '}
              <Link to="/terms" className="font-medium text-emerald-600 hover:text-emerald-500">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="font-medium text-emerald-600 hover:text-emerald-500">
                Privacy Policy
              </Link>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}