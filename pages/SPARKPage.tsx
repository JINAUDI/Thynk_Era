import React from 'react';
import { motion } from 'motion/react';

// Import Components
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import SPARK from '../components/SPARK';
import Footer from '../components/Footer';
import OptimizedParticleBackground from '../components/OptimizedParticleBackground';

export default function SPARKPage() {
  return (
    <div className="relative min-h-screen bg-[#001F54] overflow-x-hidden">
      {/* Optimized Particle Background */}
      <OptimizedParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <BackButton />
        
        {/* Page Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-40 pb-24 bg-gradient-to-b from-[#001F54] via-[#0A3D91] to-[#152238] relative overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                SPARK
                <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                  Event
                </span>
              </h1>
              <p className="text-2xl text-gray-300 leading-relaxed">
                Join our revolutionary educational event
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* SPARK Section */}
        <SPARK />

        <Footer />
      </div>
    </div>
  );
}