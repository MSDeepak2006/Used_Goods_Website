import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About PrelovedMarket</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            PrelovedMarket is dedicated to creating a sustainable future by promoting the reuse and recycling of pre-owned items. 
            We believe that every item deserves a second chance, and every purchase made on our platform contributes to reducing waste 
            and environmental impact.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What Sets Us Apart</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6">
            <li>Verified sellers and secure transactions</li>
            <li>Quality-checked pre-owned items</li>
            <li>Sustainable shopping practices</li>
            <li>Community-driven marketplace</li>
            <li>Competitive pricing</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">50,000+</p>
              <p className="text-gray-600 dark:text-gray-300">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">100,000+</p>
              <p className="text-gray-600 dark:text-gray-300">Items Sold</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">500+</p>
              <p className="text-gray-600 dark:text-gray-300">Cities Covered</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Deepak MS</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-300">
                A visionary entrepreneur with a passion for sustainable commerce and technology.
                Deepak has led PrelovedMarket from its inception, focusing on creating a user-friendly
                platform that makes second-hand shopping accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Development Team</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our talented team of developers and designers work tirelessly to create and maintain
                a seamless shopping experience for our users. We're constantly innovating and improving
                our platform based on user feedback and market trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}