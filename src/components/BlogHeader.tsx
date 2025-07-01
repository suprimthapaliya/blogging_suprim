import React from 'react';
import { Button } from '@/components/ui/button';
const BlogHeader = () => {
  return <header className="relative py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Suprim Thapaliya Blogs</h1>
          <nav className="flex gap-6">
            <Button variant="ghost" className="text-lg">Home</Button>
            <Button variant="ghost" className="text-lg">About</Button>
            <Button variant="ghost" className="text-lg">Contact</Button>
          </nav>
        </div>
        
        {/* Search bar */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <input type="text" placeholder="Search articles..." className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90" />
          </div>
        </div>
      </div>
    </header>;
};
export default BlogHeader;