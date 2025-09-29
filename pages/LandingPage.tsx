import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

// Import Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import TargetAudience from '../components/TargetAudience';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

// Navigation Button Component
const NavigationButton = ({ to, children, variant = "primary" }: { 
  to: string; 
  children: React.ReactNode; 
  variant?: "primary" | "secondary" 
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={to}>
      <button
        className={`
          ${variant === "primary" 
            ? "bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54]" 
            : "border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10"
          } 
          font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group
        `}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      </button>
    </Link>
  </motion.div>
);

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      
      {/* For Everyone Who Believes in More */}
      <About />
      
      {/* Gallery Section with View Gallery Button */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-[#001F54] to-[#152238] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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
                Gallery
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore the moments that define excellence in education
            </p>
          </motion.div>

          {/* Gallery Preview */}
          <Gallery />

          {/* View Gallery Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <NavigationButton to="/gallery">
              View Full Gallery
            </NavigationButton>
          </motion.div>
        </div>
      </motion.section>

      {/* For Everyone Who Believes in More (Repeat) */}
      <TargetAudience />

      {/* Navigation Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-[#001F54] via-[#0A3D91] to-[#152238] relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6A00]/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Explore
              <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                ThynkEra
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover what makes us India's first future-ready coaching institute
            </p>
          </motion.div>

          {/* Navigation Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { 
                title: "Our Programs", 
                description: "Comprehensive courses designed for future success",
                to: "/programs",
                icon: "🎓"
              },
              { 
                title: "Success Stories", 
                description: "Real testimonials from our amazing students",
                to: "/testimonials",
                icon: "⭐"
              },
              { 
                title: "Our Vision", 
                description: "Building tomorrow's education ecosystem",
                to: "/vision",
                icon: "🚀"
              },
              { 
                title: "Why Choose Us", 
                description: "What sets ThynkEra apart from the rest",
                to: "/why-thynkera",
                icon: "💡"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-8 text-center hover:neon-gold transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FFD700] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <Link to={item.to}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Explore →
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-[#001F54] via-[#0A3D91] to-[#152238] relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6A00]/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Future Belongs to
              <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                Makers
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's build it together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <NavigationButton to="/programs">
              👉 Enroll Now
            </NavigationButton>
            
            <NavigationButton to="/programs" variant="secondary">
              👉 Book a Free Demo Class at your door step
            </NavigationButton>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </>
  );
}