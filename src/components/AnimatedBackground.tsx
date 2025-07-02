
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* River background with flowing water effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200"
        style={{
          animation: 'riverFlow 20s ease-in-out infinite'
        }}
      />
      
      {/* Flowing water ripples */}
      <div className="absolute inset-0">
        {/* Water ripple 1 */}
        <div 
          className="absolute w-32 h-8 opacity-30"
          style={{
            top: '25%',
            left: '-10%',
            animation: 'flowRipple1 15s linear infinite'
          }}
        >
          <div className="w-full h-full bg-white/20 rounded-full transform skew-x-45"></div>
        </div>
        
        {/* Water ripple 2 */}
        <div 
          className="absolute w-24 h-6 opacity-25"
          style={{
            top: '45%',
            left: '-8%',
            animation: 'flowRipple2 18s linear infinite 3s'
          }}
        >
          <div className="w-full h-full bg-white/15 rounded-full transform skew-x-45"></div>
        </div>
        
        {/* Water ripple 3 */}
        <div 
          className="absolute w-28 h-7 opacity-20"
          style={{
            top: '65%',
            left: '-12%',
            animation: 'flowRipple3 22s linear infinite 6s'
          }}
        >
          <div className="w-full h-full bg-white/25 rounded-full transform skew-x-45"></div>
        </div>
      </div>
      
      {/* Floating water bubbles */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/15 rounded-full animate-pulse opacity-40" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse opacity-30" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 left-1/5 w-20 h-20 bg-white/20 rounded-full animate-pulse opacity-35" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      
      <style>
        {`
          @keyframes riverFlow {
            0%, 100% { background: linear-gradient(to bottom, #60A5FA, #93C5FD, #DBEAFE); }
            50% { background: linear-gradient(to bottom, #3B82F6, #60A5FA, #BFDBFE); }
          }
          
          @keyframes flowRipple1 {
            0% { transform: translateX(-150px) translateY(0px) skewX(45deg) scaleX(1); }
            25% { transform: translateX(25vw) translateY(-10px) skewX(45deg) scaleX(1.2); }
            50% { transform: translateX(50vw) translateY(5px) skewX(45deg) scaleX(0.8); }
            75% { transform: translateX(75vw) translateY(-5px) skewX(45deg) scaleX(1.1); }
            100% { transform: translateX(110vw) translateY(0px) skewX(45deg) scaleX(1); }
          }
          
          @keyframes flowRipple2 {
            0% { transform: translateX(-120px) translateY(0px) skewX(45deg) scaleX(1); }
            30% { transform: translateX(30vw) translateY(8px) skewX(45deg) scaleX(0.9); }
            60% { transform: translateX(60vw) translateY(-8px) skewX(45deg) scaleX(1.3); }
            100% { transform: translateX(110vw) translateY(0px) skewX(45deg) scaleX(1); }
          }
          
          @keyframes flowRipple3 {
            0% { transform: translateX(-180px) translateY(0px) skewX(45deg) scaleX(1); }
            20% { transform: translateX(20vw) translateY(-12px) skewX(45deg) scaleX(1.4); }
            40% { transform: translateX(40vw) translateY(3px) skewX(45deg) scaleX(0.7); }
            70% { transform: translateX(70vw) translateY(-6px) skewX(45deg) scaleX(1.2); }
            100% { transform: translateX(110vw) translateY(5px) skewX(45deg) scaleX(1); }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;
