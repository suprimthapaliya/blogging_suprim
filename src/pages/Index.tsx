
import React from 'react';
import BlogHeader from '../components/BlogHeader';
import ModernPhotoSection from '../components/ModernPhotoSection';
import ModernVideoSection from '../components/ModernVideoSection';
import AboutSection from '../components/AboutSection';
import SlidingPhotosSection from '../components/SlidingPhotosSection';
import SlidingVideosSection from '../components/SlidingVideosSection';
import ModernFooter from '../components/ModernFooter';
import AnimatedBackground from '../components/AnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <BlogHeader />
        <ModernPhotoSection />
        <ModernVideoSection />
        <AboutSection />
        <SlidingPhotosSection />
        <SlidingVideosSection />
        <ModernFooter />
      </div>
    </div>
  );
};

export default Index;
