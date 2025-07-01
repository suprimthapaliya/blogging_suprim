
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturedArticle = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Article</h2>
        <Card className="overflow-hidden bg-white/90 backdrop-blur-sm">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Featured Article"
              className="w-full h-64 object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-2xl">The Mystical Beauty of Foggy Mountain Peaks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              Discover the ethereal beauty of mountain peaks shrouded in morning mist. 
              These mystical landscapes offer a glimpse into nature's most serene moments, 
              where earth meets sky in a dance of clouds and stone. Join us as we explore 
              the magic that unfolds when fog embraces the mountains.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedArticle;
