import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SellItem() {
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const openFileSelector = () => {
    fileInputRef.current?.click();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <motion.div 
        className="max-w-3xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
          variants={itemVariants}
        >
          Sell Your Item
        </motion.h1>
        
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          variants={itemVariants}
        >
          <form className="space-y-6">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Product Images (up to 5)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={image} alt="Product" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transform hover:scale-110 transition-all"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </motion.div>
                ))}
                {images.length < 5 && (
                  <motion.button
                    type="button"
                    onClick={openFileSelector}
                    className="aspect-square rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center cursor-pointer hover:border-emerald-500 dark:hover:border-emerald-400 transform hover:scale-105 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-center">
                      <Upload className="mx-auto h-8 w-8 text-gray-400" />
                      <span className="mt-2 block text-sm text-gray-600 dark:text-gray-400">Add Photo</span>
                    </div>
                  </motion.button>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Product Name
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                placeholder="What are you selling?"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                id="category"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all"
              >
                <option value="">Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="vehicles">Vehicles</option>
                <option value="property">Property</option>
                <option value="sports">Sports Equipment</option>
                <option value="music">Musical Instruments</option>
              </select>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                How Old?
              </label>
              <input
                type="text"
                id="age"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                placeholder="e.g., 2 years"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price (₹)
              </label>
              <input
                type="number"
                id="price"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                placeholder="Enter your price"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                placeholder="Enter your location"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 transition-all"
                placeholder="Describe your item in detail..."
              ></textarea>
            </motion.div>
            
            <motion.button
              type="submit"
              className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Post Advertisement
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}