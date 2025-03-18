import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  avatar: string;
  quote: string;
  rating: number;
}

export default function TestimonialCard({ name, avatar, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <div className="flex items-center">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}