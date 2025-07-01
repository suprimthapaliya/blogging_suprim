
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Water background with flowing waves */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-cyan-200"
        style={{
          animation: 'waterFlow 30s ease-in-out infinite'
        }}
      />
      
      {/* Flowing water waves */}
      <div className="absolute inset-0">
        {/* Wave layer 1 */}
        <div 
          className="absolute w-full h-20 opacity-30"
          style={{
            top: '20%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            animation: 'flowWave1 8s linear infinite'
          }}
        />
        
        {/* Wave layer 2 */}
        <div 
          className="absolute w-full h-16 opacity-25"
          style={{
            top: '40%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            animation: 'flowWave2 12s linear infinite 2s'
          }}
        />
        
        {/* Wave layer 3 */}
        <div 
          className="absolute w-full h-24 opacity-20"
          style={{
            top: '60%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            animation: 'flowWave3 15s linear infinite 4s'
          }}
        />
        
        {/* Water ripples */}
        <div 
          className="absolute w-32 h-32 rounded-full opacity-10"
          style={{
            top: '25%',
            left: '15%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.3), transparent)',
            animation: 'ripple1 6s ease-out infinite'
          }}
        />
        
        <div 
          className="absolute w-24 h-24 rounded-full opacity-15"
          style={{
            top: '55%',
            right: '20%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent)',
            animation: 'ripple2 8s ease-out infinite 3s'
          }}
        />
      </div>
      
      {/* Floating bubbles */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-white/10 rounded-full animate-pulse opacity-40" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white/15 rounded-full animate-pulse opacity-30" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 left-1/5 w-8 h-8 bg-white/12 rounded-full animate-pulse opacity-35" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      
      <style>
        {`
          @keyframes waterFlow {
            0%, 100% { background: linear-gradient(to bottom, #60A5FA, #93C5FD, #A5F3FC); }
            50% { background: linear-gradient(to bottom, #3B82F6, #60A5FA, #67E8F9); }
          }
          
          @keyframes flowWave1 {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(100vw) skewX(-15deg); }
          }
          
          @keyframes flowWave2 {
            0% { transform: translateX(-100%) skewX(10deg); }
            100% { transform: translateX(100vw) skewX(10deg); }
          }
          
          @keyframes flowWave3 {
            0% { transform: translateX(-100%) skewX(-8deg); }
            100% { transform: translateX(100vw) skewX(-8deg); }
          }
          
          @keyframes ripple1 {
            0% { transform: scale(0.8); opacity: 0.3; }
            50% { transform: scale(1.2); opacity: 0.1; }
            100% { transform: scale(1.6); opacity: 0; }
          }
          
          @keyframes ripple2 {
            0% { transform: scale(0.6); opacity: 0.4; }
            50% { transform: scale(1.1); opacity: 0.2; }
            100% { transform: scale(1.4); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;
