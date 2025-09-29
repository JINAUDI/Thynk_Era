import React from 'react';
import { motion } from 'motion/react';

// Import Components
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';
import OptimizedParticleBackground from '../components/OptimizedParticleBackground';

export default function WhyThynkEraPage() {
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
                Why Choose
                <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                  ThynkEra
                </span>
              </h1>
              <p className="text-2xl text-gray-300 leading-relaxed">
                What sets us apart from the rest
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Additional Content */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gradient-to-b from-[#152238] to-[#001F54] relative overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our
                <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                  Commitment
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Every decision we make, every program we design, and every student we teach 
                is guided by our unwavering commitment to excellence and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "Student-Centric Approach",
                  description: "Every student is unique, and so is our approach. We personalize learning experiences to match individual goals, learning styles, and pace.",
                  features: ["Personalized Learning Paths", "Individual Attention", "Flexible Scheduling", "Regular Progress Tracking"]
                },
                {
                  title: "Innovation & Technology",
                  description: "We leverage cutting-edge technology and innovative teaching methods to make learning engaging, effective, and future-relevant.",
                  features: ["AI-Powered Learning", "Interactive Platforms", "Digital Resources", "Virtual Labs"]
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="glass rounded-2xl p-8 hover:neon-gold transition-all duration-300"
                >
                  <h3 className="text-3xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{section.description}</p>
                  <ul className="space-y-2">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="text-[#FFD700] mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
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