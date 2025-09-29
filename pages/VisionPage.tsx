import React from 'react';
import { motion } from 'motion/react';

// Import Components
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import FutureGoals from '../components/FutureGoals';
import Footer from '../components/Footer';
import OptimizedParticleBackground from '../components/OptimizedParticleBackground';

export default function VisionPage() {
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
                Our
                <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                  Vision
                </span>
              </h1>
              <p className="text-2xl text-gray-300 leading-relaxed">
                Building Tomorrow's Education Empire
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Future Goals Section */}
        <FutureGoals />

        {/* Additional Vision Content */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="py-20 bg-gradient-to-b from-[#152238] to-[#001F54] relative overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transforming
                <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                  Education
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                At ThynkEra, we envision a future where education transcends traditional boundaries, 
                empowering students with cutting-edge knowledge and future-ready skills.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation First",
                  description: "Pioneering new methods of learning that prepare students for tomorrow's challenges",
                  icon: "🚀"
                },
                {
                  title: "Global Standards",
                  description: "Maintaining international quality while staying rooted in our values",
                  icon: "🌍"
                },
                {
                  title: "Future-Ready Skills",
                  description: "Developing competencies that will be essential in the digital age",
                  icon: "💡"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="glass rounded-2xl p-8 text-center hover:neon-gold transition-all duration-300"
                >
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
}