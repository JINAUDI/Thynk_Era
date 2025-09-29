import React from 'react';
import { motion } from 'motion/react';

// Import Components
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

export default function InnovationLabPage() {
  return (
    <>
      <Header />
      <BackButton />
      
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-40 pb-24 bg-gradient-to-b from-[#001F54] to-[#152238] relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovation
              <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                Lab
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Where creativity meets technology to build tomorrow's solutions
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-[#152238] to-[#001F54]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Innovate &
                <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                  Create
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our Innovation Lab is a creative space where students explore emerging technologies, work on real-world projects, and develop innovative solutions to global challenges. It's where ideas transform into impactful innovations.
              </p>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                  <span>State-of-the-art equipment and technology</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                  <span>Mentorship from industry experts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                  <span>Collaborative project-based learning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                  <span>Patent filing and startup incubation</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-8 neon-gold"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Lab Facilities</h3>
              <div className="space-y-4">
                <div className="bg-[#FFD700]/10 rounded-lg p-4">
                  <h4 className="font-bold text-[#FFD700] mb-2">3D Printing & Design</h4>
                  <p className="text-gray-300 text-sm">Prototype development and rapid manufacturing</p>
                </div>
                <div className="bg-[#FF6A00]/10 rounded-lg p-4">
                  <h4 className="font-bold text-[#FF6A00] mb-2">IoT & Robotics</h4>
                  <p className="text-gray-300 text-sm">Smart devices and automation projects</p>
                </div>
                <div className="bg-[#FFD700]/10 rounded-lg p-4">
                  <h4 className="font-bold text-[#FFD700] mb-2">AR/VR Studio</h4>
                  <p className="text-gray-300 text-sm">Immersive experience development</p>
                </div>
                <div className="bg-[#FF6A00]/10 rounded-lg p-4">
                  <h4 className="font-bold text-[#FF6A00] mb-2">Blockchain Lab</h4>
                  <p className="text-gray-300 text-sm">Cryptocurrency and DeFi applications</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-[#001F54] via-[#0A3D91] to-[#152238] relative overflow-hidden"
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to
              <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                Innovate?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our Innovation Lab and turn your ideas into reality
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">🚀 Join Innovation Lab</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}