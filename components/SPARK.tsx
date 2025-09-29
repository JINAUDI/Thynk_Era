import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Clock, Users, Star, ArrowRight, Zap, Award, Play, Trophy, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const SPARK = () => {
  // Countdown to next SPARK event (example: 30 days from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % pastEvents.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  const highlights = [
    {
      title: "Innovation Showcase",
      description: "Student projects that solve real-world problems",
      stat: "50+",
      icon: Zap,
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Tech Competitions", 
      description: "AI/ML, Robotics, and Coding challenges",
      stat: "12",
      icon: Award,
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "Industry Mentors",
      description: "Leaders from top tech companies",
      stat: "25+", 
      icon: Users,
      gradient: "from-green-400 to-emerald-400"
    },
    {
      title: "Awards & Recognition",
      description: "Scholarships and career opportunities",
      stat: "₹10L+",
      icon: Star,
      gradient: "from-yellow-400 to-orange-400"
    }
  ];

  const pastEvents = [
    {
      title: "SPARK 2025: AI Revolution",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1732284081090-8880f1e1905b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc3MDY4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      participants: "500+",
      description: "A groundbreaking event showcasing AI innovations by our students with breakthrough projects in machine learning, neural networks, and autonomous systems.",
      achievements: ["Best AI Project Award", "Industry Partnership Deals", "₹5L+ Prize Pool"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "SPARK 2023: Robotics Future",
      date: "October 20, 2023", 
      image: "https://images.unsplash.com/photo-1630396814511-340128f6300a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGVuZ2luZWVyaW5nJTIwbGFifGVufDF8fHx8MTc1Nzc1NzA5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      participants: "400+", 
      description: "Advanced robotics demonstrations and competitions featuring autonomous drones, humanoid robots, and industrial automation solutions.",
      achievements: ["Best Robotics Innovation", "Tech Startup Incubation", "Global Recognition"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "SPARK 2023: Code & Create",
      date: "June 10, 2023",
      image: "https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc1Nzc1NzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080", 
      participants: "350+",
      description: "24-hour hackathon featuring cutting-edge technologies like blockchain, quantum computing, and next-gen web applications.",
      achievements: ["48-Hour Innovation Sprint", "Venture Capital Pitch", "Open Source Contributions"],
      color: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#152238] via-[#0A3D91] to-[#001F54] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-[#FF6A00]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#FFD700]/5 to-[#FF6A00]/5 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#FFD700]/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -50, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#FFD700]/20 to-[#FF6A00]/20 backdrop-blur-lg border border-[#FFD700]/30 rounded-full px-8 py-4 mb-8 relative overflow-hidden"
          >
            <Sparkles className="w-6 h-6 text-[#FFD700]" />
            <span className="text-[#FFD700] font-semibold text-lg">SPARK Events</span>
            <Zap className="w-6 h-6 text-[#FF6A00]" />
            
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-[#FF6A00]/10"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where Innovation
            <motion.span 
              className="block bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FF6A00] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              Sparks Revolution
            </motion.span>
          </motion.h2>

          <motion.p 
            className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            SPARK is our flagship annual celebration of innovation, creativity, and technological excellence. 
            Join hundreds of brilliant minds, compete in cutting-edge challenges, and network with industry titans.
          </motion.p>
        </motion.div>

        {/* Enhanced Countdown Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-[2rem] p-12 mb-20 relative overflow-hidden"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 via-transparent to-[#FF6A00]/10 opacity-50"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-3 mb-6"
              >
                <div className="p-3 bg-gradient-to-br from-[#FFD700] to-[#FF6A00] rounded-xl">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-4xl font-bold text-white">Next SPARK Event</h3>
                  <p className="text-[#FFD700] text-xl font-semibold">SPARK 2025: Quantum Innovations</p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <motion.div
                  key={unit}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="bg-gradient-to-br from-[#FFD700]/30 to-[#FF6A00]/30 backdrop-blur-xl border border-[#FFD700]/40 rounded-3xl p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700"></div>
                    
                    <motion.div 
                      className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-3"
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      {value.toString().padStart(2, '0')}
                    </motion.div>
                    <div className="text-lg text-white uppercase tracking-wider font-semibold">
                      {unit}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="flex items-center justify-center space-x-3 text-gray-300 bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
                <Calendar className="w-6 h-6 text-[#FFD700]" />
                <span className="text-lg font-medium">April 15, 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300 bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
                <MapPin className="w-6 h-6 text-[#FFD700]" />
                <span className="text-lg font-medium">ThynkEra Campus</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300 bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
                <Clock className="w-6 h-6 text-[#FFD700]" />
                <span className="text-lg font-medium">9:00 AM - 6:00 PM</span>
              </div>
            </div>

            <div className="text-center">
              <motion.div
                className="inline-flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10">Register for SPARK 2025</span>
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-all duration-300" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 px-10 py-5 rounded-full transition-all duration-300 group backdrop-blur-sm"
                >
                  <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                  Watch Highlights
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Event Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
              whileHover={{ y: -15, scale: 1.05 }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center h-full relative overflow-hidden group-hover:border-[#FFD700]/50 transition-all duration-500">
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <motion.div 
                  className="bg-gradient-to-br from-[#FFD700]/30 to-[#FF6A00]/30 rounded-3xl p-6 mb-6 inline-block relative"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <highlight.icon className="w-10 h-10 text-[#FFD700]" />
                </motion.div>
                
                <motion.div 
                  className="text-4xl font-bold text-[#FFD700] mb-4"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {highlight.stat}
                </motion.div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Past Events Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Legendary SPARK
              <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                Moments
              </span>
            </motion.h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Relive the excitement, breakthroughs, and life-changing moments from our previous 
              SPARK events. Each year brings unprecedented innovation and exceptional talent.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-[2rem] overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-96">
                    <img
                      src={pastEvents[activeSlide].image}
                      alt={pastEvents[activeSlide].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${pastEvents[activeSlide].color} opacity-30`}></div>
                    <div className="absolute top-6 right-6 bg-[#FFD700] text-[#001F54] px-4 py-2 rounded-full font-bold">
                      <Users className="w-4 h-4 inline mr-2" />
                      {pastEvents[activeSlide].participants}
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col justify-center">
                    <div className="flex items-center space-x-3 text-[#FFD700] mb-4">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">{pastEvents[activeSlide].date}</span>
                    </div>
                    
                    <h4 className="text-3xl font-bold text-white mb-6">
                      {pastEvents[activeSlide].title}
                    </h4>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {pastEvents[activeSlide].description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {pastEvents[activeSlide].achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <Trophy className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                          <span className="text-white font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      className="bg-gradient-to-r from-[#FFD700]/20 to-[#FF6A00]/20 border border-[#FFD700]/50 text-[#FFD700] hover:bg-[#FFD700]/30 px-6 py-3 rounded-full transition-all duration-300 group self-start"
                    >
                      View Event Gallery
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Carousel Navigation */}
            <div className="flex justify-center space-x-3 mt-8">
              {pastEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeSlide 
                      ? 'bg-gradient-to-r from-[#FFD700] to-[#FF6A00] scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-[2rem] p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-[#FF6A00]/5"></div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Make
                <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                  History?
                </span>
              </motion.h3>
              
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                SPARK 2025 is your launchpad to demonstrate groundbreaking innovations, compete with the brightest minds, 
                gain recognition from industry leaders, and potentially change the world. Your breakthrough moment awaits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10">Submit Your Project</span>
                    <Sparkles className="ml-3 w-6 h-6 group-hover:rotate-180 transition-all duration-500" />
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 px-10 py-5 rounded-full transition-all duration-300 group backdrop-blur-sm"
                  >
                    <Trophy className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                    View Past Winners
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SPARK;