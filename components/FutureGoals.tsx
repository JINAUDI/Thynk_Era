import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Globe, Users, Building, Award, Target, ArrowRight, Calendar } from 'lucide-react';

const FutureGoals = () => {
  const [activeGoal, setActiveGoal] = useState(0);

  const goals = [
    {
      year: "2024",
      title: "National Expansion",
      icon: Building,
      status: "In Progress",
      description: "Launch ThynkEra centers in 10 major Indian cities, establishing a strong nationwide presence.",
      milestones: [
        "Open 5 new campuses in Tier-1 cities",
        "Partner with 100+ schools nationwide", 
        "Enroll 2000+ students across all centers",
        "Launch mobile learning app with 10k downloads"
      ],
      color: "from-[#FFD700] to-[#FFB400]",
      progress: 65
    },
    {
      year: "2025",
      title: "Global Recognition",
      icon: Globe,
      status: "Planned",
      description: "Achieve international recognition and establish partnerships with global tech leaders and universities.",
      milestones: [
        "Partner with Silicon Valley tech companies",
        "Launch international student exchange program",
        "Achieve ISO 9001:2015 certification",
        "Win 'Best EdTech Innovation' award"
      ],
      color: "from-[#FF6A00] to-[#FFD700]",
      progress: 25
    },
    {
      year: "2026",
      title: "Innovation Leadership",
      icon: Rocket,
      status: "Vision",
      description: "Become India's leading innovation hub for emerging technologies and student entrepreneurship.",
      milestones: [
        "Establish ThynkEra Research Institute",
        "Incubate 100+ student startups",
        "Launch quantum computing curriculum",
        "Create AI-powered personalized learning platform"
      ],
      color: "from-[#FFB400] to-[#FF6A00]",
      progress: 15
    },
    {
      year: "2027",
      title: "Ecosystem Transformation",
      icon: Users,
      status: "Future",
      description: "Transform the entire educational ecosystem through technology integration and industry collaboration.",
      milestones: [
        "Impact 50,000+ students annually",
        "Partner with 500+ companies for placements",
        "Launch corporate training division",
        "Establish ThynkEra University"
      ],
      color: "from-[#FF6A00] to-[#FFD700]",
      progress: 5
    }
  ];

  const achievements = [
    { icon: Target, number: "2024", label: "Current Year", color: "text-[#FFD700]" },
    { icon: Building, number: "10", label: "Planned Centers", color: "text-[#FF6A00]" },
    { icon: Users, number: "50K+", label: "Target Students", color: "text-[#FFD700]" },
    { icon: Award, number: "100+", label: "Industry Partners", color: "text-[#FF6A00]" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#001F54] to-[#152238] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl"></div>
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
            <Rocket className="w-5 h-5 text-[#FFD700]" />
            <span className="text-[#FFD700] font-medium">Future Roadmap</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Building Tomorrow's
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
              Education Empire
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our ambitious roadmap to transform education in India and beyond. Join us as we create 
            the future of learning, innovation, and technology education.
          </p>
        </motion.div>

        {/* Achievement Stats */}
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
                    <achievement.icon className={`w-8 h-8 ${achievement.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold ${achievement.color} mb-2 group-hover:scale-110 transition-transform`}>
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 font-medium">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FFD700] to-[#FF6A00] rounded-full opacity-20"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                onMouseEnter={() => setActiveGoal(index)}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 transition-all duration-500 cursor-pointer ${
                      activeGoal === index 
                        ? 'border-[#FFD700]/50 shadow-2xl shadow-[#FFD700]/20 scale-105' 
                        : 'hover:border-[#FFD700]/30'
                    }`}
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className={`flex items-center justify-between mb-4 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`flex items-center space-x-3 ${index % 2 === 0 ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${goal.color}`}>
                          <goal.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{goal.title}</h3>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-[#FFD700]" />
                            <span className="text-[#FFD700] font-medium">{goal.year}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        goal.status === 'In Progress' ? 'bg-green-500/20 text-green-400' :
                        goal.status === 'Planned' ? 'bg-blue-500/20 text-blue-400' :
                        goal.status === 'Vision' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {goal.status}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {goal.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Progress</span>
                        <span className="text-sm text-[#FFD700] font-medium">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${goal.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${goal.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Milestones */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: activeGoal === index ? 'auto' : '0px',
                        opacity: activeGoal === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2">
                        {goal.milestones.map((milestone, milestoneIndex) => (
                          <div key={milestoneIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${goal.color} rounded-full flex-shrink-0`}></div>
                            <span className="text-white text-sm font-medium">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${goal.color} opacity-5 rounded-3xl blur-xl transition-opacity duration-500 -z-10 ${
                      activeGoal === index ? 'opacity-20' : 'opacity-5'
                    }`}></div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${goal.color} flex items-center justify-center shadow-lg transition-all duration-500 ${
                      activeGoal === index ? 'scale-125 shadow-2xl' : 'scale-100'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-white font-bold text-lg">{goal.year.slice(-2)}</span>
                  </motion.div>
                </div>

                {/* Empty Space */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#FF6A00]/10 backdrop-blur-lg border border-[#FFD700]/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Be Part of Our Journey
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us in building the future of education. Whether you're a student, educator, or industry partner, 
              there's a place for you in our vision of tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Mission
                <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-4 rounded-full transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureGoals;