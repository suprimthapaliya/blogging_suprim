
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Waterfall background with rocky cliff and cascading water */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-700 via-gray-600 to-blue-400"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(75, 85, 99, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(55, 65, 81, 0.7) 0%, transparent 40%),
            linear-gradient(to bottom, #374151 0%, #4B5563 30%, #6B7280 60%, #3B82F6 100%)
          `,
          animation: 'waterfallFlow 25s ease-in-out infinite'
        }}
      />
      
      {/* Cascading water streams */}
      <div className="absolute inset-0">
        {/* Main waterfall stream 1 */}
        <div 
          className="absolute w-16 h-full opacity-60"
          style={{
            left: '15%',
            top: '0%',
            animation: 'waterfall1 3s linear infinite'
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-white/40 via-blue-200/50 to-blue-300/60 rounded-sm"></div>
        </div>
        
        {/* Main waterfall stream 2 */}
        <div 
          className="absolute w-12 h-full opacity-50"
          style={{
            left: '25%',
            top: '0%',
            animation: 'waterfall2 3.5s linear infinite 0.5s'
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-white/30 via-blue-100/40 to-blue-200/50 rounded-sm"></div>
        </div>
        
        {/* Smaller cascade stream */}
        <div 
          className="absolute w-8 h-full opacity-40"
          style={{
            left: '65%',
            top: '0%',
            animation: 'waterfall3 4s linear infinite 1s'
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-white/25 via-blue-50/30 to-blue-100/40 rounded-sm"></div>
        </div>
      </div>
      
      {/* Water mist and spray effects */}
      <div className="absolute inset-0">
        {/* Mist cloud 1 */}
        <div 
          className="absolute w-32 h-24 opacity-20"
          style={{
            bottom: '20%',
            left: '10%',
            animation: 'mistFloat1 8s ease-in-out infinite'
          }}
        >
          <div className="w-full h-full bg-white/30 rounded-full blur-sm"></div>
        </div>
        
        {/* Mist cloud 2 */}
        <div 
          className="absolute w-24 h-16 opacity-15"
          style={{
            bottom: '15%',
            left: '20%',
            animation: 'mistFloat2 10s ease-in-out infinite 2s'
          }}
        >
          <div className="w-full h-full bg-white/25 rounded-full blur-sm"></div>
        </div>
        
        {/* Mist cloud 3 */}
        <div 
          className="absolute w-28 h-20 opacity-18"
          style={{
            bottom: '25%',
            right: '30%',
            animation: 'mistFloat3 12s ease-in-out infinite 4s'
          }}
        >
          <div className="w-full h-full bg-white/20 rounded-full blur-sm"></div>
        </div>
      </div>
      
      {/* Water droplets and splash effects */}
      <div className="absolute bottom-10 left-1/4 w-4 h-4 bg-blue-200/40 rounded-full animate-pulse opacity-50" style={{ animationDelay: '0s', animationDuration: '2s' }} />
      <div className="absolute bottom-12 left-1/3 w-3 h-3 bg-blue-100/30 rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
      <div className="absolute bottom-8 right-1/3 w-5 h-5 bg-white/30 rounded-full animate-pulse opacity-35" style={{ animationDelay: '1s', animationDuration: '3s' }} />
      
      <style>
        {`
          @keyframes waterfallFlow {
            0%, 100% { 
              background-image: 
                radial-gradient(circle at 20% 30%, rgba(75, 85, 99, 0.8) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(55, 65, 81, 0.7) 0%, transparent 40%),
                linear-gradient(to bottom, #374151 0%, #4B5563 30%, #6B7280 60%, #3B82F6 100%);
            }
            50% { 
              background-image: 
                radial-gradient(circle at 25% 35%, rgba(75, 85, 99, 0.9) 0%, transparent 45%),
                radial-gradient(circle at 75% 25%, rgba(55, 65, 81, 0.8) 0%, transparent 35%),
                linear-gradient(to bottom, #2D3748 0%, #374151 30%, #4A5568 60%, #2563EB 100%);
            }
          }
          
          @keyframes waterfall1 {
            0% { transform: translateY(-20px) scaleY(0.9); opacity: 0.6; }
            50% { transform: translateY(0px) scaleY(1.1); opacity: 0.8; }
            100% { transform: translateY(20px) scaleY(0.95); opacity: 0.6; }
          }
          
          @keyframes waterfall2 {
            0% { transform: translateY(-15px) scaleY(0.95); opacity: 0.5; }
            50% { transform: translateY(5px) scaleY(1.05); opacity: 0.7; }
            100% { transform: translateY(15px) scaleY(0.9); opacity: 0.5; }
          }
          
          @keyframes waterfall3 {
            0% { transform: translateY(-10px) scaleY(0.8); opacity: 0.4; }
            50% { transform: translateY(10px) scaleY(1.2); opacity: 0.6; }
            100% { transform: translateY(25px) scaleY(0.85); opacity: 0.4; }
          }
          
          @keyframes mistFloat1 {
            0%, 100% { transform: translateX(-10px) translateY(0px) scale(1); opacity: 0.2; }
            25% { transform: translateX(5px) translateY(-5px) scale(1.1); opacity: 0.3; }
            50% { transform: translateX(15px) translateY(-10px) scale(0.9); opacity: 0.25; }
            75% { transform: translateX(0px) translateY(-5px) scale(1.05); opacity: 0.2; }
          }
          
          @keyframes mistFloat2 {
            0%, 100% { transform: translateX(0px) translateY(0px) scale(1); opacity: 0.15; }
            33% { transform: translateX(-8px) translateY(-8px) scale(1.2); opacity: 0.25; }
            66% { transform: translateX(12px) translateY(-3px) scale(0.85); opacity: 0.2; }
          }
          
          @keyframes mistFloat3 {
            0%, 100% { transform: translateX(5px) translateY(0px) scale(1); opacity: 0.18; }
            40% { transform: translateX(-10px) translateY(-12px) scale(1.15); opacity: 0.28; }
            80% { transform: translateX(8px) translateY(-6px) scale(0.9); opacity: 0.22; }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;
