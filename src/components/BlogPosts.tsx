
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const BlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Serenity of Mountain Lakes',
      content: 'Nestled high in the mountains, these pristine lakes offer a perfect mirror to the sky. The crystal-clear waters reflect towering peaks and fluffy clouds, creating a scene of unparalleled tranquility. Early morning mist dances across the surface, while the first rays of sunlight paint the surrounding peaks in golden hues.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imagePosition: 'left'
    },
    {
      id: 2,
      title: 'Forest Pathways to Discovery',
      content: 'Ancient trees form a natural cathedral overhead, their branches intertwining to create a canopy that filters sunlight into gentle, dappled patterns. The forest floor is carpeted with fallen leaves, each step releasing the earthy scent of nature. These pathways have been traveled by countless creatures, each leaving their own story in the wilderness.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imagePosition: 'right'
    },
    {
      id: 3,
      title: 'Coastal Wonders at Sunset',
      content: 'Where land meets sea, dramatic cliffs stand as silent sentinels against the endless ocean. Waves crash against the rocks below, sending sprays of mist into the air. As the sun sets, the sky transforms into a canvas of oranges, pinks, and purples, reflected in the ever-changing surface of the water.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imagePosition: 'left'
    },
    {
      id: 4,
      title: 'Desert Landscapes Under Starlight',
      content: 'In the vast expanse of the desert, silence reigns supreme. Rolling dunes stretch endlessly toward the horizon, their shapes constantly reshaped by the wind. When night falls, the desert sky reveals a tapestry of stars so brilliant and numerous that they seem close enough to touch, reminding us of our place in the infinite cosmos.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imagePosition: 'right'
    }
  ];

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white drop-shadow-lg">
          Nature's Stories
        </h2>
        
        <div className="space-y-20">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-0">
                <div className={`flex flex-col lg:flex-row ${post.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''} min-h-[400px]`}>
                  {/* Image Section with Sliding Animation */}
                  <div className="lg:w-1/2 relative overflow-hidden group">
                    <div 
                      className="w-full h-64 lg:h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${post.image})`,
                        animation: `slideIn${post.imagePosition === 'left' ? 'Left' : 'Right'} 1s ease-out`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-6 text-gray-800 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {post.content}
                    </p>
                    <div className="mt-8">
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <style>
        {`
          @keyframes slideInLeft {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes slideInRight {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default BlogPosts;
