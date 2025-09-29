import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Star, Trophy, Users, Award, Zap, Target, Lightbulb } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reasons = [
    {
      icon: Star,
      title: "Industry-Leading Curriculum",
      description: "Cutting-edge curriculum designed by industry experts and updated quarterly to match market demands.",
      stats: "95% Industry Relevance"
    },
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "Over 500+ successful placements in top tech companies with an average package of ₹15 lakhs.",
      stats: "500+ Placements"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from industry veterans who have worked at Google, Microsoft, Amazon, and leading startups.",
      stats: "50+ Industry Mentors"
    },
    {
      icon: Award,
      title: "State-of-Art Infrastructure",
      description: "Modern labs equipped with latest technology, AI-powered learning tools, and collaborative spaces.",
      stats: "₹2Cr+ Infrastructure"
    },
    {
      icon: Zap,
      title: "Hands-on Learning",
      description: "70% practical learning with real-world projects, internships, and industry collaboration.",
      stats: "70% Practical Learning"
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description: "AI-powered personalized learning paths that adapt to your pace, style, and career goals.",
      stats: "100% Customized"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Emphasis on research, innovation, and entrepreneurship with dedicated incubation support.",
      stats: "25+ Startups Incubated"
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Access to global network of alumni, industry partners, and technology leaders worldwide.",
      stats: "Global Reach"
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Placed", icon: Trophy },
    { number: "95%", label: "Success Rate", icon: Star },
    { number: "₹15L", label: "Avg Package", icon: Award },
    { number: "50+", label: "Industry Partners", icon: Users }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#152238] to-[#001F54] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FFD700]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-[#FFD700]/10 backdrop-blur-sm border border-[#FFD700]/20 rounded-full px-6 py-3 mb-6"
          >
            <Star className="w-5 h-5 text-[#FFD700]" />
            <span className="text-[#FFD700] font-medium">Why Choose ThynkEra</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Excellence in Every
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
              Aspect
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We don't just teach technology—we transform lives. Here's what makes ThynkEra 
            the preferred choice for future-ready education.
          </p>
        </motion.div>

        {/* Achievements Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-4 bg-gradient-to-br from-[#FFD700]/10 to-[#FF6A00]/10 rounded-2xl inline-block mb-4 group-hover:from-[#FFD700]/20 group-hover:to-[#FF6A00]/20 transition-all duration-300">
                    <achievement.icon className="w-8 h-8 text-[#FFD700] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 font-medium">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
            >
              <div 
                className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 h-full transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'border-[#FFD700]/50 shadow-2xl shadow-[#FFD700]/20 bg-white/10' 
                    : 'hover:border-[#FFD700]/30 hover:bg-white/8'
                }`}
              >
                {/* Icon */}
                <motion.div
                  animate={hoveredIndex === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  className={`p-4 rounded-2xl inline-block mb-4 transition-all duration-300 ${
                    hoveredIndex === index 
                      ? 'bg-gradient-to-br from-[#FFD700] to-[#FF6A00] shadow-lg' 
                      : 'bg-[#FFD700]/10 group-hover:bg-[#FFD700]/20'
                  }`}
                >
                  <reason.icon className={`w-8 h-8 transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-white' : 'text-[#FFD700]'
                  }`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                  {reason.description}
                </p>

                {/* Stats */}
                <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'bg-[#FFD700]/20 border border-[#FFD700]/30' 
                    : 'bg-white/10 border border-white/20'
                }`}>
                  <Check className="w-4 h-4 text-[#FFD700]" />
                  <span className="text-[#FFD700] text-sm font-medium">{reason.stats}</span>
                </div>

                {/* Animated Checkmark */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: hoveredIndex === index ? 1 : 0,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute top-4 right-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#FFD700] to-[#FF6A00] rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                </motion.div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-[#FF6A00]/5 rounded-3xl blur-xl transition-opacity duration-500 -z-10 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Student Testimonial Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#FF6A00]/10 backdrop-blur-lg border border-[#FFD700]/20 rounded-3xl p-8 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FF6A00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <blockquote className="text-2xl md:text-3xl text-white font-medium mb-6 leading-relaxed">
                "ThynkEra didn't just teach me coding—it transformed my entire perspective on technology 
                and innovation. The mentorship, projects, and industry exposure prepared me for a 
                successful career at Google."
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FF6A00] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AS</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Arjun Sharma</div>
                  <div className="text-gray-400 text-sm">Software Engineer @ Google</div>
                </div>
              </div>

              <div className="flex justify-center space-x-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;