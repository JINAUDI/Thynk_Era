import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Code, Lightbulb, MapPin, ArrowRight, Clock, Users, Trophy } from 'lucide-react';
import { Button } from './ui/button';

const Programs = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const programs = [
    {
      icon: BookOpen,
      title: "Future Explorers",
      subtitle: "Class 3–5",
      description: "Introduction to Robotics & Automation through fun, interactive projects. Hands-on experience with Arduino, basic sensors, and simple circuits. Learn basic programming to bring ideas to life. Build first real-world products — from small gadgets to simple automated systems.",
      image: "https://images.unsplash.com/photo-1753613648191-4771cf76f034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc1Nzc1NzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Arduino & Sensors", "Basic Programming", "Simple Circuits", "First Real Products"],
      duration: "6 Months",
      students: "200+",
      rating: "4.9",
      color: "from-[#FFD700] to-[#FFB400]",
      focus: "Curiosity → Creation → Confidence"
    },
    {
      icon: Code,
      title: "Future Foundations",
      subtitle: "Class 6–8",
      description: "Deep dive into science and math concepts through practical application. Design projects with robotics, coding, and automation tools. Work with Arduino, sensors, motors, and programming to solve real problems. Build apps, prototypes, and smart systems that showcase innovation.",
      image: "https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc1Nzc1NzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Science + Math Application", "Robotics Projects", "Apps & Prototypes", "Smart Systems"],
      duration: "12 Months",
      students: "150+",
      rating: "4.8",
      color: "from-[#FF6A00] to-[#FFD700]",
      focus: "Turning concepts into tangible creations"
    },
    {
      icon: Lightbulb,
      title: "Future Builders",
      subtitle: "Class 9–10",
      description: "Advanced robotics, automation, and product development. Learn multiple programming languages and apply them in real-world projects. Team-based innovation challenges with engineering + design thinking. Projects designed for competitions, exhibitions, and real-world use.",
      image: "https://images.unsplash.com/photo-1732284081090-8880f1e1905b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc3MDY4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Advanced Robotics", "Multiple Programming Languages", "Design Thinking", "Competition Projects"],
      duration: "18 Months",
      students: "75+",
      rating: "5.0",
      color: "from-[#FFB400] to-[#FF6A00]",
      focus: "From student innovators to solution creators"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#001F54] to-[#152238] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-3xl"></div>
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
            <BookOpen className="w-5 h-5 text-[#FFD700]" />
            <span className="text-[#FFD700] font-medium">Our Programs</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Future-Ready
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
              Learning Programs
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From curious minds to conscious makers - discover our age-appropriate programs 
            designed to transform students into confident builders of the future.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className={`relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden h-full transition-all duration-500 ${
                  hoveredCard === index 
                    ? 'border-[#FFD700]/50 shadow-2xl shadow-[#FFD700]/20 transform scale-105' 
                    : 'hover:border-[#FFD700]/30'
                }`}
              >
                {/* Program Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredCard === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-20`}></div>
                  
                  {/* Floating Icon */}
                  <motion.div
                    animate={hoveredCard === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    className={`absolute -bottom-6 left-6 p-4 rounded-2xl bg-gradient-to-br ${program.color} shadow-lg`}
                  >
                    <program.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Program Content */}
                <div className="p-8 pt-12">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{program.title}</h3>
                      <p className="text-[#FFD700] font-medium">{program.subtitle}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Trophy className="w-4 h-4 text-[#FFD700]" />
                      <span className="text-[#FFD700] font-medium">{program.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Program Stats */}
                  <div className="flex items-center space-x-6 mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#FFD700]" />
                      <span className="text-gray-400">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-[#FFD700]" />
                      <span className="text-gray-400">{program.students}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: hoveredCard === index ? 'auto' : '80px',
                      opacity: hoveredCard === index ? 1 : 0.7
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-6"
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${program.color} rounded-full`}></div>
                          <span className="text-white text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Focus Area */}
                  <div className="mb-6 p-3 bg-[#FFD700]/10 rounded-xl border border-[#FFD700]/20">
                    <p className="text-[#FFD700] text-sm font-medium text-center">
                      Focus: {program.focus}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredCard === index ? 1 : 0.8,
                      y: hoveredCard === index ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      className={`w-full bg-gradient-to-r ${program.color} hover:shadow-lg text-white font-semibold transition-all duration-300 group`}
                    >
                      Enroll Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-5 rounded-3xl blur-xl transition-opacity duration-500 -z-10 ${
                  hoveredCard === index ? 'opacity-20' : 'opacity-5'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't decide which program is right for your child?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our education counselors are here to help you choose the perfect learning path 
              based on your child's age, interests, and learning goals.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Book a Free Demo Class at your door step
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;