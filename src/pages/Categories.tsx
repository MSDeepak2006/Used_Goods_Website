import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: '📱',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80',
    subcategories: ['Phones', 'Laptops', 'Tablets', 'Cameras', 'Accessories']
  },
  {
    id: 'vehicles',
    name: 'Vehicles',
    icon: '🚗',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80',
    subcategories: ['Cars', 'Bikes', 'Scooters', 'Spare Parts']
  },
  {
    id: 'property',
    name: 'Property',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    subcategories: ['Houses', 'Apartments', 'Land', 'Commercial']
  },
  {
    id: 'furniture',
    name: 'Furniture',
    icon: '🪑',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
    subcategories: ['Sofa', 'Beds', 'Tables', 'Chairs', 'Storage']
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: '👕',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
    subcategories: ['Men', 'Women', 'Kids', 'Accessories']
  },
  {
    id: 'books',
    name: 'Books & Hobbies',
    icon: '📚',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80',
    subcategories: ['Books', 'Sports', 'Music', 'Art']
  },
  {
    id: 'pets',
    name: 'Pets',
    icon: '🐕',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80',
    subcategories: ['Dogs', 'Cats', 'Fish', 'Pet Supplies']
  },
  {
    id: 'others',
    name: 'Others',
    icon: '📦',
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80',
    subcategories: ['Miscellaneous', 'Custom Items', 'Unique Finds']
  }
];

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.subcategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Browse Categories</h1>
          
          <div className="relative">
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <Search className="h-5 w-5 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg focus:outline-none dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="relative h-48">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{category.icon}</span>
                      <h2 className="text-xl font-semibold text-white">{category.name}</h2>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory}>
                        <Link
                          to={`/category/${category.id}/${subcategory.toLowerCase()}`}
                          className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center space-x-2"
                        >
                          <span>•</span>
                          <span>{subcategory}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}