import React from 'react';
import { Trash2 } from 'lucide-react';

const cartItems = [
  {
    id: 1,
    name: "MacBook Pro 2021",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80",
    quantity: 1
  },
  {
    id: 5,
    name: "Designer Wedding Lehenga",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80",
    quantity: 1
  }
];

export default function Cart() {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                  <div className="ml-6 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold">₹{item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <select
                        value={item.quantity}
                        className="block w-20 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                      <button className="ml-4 text-red-500 hover:text-red-600">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Shipping</span>
                <span>₹50.00</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-600 my-4"></div>
              <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
                <span>Total</span>
                <span>₹{(total + 50).toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}