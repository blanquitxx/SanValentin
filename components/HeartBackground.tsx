
import React, { useState, useEffect, useCallback } from 'react';
import { Heart } from '../types';

const HeartBackground: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  const addHeart = useCallback(() => {
    const newHeart: Heart = {
      id: Date.now() + Math.random(),
      left: `${Math.random() * 100}vw`,
      size: `${Math.random() * 20 + 10}px`,
      duration: `${Math.random() * 3 + 4}s`,
      delay: `0s`,
    };
    setHearts(prev => [...prev.slice(-30), newHeart]);
  }, []);

  useEffect(() => {
    const interval = setInterval(addHeart, 400);
    return () => clearInterval(interval);
  }, [addHeart]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(110vh); opacity: 1; }
            100% { transform: translateY(-10vh); opacity: 0; }
          }
        `}
      </style>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-white/60"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animation: `float ${heart.duration} linear forwards`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default HeartBackground;
