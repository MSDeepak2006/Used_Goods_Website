import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MyAds() {
  // This is a placeholder component. The actual implementation will require MongoDB integration
  // for storing and retrieving user's advertisements.
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">My Advertisements</h1>
          <Link
            to="/sell"
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Post New Ad
          </Link>
        </motion.div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <p className="text-gray-600 dark:text-gray-300">
            Your advertisements will appear here after signing in. This feature requires backend integration.
          </p>
        </div>
      </div>
    </div>
  );
}