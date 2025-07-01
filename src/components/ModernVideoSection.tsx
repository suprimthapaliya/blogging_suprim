
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ModernVideoSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const videos = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Mountain Rivers',
      description: 'Experience the powerful flow of mountain rivers carving through ancient landscapes. These rushing waters tell stories of time and geological transformation.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Waterfall Chronicles',
      description: 'Witness the spectacular cascade of waterfalls as they plunge into crystal pools below. Nature\'s own theater of sound and motion in perfect harmony.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Misty Peaks',
      description: 'Journey through ethereal mountain peaks shrouded in morning mist. These mystical heights offer glimpses into nature\'s most serene and contemplative moments.'
    }
  ];

  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-transparent to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 tracking-tight">
          Video Collection
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl transform transition-all duration-700 hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `slideDown 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                    <div className="w-0 h-0 border-l-6 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="p-8 relative">
                <h3 className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                  hoveredIndex === index ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600' : 'text-gray-800'
                }`}>
                  {video.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {video.description}
                </p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300"
                >
                  Watch Now
                </Button>
              </div>
              
              {hoveredIndex === index && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-60px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ModernVideoSection;
