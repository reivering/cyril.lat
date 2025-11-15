import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import huraiza1 from '../assets/images/huraiza1.jpeg';
import huraiza2 from '../assets/images/huraiza2.jpeg';
import huraiza3 from '../assets/images/huraiza3.jpeg';
import huraiza4 from '../assets/images/huraiza4.jpeg';

const photos = [
  {
    href: huraiza1,
    rotation: -4,
    delay: 0.2,
  },
  {
    href: huraiza2,
    rotation: 3,
    delay: 0.4,
  },
  {
    href: huraiza3,
    rotation: -2,
    delay: 0.6,
  },
  {
    href: huraiza4,
    rotation: 5,
    delay: 0.8,
  },
];

export function PhotoMemories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-20 px-6 pb-32 bg-gradient-to-b from-transparent to-pink-50/50">
      {/* Transition gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-pink-50/30 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-pink-600 mb-4">
          Beautiful Memories
        </h2>
        <p className="text-pink-900/70">
          Special moments we've shared together
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Scrapbook doodles and decorations */}
        <motion.div
          animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-8 left-10 z-0"
        >
          <Heart className="text-pink-300" size={32} fill="currentColor" />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -top-4 right-16 z-0"
        >
          <Sparkles className="text-rose-300" size={28} fill="currentColor" />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 -left-8 z-0"
        >
          <Star className="text-pink-300/60" size={24} fill="currentColor" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-12 -left-6 z-0"
        >
          <Sparkles className="text-pink-300/60" size={28} fill="currentColor" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute bottom-20 -right-8 z-0"
        >
          <Star className="text-rose-300/60" size={28} fill="currentColor" />
        </motion.div>
        
        {/* Hand-drawn style arrows and doodles */}
        <motion.div
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-12 right-1/4 z-0"
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-pink-300/40">
            <motion.path
              d="M10 10 Q 30 30, 50 10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotate: photo.rotation }
                  : { opacity: 0, y: 50, rotate: 0 }
              }
              transition={{ duration: 0.8, delay: photo.delay, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
              className="relative group cursor-pointer"
            >
              {/* Polaroid frame */}
              <div className="bg-white p-4 pb-12 rounded-lg shadow-xl relative">
                {/* Washi tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-pink-200/60 rotate-2 rounded-sm shadow-sm" />
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 rotate-2 rounded-sm"
                  style={{ mixBlendMode: 'overlay' }}
                />

                {/* Photo */}
                <div className="relative overflow-hidden rounded-md aspect-square">
                  <ImageWithFallback
                    src={photo.href}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Handwritten caption */}
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <p className="text-pink-700/70 text-sm" style={{ fontFamily: 'cursive' }}>
                    {index === 0 && ''}
                    {index === 1 && ''	}
                    {index === 2 && ''}
                    {index === 3 && ''	}
                  </p>
                </div>

                {/* Hover sparkle effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                >
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-pink-400 rounded-full"
                      style={{
                        top: `${20 + i * 25}%`,
                        left: `${15 + i * 30}%`,
                        boxShadow: '0 0 10px rgba(244, 114, 182, 0.8)',
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Floating doodle on hover */}
              <motion.div
                className="absolute -top-6 -right-4 opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart className="text-pink-400" size={24} fill="currentColor" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p 
            className="text-pink-600/80 text-xl"
            style={{ fontFamily: 'cursive' }}
          >
            Wishing you the happiest birthday!<br />
            - C
          </p>
        </motion.div>
      </div>
    </section>
  );
}