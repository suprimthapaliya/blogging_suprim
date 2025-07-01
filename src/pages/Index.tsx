
import React from 'react';
import BlogHeader from '../components/BlogHeader';
import VideoPhotoSection from '../components/VideoPhotoSection';
import AboutSection from '../components/AboutSection';
import FeaturedArticle from '../components/FeaturedArticle';
import SlidingMedia from '../components/SlidingMedia';
import ArticleGrid from '../components/ArticleGrid';
import AnimatedBackground from '../components/AnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <BlogHeader />
        <VideoPhotoSection />
        <AboutSection />
        <FeaturedArticle />
        <SlidingMedia />
        <ArticleGrid />
      </div>
    </div>
  );
};

export default Index;
