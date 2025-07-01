
import React from 'react';
import BlogHeader from '../components/BlogHeader';
import AboutSection from '../components/AboutSection';
import BlogPosts from '../components/BlogPosts';
import ModernFooter from '../components/ModernFooter';
import AnimatedBackground from '../components/AnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <BlogHeader />
        <BlogPosts />
        <AboutSection />
        <ModernFooter />
      </div>
    </div>
  );
};

export default Index;
