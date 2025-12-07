'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const companyLogos = [
  { name: 'Shipsarthi', src: '/shipsarthi.png' },
  { name: 'Zammer', src: '/zammer.png' },
  { name: 'YourCareer', src: '/yourcareer.png' },
  { name: 'Richie', src: '/richie.png' },
  { name: 'Patent Tool', src: '/patent tool.png' },
];

export const AtomicOrbit = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Trusted By Industry Leaders
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering AI-powered solutions that drive real business results
          </p>
        </motion.div>

        {/* Atomic Orbit Container */}
        <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px]">
          {/* Center Image */}
          <motion.div
            className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <Image
              src="/atomic image.png"
              alt="Uddit - AI Engineer"
              fill
              className="object-cover"
              priority
            />
            {/* Glow effect behind the image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl -z-10 scale-150" />
          </motion.div>

          {/* Orbit Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Inner orbit ring */}
            <motion.div
              className="absolute w-80 h-80 md:w-[400px] md:h-[400px] rounded-full border border-white/10"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            {/* Outer orbit ring */}
            <motion.div
              className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-white/5"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          {/* Rotating Logos Container - All 5 on same orbit */}
          <motion.div
            className="absolute w-80 h-80 md:w-[400px] md:h-[400px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {companyLogos.map((logo, index) => {
              const angle = (index * 360) / companyLogos.length;
              const radian = (angle * Math.PI) / 180;
              const radius = 50;
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;

              return (
                <motion.div
                  key={logo.name}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}%, ${y}%)`,
                    left: `${50 + x}%`,
                    top: `${50 + y}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    className="relative"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 relative hover:scale-110 transition-all duration-300 cursor-pointer group">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        fill
                        className="object-contain drop-shadow-lg"
                      />
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        <span className="text-xs text-gray-300 bg-black/80 px-2 py-1 rounded">
                          {logo.name}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-md -z-10 opacity-50" />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Decorative particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtomicOrbit;
