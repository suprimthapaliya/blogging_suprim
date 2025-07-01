
import React, { useState, useEffect } from 'react';

const SlidingVideosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const videos = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'River Journey',
      description: 'Follow the meandering path of pristine mountain rivers as they carve through valleys, creating life-giving corridors through wilderness.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Waterfall Power',
      description: 'Experience the raw power and beauty of cascading waterfalls, where gravity transforms mountain streams into spectacular displays.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Cloud Dance',
      description: 'Watch as clouds weave through mountain peaks, creating ever-changing patterns of light, shadow, and atmospheric drama.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Forest Mystique',
      description: 'Discover the mysterious beauty of ancient forests, where filtered sunlight creates magical pathways through towering trees.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 tracking-tight">
          Video Carousel
        </h2>
        
        <div className="relative overflow-hidden rounded-3xl shadow-2xl h-96 mb-8">
          <div 
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {videos.map((video, index) => (
              <div key={index} className="min-w-full h-full relative group cursor-pointer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                    <div className="w-0 h-0 border-l-8 border-l-gray-800 border-t-6 border-t-transparent border-b-6 border-b-transparent ml-2" />
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{video.title}</h3>
                  <p className="text-lg opacity-90">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Thumbnail navigation */}
        <div className="flex justify-center gap-4">
          {videos.map((video, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                currentIndex === index ? 'ring-4 ring-purple-500 scale-110' : 'hover:scale-105'
              }`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-2 border-l-gray-800 border-t-1 border-t-transparent border-b-1 border-b-transparent ml-0.5" />
                </div>
              </div>
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-purple-500/20" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlidingVideosSection;
