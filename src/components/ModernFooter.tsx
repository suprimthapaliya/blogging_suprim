
import React from 'react';

const ModernFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Thanks message */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Thanks for Visiting
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We hope you enjoyed exploring the wonders of nature with us. 
            Every moment in nature is a step towards discovering something beautiful.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          <div className="w-20 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
        </div>
        
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Nature Blog</h3>
            <p className="text-gray-400">
              Celebrating the beauty and wonder of our natural world through stories, 
              photography, and exploration.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</p>
              <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</p>
              <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Gallery</p>
              <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <p className="text-gray-400 mb-2">Follow our journey</p>
            <div className="flex justify-center md:justify-end gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Nature Blog. Made with ❤️ for nature lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
