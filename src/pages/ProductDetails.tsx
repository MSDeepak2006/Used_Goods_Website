import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { ShoppingCart, CreditCard } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const product = Object.values(products)
    .flat()
    .find(item => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-900 dark:text-white text-xl">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-6">
              ₹{product.price.toFixed(2)}
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h2>
                <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Details</h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Age: {product.age}</li>
                  <li>Location: {product.location}</li>
                  <li>Seller: {product.seller}</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center space-x-2 bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              
              <button className="w-full flex items-center justify-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                <CreditCard className="h-5 w-5" />
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}