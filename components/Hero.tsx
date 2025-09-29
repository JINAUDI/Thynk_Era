import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true); // Still consider it "loaded" to remove loading state
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#001F54] via-[#0A3D91] to-[#152238] overflow-hidden flex items-center">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-transparent to-[#FF6A00]/5"></div>
        </div>

        {/* Reduced Floating Particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FFD700] rounded-full"
            initial={{
              opacity: 0,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Sparkles className="w-6 h-6 text-[#FFD700]" />
              <span className="text-[#FFD700] uppercase tracking-wider text-sm font-medium">
                India's first future ready institute
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              From Curious Minds to
              <span className="block bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FF6A00] bg-clip-text text-transparent">
                Conscious Makers.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              At ThynkEra, we ask: not just 'what's in the
              book?' but 'what can I build with it?' Here, we
              nurture curiosity, ignite imagination, and empower
              conscious innovators to turn knowledge into
              real-world change.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-lg text-[#FFD700] mb-8 font-medium"
            >
              👉 The Future Can't Wait. Neither Should You.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-4 rounded-full transition-all duration-300 group"
              >
                <Zap className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Book a Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#FFD700]/20"
            >
              {[
                {
                  number: "500+",
                  label: "Students Transformed",
                },
                { number: "95%", label: "Success Rate" },
                { number: "50+", label: "Industry Projects" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Glassmorphism Card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-[#152238]">
                  {/* Loading State */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#152238]">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFD700]"></div>
                    </div>
                  )}
                  
                  {/* Error State or Fallback */}
                  {imageError ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#152238] to-[#0A3D91] text-white">
                      <div className="text-center">
                        <Sparkles className="w-16 h-16 text-[#FFD700] mx-auto mb-4" />
                        <p className="text-lg font-medium">Future Technology</p>
                        <p className="text-sm text-gray-300">Education Platform</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src="https://images.unsplash.com/photo-1719159381981-1327b22aff9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGVkdWNhdGlvbiUyMGNvZGluZ3xlbnwxfHx8fDE3NTgwMDk2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Future Technology Education"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                    />
                  )}
                </div>

                {/* Simplified Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-[#FFD700] to-[#FF6A00] p-4 rounded-2xl shadow-lg"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#FF6A00] to-[#FFD700] p-4 rounded-2xl shadow-lg"
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-[#FF6A00]/10 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simplified Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#FFD700] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#FFD700] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;