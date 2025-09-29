import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Heart, Building, ArrowRight, Users, Star, Target } from 'lucide-react';
import { Button } from './ui/button';

const TargetAudience = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const audiences = [
    {
      icon: Heart,
      title: "Parents",
      subtitle: "Who Want Their Kids to Stand Out",
      description: "Degrees alone won't secure tomorrow. Parents at ThynkEra see real growth — children building projects, mastering skills, and gaining the confidence to thrive in any future.",
      benefits: [
        "Visible Results",
        "Project-Based Learning",
        "Future-Ready Skills", 
        "Confidence Building",
        "Real Growth Tracking",
        "Industry Readiness"
      ],
      stats: { number: "300+", label: "Satisfied Parents" },
      color: "from-[#FF6A00] to-[#FFD700]",
      image: "https://images.unsplash.com/photo-1630396814511-340128f6300a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGVuZ2luZWVyaW5nJTIwbGFifGVufDF8fHx8MTc1Nzc1NzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: GraduationCap,
      title: "Students",
      subtitle: "Who Dream of Building & Creating",
      description: "For every curious mind that loves to tinker, question, or imagine, ThynkEra turns that spark into real-world creations, from robots to apps to prototypes.",
      benefits: [
        "Hands-on Creation",
        "Real-world Projects", 
        "Innovation Skills",
        "Technical Mastery",
        "Creative Problem Solving",
        "Future Builder Mindset"
      ],
      stats: { number: "500+", label: "Students Enrolled" },
      color: "from-[#FFD700] to-[#FFB400]",
      image: "https://images.unsplash.com/photo-1753613648191-4771cf76f034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc1Nzc1NzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Building,
      title: "Schools",
      subtitle: "Seeking to Upgrade Education",
      description: "We help schools go beyond textbooks, blending theory with hands-on innovation so students don't just pass exams, they create the future.",
      benefits: [
        "Beyond Textbooks",
        "Hands-on Innovation",
        "Theory + Practice Blend",
        "Future-Ready Curriculum",
        "Student Engagement",
        "Real-World Learning"
      ],
      stats: { number: "25+", label: "Partner Schools" },
      color: "from-[#FFB400] to-[#FF6A00]",
      image: "https://images.unsplash.com/photo-1619960972542-d3965e0cf49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU3NzU3MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#001F54] to-[#152238] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-16 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl"></div>
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
            <Target className="w-5 h-5 text-[#FFD700]" />
            <span className="text-[#FFD700] font-medium">Who Is ThynkEra For?</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            For Everyone Who
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
              Believes in More
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ✨ If you believe education should do more than prepare kids for exams — welcome to ThynkEra.
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -10 }}
            >
              <div 
                className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden h-full transition-all duration-500 ${
                  hoveredCard === index 
                    ? 'border-[#FFD700]/50 shadow-2xl shadow-[#FFD700]/20 scale-105' 
                    : 'hover:border-[#FFD700]/30'
                }`}
              >
                {/* Card Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={audience.image}
                    alt={audience.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredCard === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${audience.color} opacity-20`}></div>
                  
                  {/* Floating Icon */}
                  <motion.div
                    animate={hoveredCard === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    className={`absolute -bottom-6 left-6 p-4 rounded-2xl bg-gradient-to-br ${audience.color} shadow-lg`}
                  >
                    <audience.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl px-3 py-2">
                    <div className="text-[#FFD700] font-bold text-lg">{audience.stats.number}</div>
                    <div className="text-white text-xs">{audience.stats.label}</div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 pt-12">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors">
                      {audience.title}
                    </h3>
                    <p className="text-[#FFD700] font-medium">{audience.subtitle}</p>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {audience.description}
                  </p>

                  {/* Benefits List */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: hoveredCard === index ? 'auto' : '120px',
                      opacity: hoveredCard === index ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-6"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {audience.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefitIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ 
                            opacity: hoveredCard === index ? 1 : 0.7,
                            x: hoveredCard === index ? 0 : -5
                          }}
                          transition={{ duration: 0.3, delay: benefitIndex * 0.05 }}
                          className="flex items-center space-x-2"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${audience.color} rounded-full flex-shrink-0`}></div>
                          <span className="text-white text-sm font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredCard === index ? 1 : 0.8,
                      y: hoveredCard === index ? 0 : 10
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Button
                      className={`w-full bg-gradient-to-r ${audience.color} hover:shadow-lg text-white font-semibold transition-all duration-300 group`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${audience.color} opacity-5 rounded-3xl blur-xl transition-opacity duration-500 -z-10 ${
                  hoveredCard === index ? 'opacity-20' : 'opacity-5'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              Join Our Growing Community of Makers
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {[
                { icon: GraduationCap, number: "500+", label: "Young Innovators" },
                { icon: Heart, number: "300+", label: "Proud Parents" },
                { icon: Building, number: "25+", label: "Forward Schools" },
                { icon: Star, number: "4.9", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-4 bg-gradient-to-br from-[#FFD700]/10 to-[#FF6A00]/10 rounded-2xl inline-block mb-4 group-hover:from-[#FFD700]/20 group-hover:to-[#FF6A00]/20 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-[#FFD700] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Be Part of Our Community
              <Users className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;