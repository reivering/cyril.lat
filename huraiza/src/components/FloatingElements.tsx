import { Heart, Sparkles } from 'lucide-react';

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating hearts */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute animate-float-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          <Heart
            className="text-pink-300/40"
            size={16 + Math.random() * 12}
            fill="currentColor"
          />
        </div>
      ))}
      
      {/* Floating sparkles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          <div
            className="w-1 h-1 bg-pink-400 rounded-full"
            style={{
              boxShadow: '0 0 8px rgba(244, 114, 182, 0.8)',
            }}
          />
        </div>
      ))}
      
      {/* Floating petals */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`petal-${i}`}
          className="absolute animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 5}s`,
          }}
        >
          <div
            className="w-3 h-4 bg-pink-300/50 rounded-full"
            style={{
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
