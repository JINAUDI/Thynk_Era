import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Users, Award, ArrowRight, AlertTriangle } from 'lucide-react';

const About = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      icon: AlertTriangle,
      title: "Why ThynkEra?",
      subtitle: "The Big Problem",
      content: "Education today is broken. Degrees ≠ Skills → Employers now value what you can do, not just what you know. Automation & AI → By 2030, 40% of today's skills will be obsolete. The skills gap is real → 85% of employers are investing in upskilling instead of just hiring degrees.",
      features: ["Skills over Degrees", "Future-Proof Learning", "Industry Alignment", "Real-World Readiness"]
    },
    {
      icon: Eye,
      title: "Our Vision",
      subtitle: "Transforming How Students Learn", 
      content: "We believe every student has the power to be a creator of ideas, products, and solutions. That's why at ThynkEra, learning never stops at theory. A science concept? → Build something with it. A math principle? → Create a real-world solution around it. A new technology? → Use it to solve problems that matter.",
      features: ["Theory to Practice", "Hands-on Creation", "Real-world Solutions", "Lifelong Learning"]
    },
    {
      icon: Users,
      title: "What Makes Us Different",
      subtitle: "Unlike Traditional Schools",
      content: "ThynkEra focuses on future readiness through skill + subject integration, technology as a tool, holistic growth, industry-linked learning, and early exposure to innovation for junior innovators from Class 3–10.",
      features: ["Skill + Subject Integration", "Technology as a Tool", "Holistic Growth", "Industry-Linked Learning"]
    },
    {
      icon: Award,
      title: "Output-Oriented Promise",
      subtitle: "To Parents",
      content: "At ThynkEra, every child leaves each program with projects they've built, skills they've mastered, and confidence they've gained. Parents don't just hope their child is learning, they see the results in action.",
      features: ["Projects Built", "Skills Mastered", "Confidence Gained", "Visible Results"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#152238] to-[#001F54] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl"></div>
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
            <span className="text-[#FFD700] font-medium">About ThynkEra</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Education Today
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
              Is Broken
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            If we don't prepare students today, we risk losing tomorrow. That's why ThynkEra exists.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div 
                className={`relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 h-full transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  activeCard === index ? 'border-[#FFD700]/50 shadow-2xl shadow-[#FFD700]/20' : 'hover:border-[#FFD700]/30'
                }`}
              >
                {/* Card Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-2xl transition-all duration-300 ${
                    activeCard === index 
                      ? 'bg-gradient-to-br from-[#FFD700] to-[#FF6A00] shadow-lg' 
                      : 'bg-[#FFD700]/10 group-hover:bg-[#FFD700]/20'
                  }`}>
                    <card.icon className={`w-8 h-8 transition-colors duration-300 ${
                      activeCard === index ? 'text-white' : 'text-[#FFD700]'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{card.title}</h3>
                    <p className="text-[#FFD700] font-medium">{card.subtitle}</p>
                  </div>
                </div>

                {/* Card Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeCard === index ? 'auto' : '120px',
                    opacity: activeCard === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {card.content}
                  </p>

                  {/* Features List */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCard === index ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="space-y-3"
                  >
                    {card.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#FFD700] to-[#FF6A00] rounded-full"></div>
                        <span className="text-white font-medium">{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Card Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeCard === index ? 1 : 0,
                    y: activeCard === index ? 0 : 20
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex items-center text-[#FFD700] font-medium mt-6 group-hover:text-[#FFB400] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-[#FF6A00]/10 rounded-3xl blur-xl transition-opacity duration-500 -z-10 ${
                  activeCard === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-[#FFD700]/10 to-[#FF6A00]/10 backdrop-blur-lg border border-[#FFD700]/20 rounded-3xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">This approach locks knowledge for life</h3>
          <p className="text-xl text-gray-300 mb-6">and makes students confident builders of the future.</p>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FFD700] to-[#FF6A00] rounded-full px-6 py-3">
            <span className="text-[#001F54] font-bold">✨ Junior Innovators (Class 3–10)</span>
          </div>
          <p className="text-gray-300 mt-4">Early exposure to building, designing, and problem-solving.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;