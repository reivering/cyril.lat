import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ChevronDown } from 'lucide-react';

export function OpenedCard() {
  const [showFlowers, setShowFlowers] = useState(true);

  useEffect(() => {
    // Hide flowers after animation
    const timer = setTimeout(() => {
      setShowFlowers(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Flower rain animation */}
      <AnimatePresence>
        {showFlowers && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100, x: Math.random() * window.innerWidth, rotate: 0, opacity: 1 }}
                animate={{
                  y: window.innerHeight + 100,
                  rotate: 360 + Math.random() * 360,
                  opacity: [1, 1, 0.5, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 1,
                  delay: Math.random() * 0.8,
                  ease: 'easeIn',
                }}
                className="absolute"
              >
                <div className="w-3 h-3 bg-pink-400 rounded-full shadow-lg" />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Opened card view */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative max-w-4xl w-full"
      >
        {/* Card interior */}
        <div className="bg-gradient-to-br from-white via-pink-50/30 to-rose-50/30 rounded-3xl shadow-2xl overflow-hidden"
          style={{
            boxShadow: '0 30px 80px rgba(244, 114, 182, 0.25)',
          }}
        >
          {/* Card fold line effect */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-200/40 to-transparent" />
          
          <div className="grid md:grid-cols-2 gap-8 p-10 md:p-16">
            {/* Left side - Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col justify-center items-center md:items-start text-center md:text-left"
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-pink-400" size={36} fill="currentColor" />
              </div>
              <h1 className="text-pink-600 mb-4">
                Happy Birthday,
                <br />
                <span className="text-rose-500">Huraiza!</span>
              </h1>
            </motion.div>

            {/* Right side - Message */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col justify-center"
            >
              <p 
                className="text-pink-900/80 leading-relaxed text-lg"
                style={{ fontFamily: 'cursive' }}
              >
                You deserve all the love today and always. Thanks for being the brightest part of my days.
              </p>
            </motion.div>
          </div>

          {/* Decorative elements inside card */}
          <div className="absolute top-6 right-6 opacity-30">
            <Heart className="text-pink-300" size={24} fill="currentColor" />
          </div>
          <div className="absolute bottom-6 left-6 opacity-30">
            <Heart className="text-rose-300" size={20} fill="currentColor" />
          </div>
        </div>

        {/* Envelope edges showing behind */}
        <div className="absolute -top-4 left-8 right-8 h-8 bg-gradient-to-b from-pink-300 to-transparent opacity-20 rounded-t-lg -z-10" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut', delay: 1.5 },
        }}
        className="absolute bottom-10 text-center"
      >
        <p className="text-pink-400 text-sm mb-2">Scroll to see our memories ↓</p>
        <ChevronDown className="text-pink-400 mx-auto" size={32} />
      </motion.div>
    </section>
  );
}