
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Sky background with flying birds */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-white"
        style={{
          animation: 'skyShift 40s ease-in-out infinite'
        }}
      />
      
      {/* Flying birds */}
      <div className="absolute inset-0">
        {/* Bird group 1 */}
        <div 
          className="absolute w-8 h-6 opacity-70"
          style={{
            top: '20%',
            left: '-10%',
            animation: 'flyBird1 25s linear infinite'
          }}
        >
          <svg viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12C8 8 12 4 16 8C20 4 24 8 24 12C20 8 16 12 16 12C16 12 12 8 8 12Z" fill="#374151"/>
          </svg>
        </div>
        
        {/* Bird group 2 */}
        <div 
          className="absolute w-6 h-4 opacity-60"
          style={{
            top: '35%',
            left: '-8%',
            animation: 'flyBird2 30s linear infinite 5s'
          }}
        >
          <svg viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8C6 6 9 3 12 6C15 3 18 6 18 8C15 6 12 8 12 8C12 8 9 6 6 8Z" fill="#374151"/>
          </svg>
        </div>
        
        {/* Bird group 3 */}
        <div 
          className="absolute w-7 h-5 opacity-50"
          style={{
            top: '15%',
            left: '-12%',
            animation: 'flyBird3 35s linear infinite 10s'
          }}
        >
          <svg viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10C7 7 10.5 4 14 7C17.5 4 21 7 21 10C17.5 7 14 10 14 10C14 10 10.5 7 7 10Z" fill="#374151"/>
          </svg>
        </div>
      </div>
      
      {/* Floating cloud elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/20 rounded-full animate-pulse opacity-40" style={{ animationDelay: '0s', animationDuration: '4s' }} />
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/15 rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s', animationDuration: '6s' }} />
      <div className="absolute bottom-1/3 left-1/5 w-12 h-12 bg-white/25 rounded-full animate-pulse opacity-35" style={{ animationDelay: '4s', animationDuration: '5s' }} />
      
      <style>
        {`
          @keyframes skyShift {
            0%, 100% { background: linear-gradient(to bottom, #87CEEB, #E0F6FF, #ffffff); }
            50% { background: linear-gradient(to bottom, #87CEFA, #B0E0E6, #f8fafc); }
          }
          
          @keyframes flyBird1 {
            0% { transform: translateX(-100px) translateY(0px) scale(1); }
            25% { transform: translateX(25vw) translateY(-20px) scale(1.1); }
            50% { transform: translateX(50vw) translateY(10px) scale(0.9); }
            75% { transform: translateX(75vw) translateY(-15px) scale(1.05); }
            100% { transform: translateX(100vw) translateY(5px) scale(1); }
          }
          
          @keyframes flyBird2 {
            0% { transform: translateX(-80px) translateY(0px) scale(1); }
            30% { transform: translateX(30vw) translateY(15px) scale(0.95); }
            60% { transform: translateX(60vw) translateY(-10px) scale(1.1); }
            100% { transform: translateX(100vw) translateY(0px) scale(1); }
          }
          
          @keyframes flyBird3 {
            0% { transform: translateX(-120px) translateY(0px) scale(1); }
            20% { transform: translateX(20vw) translateY(-25px) scale(1.15); }
            40% { transform: translateX(40vw) translateY(5px) scale(0.85); }
            70% { transform: translateX(70vw) translateY(-10px) scale(1.05); }
            100% { transform: translateX(100vw) translateY(10px) scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;
