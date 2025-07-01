
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ArticleGrid = () => {
  const articles = [
    {
      title: 'Hidden Waterfalls of the Pacific Northwest',
      excerpt: 'Explore the most breathtaking hidden waterfalls in the lush forests of the Pacific Northwest.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Bird Migration Patterns Across Continents',
      excerpt: 'Understanding the incredible journeys birds take across vast distances during migration seasons.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'The Secret Life of Forest Ecosystems',
      excerpt: 'Dive deep into the complex relationships that make forest ecosystems thrive.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Coastal Erosion and Marine Conservation',
      excerpt: 'How changing coastlines affect marine life and what we can do to help.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="py-16 px-6" style={{
      background: 'rgba(255, 255, 255, 0.98)',
      animation: 'ultraSlowMove 180s ease-in-out infinite'
    }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{article.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <style>
        {`
          @keyframes ultraSlowMove {
            0%, 100% { transform: translateX(0) translateY(0); }
            25% { transform: translateX(-2px) translateY(-1px); }
            50% { transform: translateX(1px) translateY(2px); }
            75% { transform: translateX(2px) translateY(-2px); }
          }
        `}
      </style>
    </section>
  );
};

export default ArticleGrid;
