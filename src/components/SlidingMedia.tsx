
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const SlidingMedia = () => {
  const mediaItems = [
    {
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Ocean Waves',
      type: 'photo'
    },
    {
      src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Mountain Valley',
      type: 'photo'
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Wildlife Paradise',
      type: 'photo'
    },
    {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Tranquil Lake',
      type: 'photo'
    }
  ];

  return (
    <section className="py-16 px-6" style={{
      background: 'rgba(255, 255, 255, 0.95)',
      animation: 'slowBackground 120s ease-in-out infinite'
    }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nature Moments</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {mediaItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden bg-white/90">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <h3 className="text-white font-medium">{item.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      
      <style>
        {`
          @keyframes slowBackground {
            0%, 100% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
          }
        `}
      </style>
    </section>
  );
};

export default SlidingMedia;
