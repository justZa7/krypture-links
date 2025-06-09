'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedBeams = () => {
  const [beams, setBeams] = useState<Array<{ 
    id: number, 
    x: number, 
    y: number, 
    size: number,
    opacity: number,
    duration: number,
    color: string
  }>>([]);

  const neonColors = [
    'rgba(74, 222, 128, 0.4)', // Bright neon green
    'rgba(52, 211, 153, 0.4)', // Emerald
    'rgba(34, 211, 238, 0.4)', // Cyan
    'rgba(168, 85, 247, 0.4)', // Purple
    'rgba(236, 72, 153, 0.4)'  // Pink
  ];

  useEffect(() => {
    // Create more beams with higher visibility
    const initialBeams = Array.from({ length: 12 }).map((_, i) => {
      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 300 + 200, // Larger beams
        opacity: Math.random() * 0.3 + 0.2, // More opaque
        duration: Math.random() * 25 + 15,
        color
      };
    });
    setBeams(initialBeams);

    // Update beam positions more frequently for dynamic effect
    const interval = setInterval(() => {
      setBeams(currentBeams => 
        currentBeams.map(beam => ({
          ...beam,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 25 + 15,
          color: Math.random() > 0.9 ? neonColors[Math.floor(Math.random() * neonColors.length)] : beam.color
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          initial={{
            x: `${beam.x}%`,
            y: `${beam.y}%`,
            opacity: beam.opacity
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: [beam.opacity * 0.7, beam.opacity, beam.opacity * 0.7],
            transition: {
              duration: beam.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }
          }}
          className="absolute rounded-full"
          style={{
            width: `${beam.size}px`,
            height: `${beam.size}px`,
            background: `radial-gradient(circle, ${beam.color} 0%, rgba(0,0,0,0) 70%)`,
            filter: 'blur(60px)'
          }}
        />
      ))}
      
      {/* Additional static glow for more neon effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(74, 222, 128, 0.1) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(80px)'
        }}
      />
    </div>
  );
};

export default AnimatedBeams;