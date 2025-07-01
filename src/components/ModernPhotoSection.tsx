
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ModernPhotoSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Wildlife Symphony',
      description: 'Discover the harmonious dance of nature where deer roam freely through pristine forests. These majestic creatures represent the untamed beauty of our natural world.'
    },
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Forest Illumination',
      description: 'Golden rays pierce through ancient trees, creating a magical pathway of light and shadow. This enchanting forest scene captures nature\'s own artistry.'
    },
    {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Serene Waters',
      description: 'Crystal clear waters reflect the surrounding wilderness, creating a perfect mirror of tranquility. This peaceful lake embodies nature\'s calming essence.'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 tracking-tight">
          Photo Gallery
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl transform transition-all duration-700 hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `slideUp 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-8 relative">
                <h3 className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                  hoveredIndex === index ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' : 'text-gray-800'
                }`}>
                  {photo.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {photo.description}
                </p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-300"
                >
                  Read More
                </Button>
              </div>
              
              {hoveredIndex === index && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(60px);
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

export default ModernPhotoSection;
