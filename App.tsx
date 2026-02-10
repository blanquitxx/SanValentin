
import React, { useState, useRef } from 'react';
import HeartBackground from './components/HeartBackground';
import Envelope from './components/Envelope';

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    setIsStarted(true);
    // Note: Most browsers require user interaction to play audio
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
  };

  const handleOpenEnvelope = () => {
    if (!isStarted) handleStart();
    setIsEnvelopeOpen(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden">
      <HeartBackground />

      <audio ref={audioRef} loop>
        {/* Usamos una URL de placeholder o la del usuario si existiera */}
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      {!isStarted ? (
        <div className="text-center z-20 animate-fade-in space-y-8 max-w-md">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">
              Para ti, mi amor ❤️
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 italic drop-shadow-md">
              Eres lo mejor que me ha pasado en la vida
            </p>
          </div>
          
          <button 
            onClick={handleStart}
            className="group relative px-8 py-4 bg-white text-[#ff4e73] font-bold text-xl rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:scale-110 hover:bg-[#ff4e73] hover:text-white transition-all duration-300 overflow-hidden active:scale-95"
          >
            <span className="relative z-10">Haz clic aquí 💖</span>
            <div className="absolute inset-0 bg-white group-hover:bg-[#ff4e73] transition-colors duration-300"></div>
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center animate-fade-in w-full max-w-xl">
          <div className="mb-12 text-center text-white space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold drop-shadow-md">Tienes un mensaje...</h2>
            {isEnvelopeOpen && (
                <p className="animate-bounce text-pink-100 font-medium">¡Te amo! 💝</p>
            )}
          </div>
          
          <Envelope 
            isOpen={isEnvelopeOpen} 
            onOpen={handleOpenEnvelope} 
          />

          {isEnvelopeOpen && (
            <button 
              onClick={() => setIsEnvelopeOpen(false)}
              className="mt-20 text-white/60 hover:text-white transition-colors text-sm underline underline-offset-4"
            >
              Cerrar carta
            </button>
          )}
        </div>
      )}

      {/* Credit Footer */}
      <footer className="absolute bottom-4 text-white/40 text-[10px] sm:text-xs">
        Hecho con ❤️ para la persona más especial
      </footer>

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default App;
