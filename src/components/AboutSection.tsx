
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">About Our Nature Blog</h2>
            <p className="text-lg text-gray-600 text-center leading-relaxed">
              Welcome to our nature blog, where we explore the beauty and wonder of the natural world. 
              From majestic mountains to serene forests, we share stories, photographs, and insights 
              that celebrate our planet's incredible biodiversity and natural phenomena.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
