
import React, { useState, useEffect } from 'react';

const SlidingPhotosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Deer in Wild',
      description: 'Graceful deer navigate through their natural habitat, showcasing the elegant beauty of wildlife in pristine environments.'
    },
    {
      src: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Mountain Majesty',
      description: 'Towering peaks reach toward the sky, creating dramatic silhouettes against ever-changing cloudscapes and seasonal weather patterns.'
    },
    {
      src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Aerial Views',
      description: 'Bird\'s eye perspectives reveal the intricate patterns and textures of landscapes, offering unique viewpoints of natural formations.'
    },
    {
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Ocean Waves',
      description: 'Powerful ocean waves crash against pristine shores, demonstrating the endless energy and beauty of marine environments.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 tracking-tight">
          Sliding Gallery
        </h2>
        
        <div className="relative overflow-hidden rounded-3xl shadow-2xl h-96 mb-8">
          <div 
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {photos.map((photo, index) => (
              <div key={index} className="min-w-full h-full relative">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{photo.title}</h3>
                  <p className="text-lg opacity-90">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Thumbnail navigation */}
        <div className="flex justify-center gap-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                currentIndex === index ? 'ring-4 ring-blue-500 scale-110' : 'hover:scale-105'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-blue-500/20" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlidingPhotosSection;
