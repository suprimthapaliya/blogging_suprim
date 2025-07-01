
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const VideoPhotoSection = () => {
  const mediaItems = [
    {
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Mountain Rivers'
    },
    {
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Forest Lights'
    },
    {
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Peaceful Waters'
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nature Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-white/90">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoPhotoSection;
