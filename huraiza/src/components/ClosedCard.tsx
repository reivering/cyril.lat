import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface ClosedCardProps {
  onOpen: () => void;
}

export function ClosedCard({ onOpen }: ClosedCardProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center"
      >
        {/* Closed envelope with card */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative mb-8"
        >
          {/* Envelope body */}
          <div className="relative w-80 h-56 mx-auto">
            {/* Back of envelope */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-200 rounded-lg shadow-2xl" />
            
            {/* Envelope flap */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-pink-300 to-rose-300 origin-top"
              style={{
                clipPath: 'polygon(0 0, 50% 60%, 100% 0)',
                boxShadow: '0 4px 20px rgba(244, 114, 182, 0.3)',
              }}
            />
            
            {/* Card peeking out */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-40 bg-white rounded-lg shadow-lg transform -rotate-1" />
            
            {/* Heart seal */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-16 left-1/2 -translate-x-1/2 z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-rose-400 blur-md opacity-50 rounded-full" />
                <Heart 
                  className="relative text-rose-400 drop-shadow-lg" 
                  size={40} 
                  fill="currentColor" 
                />
              </div>
            </motion.div>
            
            {/* Decorative sparkles */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4"
            >
              <div className="w-3 h-3 bg-pink-300 rounded-full shadow-lg" />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4"
            >
              <div className="w-3 h-3 bg-rose-300 rounded-full shadow-lg" />
            </motion.div>
          </div>
        </motion.div>

        {/* Open button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-pink-400 mb-4">Tap to open your card</p>
          <motion.button
            onClick={onOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-pink-300 to-rose-300 text-white rounded-full shadow-lg hover:shadow-pink-300/50 transition-all duration-300"
            style={{
              boxShadow: '0 10px 30px rgba(244, 114, 182, 0.3)',
            }}
          >
            Open Card
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}