
import React from 'react';

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onOpen }) => {
  return (
    <div 
      className="relative w-[280px] h-[180px] sm:w-[350px] sm:h-[220px] transition-transform duration-500 hover:scale-105 cursor-pointer perspective-1000 z-10"
      onClick={onOpen}
    >
      {/* Back Part of Envelope */}
      <div className="absolute inset-0 bg-[#e64467] rounded-lg shadow-xl z-0"></div>

      {/* The Letter */}
      <div 
        className={`absolute inset-x-4 h-[160px] sm:h-[200px] bg-white rounded-md p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-lg transition-all duration-1000 ease-in-out z-10 ${
          isOpen ? '-translate-y-[110%] sm:-translate-y-[100%] opacity-100 scale-100' : 'translate-y-0 opacity-0 scale-95'
        }`}
      >
        <h2 className="text-[#ff4e73] font-bold text-lg sm:text-xl mb-2 sm:mb-4">Para mi amor 💖</h2>
        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
          Desde que llegaste a mi vida todo cambió. 
          Gracias por tu amor, tu paciencia y tu forma tan hermosa de existir. 
          No hay día en que no agradezca tenerte conmigo.
        </p>
        <p className="text-[#ff4e73] font-bold mt-2 sm:mt-4 text-sm sm:text-base">Te amo infinitamente ❤️</p>
      </div>

      {/* Front Sides of Envelope (Closes the gap) */}
      <div className="absolute inset-0 bg-[#ff4e73] clip-front-sides rounded-lg z-20"></div>

      {/* The Flap */}
      <div 
        className={`absolute top-0 inset-x-0 h-1/2 bg-[#ff5f81] clip-flap rounded-t-lg origin-top transition-all duration-700 ease-in-out ${
          isOpen ? 'rotate-x-180 z-0' : 'rotate-x-0 z-30'
        }`}
      >
        <div className="absolute inset-0 border-b border-pink-400 opacity-20"></div>
      </div>
      
      {/* Click Hint */}
      {!isOpen && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-medium animate-pulse">
          Toca para abrir 💌
        </div>
      )}
    </div>
  );
};

export default Envelope;
