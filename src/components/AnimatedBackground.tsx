
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Nature background with birds and water */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          animation: 'slowMove 30s ease-in-out infinite'
        }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/80" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/30 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s', animationDuration: '8s' }} />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-200/30 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s', animationDuration: '10s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-yellow-200/30 rounded-full animate-bounce opacity-60" style={{ animationDelay: '4s', animationDuration: '12s' }} />
      
      <style>
        {`
          @keyframes slowMove {
            0%, 100% { transform: translateX(0) translateY(0) scale(1); }
            25% { transform: translateX(-10px) translateY(-5px) scale(1.02); }
            50% { transform: translateX(5px) translateY(10px) scale(0.98); }
            75% { transform: translateX(10px) translateY(-10px) scale(1.01); }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;
