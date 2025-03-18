import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  image: string;
  itemCount: number;
}

export default function CategoryCard({ title, image, itemCount }: CategoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-0 p-4 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm opacity-90">{itemCount.toLocaleString()} items</p>
        </div>
      </div>
      <div className="absolute right-4 top-4 rounded-full bg-white/90 p-2 opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowRight className="h-5 w-5 text-gray-700" />
      </div>
    </div>
  );
}