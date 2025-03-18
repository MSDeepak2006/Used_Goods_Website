import React, { useState } from 'react';
import { Package2, ShoppingCart, User, Sun, Moon, ArrowLeft, Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/categories?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm relative">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate(-1)} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Package2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </motion.div>
            <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">PrelovedMarket</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link>
          <Link to="/categories" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Categories</Link>
          <Link to="/messages" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Messages</Link>
          <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About Us</Link>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <Search className="h-6 w-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/signin" 
              className="flex items-center space-x-2 bg-emerald-600 dark:bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600"
            >
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </motion.div>
        </div>
      </nav>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50"
          >
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto p-4">
              <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
                <Search className="h-5 w-5 text-gray-400 ml-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for items..."
                  className="ml-2 flex-1 bg-transparent outline-none text-gray-900 dark:text-white"
                  autoFocus
                />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}