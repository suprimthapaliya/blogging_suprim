
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Rocky cliff background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-blue-500"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 20%, rgba(55, 65, 81, 0.9) 0%, transparent 60%),
            radial-gradient(circle at 70% 40%, rgba(75, 85, 99, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(31, 41, 55, 0.7) 0%, transparent 40%),
            linear-gradient(to bottom, #1F2937 0%, #374151 20%, #4B5563 40%, #6B7280 70%, #3B82F6 100%)
          `,
        }}
      />
      
      {/* Main waterfall streams flowing from top to bottom */}
      <div className="absolute inset-0">
        {/* Primary waterfall stream */}
        <div 
          className="absolute w-20 h-full opacity-70"
          style={{
            left: '18%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(147,197,253,0.7) 30%, rgba(59,130,246,0.8) 70%, rgba(29,78,216,0.6) 100%)',
            animation: 'waterfallFlow1 2s ease-in-out infinite',
            clipPath: 'polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%)'
          }}
        />
        
        {/* Secondary waterfall stream */}
        <div 
          className="absolute w-16 h-full opacity-60"
          style={{
            left: '28%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(147,197,253,0.6) 25%, rgba(59,130,246,0.7) 65%, rgba(37,99,235,0.5) 100%)',
            animation: 'waterfallFlow2 2.5s ease-in-out infinite 0.3s',
            clipPath: 'polygon(25% 0%, 75% 0%, 85% 100%, 15% 100%)'
          }}
        />
        
        {/* Tertiary waterfall stream */}
        <div 
          className="absolute w-12 h-full opacity-50"
          style={{
            left: '65%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(147,197,253,0.5) 20%, rgba(59,130,246,0.6) 60%, rgba(30,64,175,0.4) 100%)',
            animation: 'waterfallFlow3 3s ease-in-out infinite 0.8s',
            clipPath: 'polygon(30% 0%, 70% 0%, 80% 100%, 20% 100%)'
          }}
        />
        
        {/* Small cascade streams */}
        <div 
          className="absolute w-8 h-full opacity-40"
          style={{
            left: '45%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(147,197,253,0.4) 15%, rgba(59,130,246,0.5) 50%, rgba(37,99,235,0.3) 100%)',
            animation: 'waterfallFlow4 2.2s ease-in-out infinite 1.2s',
            clipPath: 'polygon(35% 0%, 65% 0%, 75% 100%, 25% 100%)'
          }}
        />
        
        <div 
          className="absolute w-6 h-full opacity-35"
          style={{
            left: '75%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(147,197,253,0.35) 10%, rgba(59,130,246,0.45) 45%, rgba(29,78,216,0.25) 100%)',
            animation: 'waterfallFlow5 2.8s ease-in-out infinite 1.5s',
            clipPath: 'polygon(40% 0%, 60% 0%, 70% 100%, 30% 100%)'
          }}
        />
      </div>
      
      {/* Water spray and mist effects */}
      <div className="absolute inset-0">
        {/* Large mist clouds at the base */}
        <div 
          className="absolute w-40 h-32 opacity-25"
          style={{
            bottom: '10%',
            left: '12%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)',
            animation: 'mistRise1 6s ease-in-out infinite',
            filter: 'blur(2px)'
          }}
        />
        
        <div 
          className="absolute w-36 h-28 opacity-20"
          style={{
            bottom: '15%',
            left: '25%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 35%, transparent 65%)',
            animation: 'mistRise2 8s ease-in-out infinite 2s',
            filter: 'blur(2px)'
          }}
        />
        
        <div 
          className="absolute w-32 h-24 opacity-18"
          style={{
            bottom: '20%',
            right: '25%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 30%, transparent 60%)',
            animation: 'mistRise3 10s ease-in-out infinite 4s',
            filter: 'blur(1.5px)'
          }}
        />
        
        {/* Smaller mist particles */}
        <div 
          className="absolute w-20 h-16 opacity-15"
          style={{
            bottom: '30%',
            left: '40%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 50%)',
            animation: 'mistFloat1 12s ease-in-out infinite 1s',
            filter: 'blur(1px)'
          }}
        />
        
        <div 
          className="absolute w-16 h-12 opacity-12"
          style={{
            bottom: '35%',
            right: '40%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 45%)',
            animation: 'mistFloat2 14s ease-in-out infinite 3s',
            filter: 'blur(1px)'
          }}
        />
      </div>
      
      {/* Water droplets and splash effects */}
      <div className="absolute inset-0">
        {/* Animated water droplets */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-blue-200/30 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              bottom: `${Math.random() * 20 + 5}%`,
              left: `${Math.random() * 70 + 15}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1.5}s`,
              opacity: Math.random() * 0.4 + 0.1
            }}
          />
        ))}
      </div>
      
      <style>
        {`
          @keyframes waterfallFlow1 {
            0%, 100% { 
              transform: translateY(-3px) scaleY(0.98);
              opacity: 0.7;
            }
            50% { 
              transform: translateY(2px) scaleY(1.05);
              opacity: 0.85;
            }
          }
          
          @keyframes waterfallFlow2 {
            0%, 100% { 
              transform: translateY(-2px) scaleY(0.96);
              opacity: 0.6;
            }
            50% { 
              transform: translateY(3px) scaleY(1.08);
              opacity: 0.75;
            }
          }
          
          @keyframes waterfallFlow3 {
            0%, 100% { 
              transform: translateY(-4px) scaleY(0.94);
              opacity: 0.5;
            }
            50% { 
              transform: translateY(4px) scaleY(1.12);
              opacity: 0.65;
            }
          }
          
          @keyframes waterfallFlow4 {
            0%, 100% { 
              transform: translateY(-1px) scaleY(0.99);
              opacity: 0.4;
            }
            50% { 
              transform: translateY(2px) scaleY(1.06);
              opacity: 0.55;
            }
          }
          
          @keyframes waterfallFlow5 {
            0%, 100% { 
              transform: translateY(-2px) scaleY(0.97);
              opacity: 0.35;
            }
            50% { 
              transform: translateY(3px) scaleY(1.09);
              opacity: 0.5;
            }
          }
          
          @keyframes mistRise1 {
            0%, 100% { 
              transform: translateY(0px) translateX(-5px) scale(1);
              opacity: 0.25;
            }
            25% { 
              transform: translateY(-15px) translateX(5px) scale(1.1);
              opacity: 0.35;
            }
            50% { 
              transform: translateY(-25px) translateX(10px) scale(0.9);
              opacity: 0.3;
            }
            75% { 
              transform: translateY(-20px) translateX(-3px) scale(1.05);
              opacity: 0.2;
            }
          }
          
          @keyframes mistRise2 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) scale(1);
              opacity: 0.2;
            }
            33% { 
              transform: translateY(-20px) translateX(-8px) scale(1.15);
              opacity: 0.3;
            }
            66% { 
              transform: translateY(-30px) translateX(12px) scale(0.85);
              opacity: 0.25;
            }
          }
          
          @keyframes mistRise3 {
            0%, 100% { 
              transform: translateY(0px) translateX(3px) scale(1);
              opacity: 0.18;
            }
            40% { 
              transform: translateY(-25px) translateX(-10px) scale(1.2);
              opacity: 0.28;
            }
            80% { 
              transform: translateY(-35px) translateX(8px) scale(0.8);
              opacity: 0.22;
            }
          }
          
          @keyframes mistFloat1 {
            0%, 100% { 
              transform: translateY(-10px) translateX(-8px) scale(1);
              opacity: 0.15;
            }
            50% { 
              transform: translateY(-40px) translateX(15px) scale(1.3);
              opacity: 0.25;
            }
          }
          
          @keyframes mistFloat2 {
            0%, 100% { 
              transform: translateY(-5px) translateX(5px) scale(1);
              opacity: 0.12;
            }
            50% { 
              transform: translateY(-35px) translateX(-12px) scale(1.25);
              opacity: 0.22;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;
