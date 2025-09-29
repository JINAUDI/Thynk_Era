import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Smartphone,
  Monitor,
  Tablet,
  Play,
  ArrowRight,
  Check,
  Star,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const WebApp = () => {
  const [activeDevice, setActiveDevice] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  const devices = [
    { icon: Smartphone, name: "Mobile", active: true },
    { icon: Tablet, name: "Tablet", active: false },
    { icon: Monitor, name: "Desktop", active: false },
  ];

  const features = [
    {
      title: "AI-Powered Learning",
      description:
        "Personalized learning paths powered by advanced AI algorithms that adapt to your learning style and pace.",
      benefits: [
        "Smart Content Recommendations",
        "Adaptive Difficulty Levels",
        "Progress Predictions",
        "Learning Analytics",
      ],
    },
    {
      title: "Interactive Coding Environment",
      description:
        "Practice coding in real-time with our integrated development environment supporting 15+ programming languages.",
      benefits: [
        "Live Code Execution",
        "Collaborative Coding",
        "Code Review System",
        "Project Templates",
      ],
    },
    {
      title: "Virtual Labs & Simulations",
      description:
        "Access state-of-the-art virtual laboratories for hands-on experience with cutting-edge technologies.",
      benefits: [
        "3D Simulations",
        "IoT Device Emulation",
        "Cloud Lab Access",
        "Experiment Recording",
      ],
    },
    {
      title: "Real-time Mentorship",
      description:
        "Connect with industry experts and mentors for guidance, code reviews, and career counseling.",
      benefits: [
        "Video Consultations",
        "Code Mentoring",
        "Career Guidance",
        "Industry Insights",
      ],
    },
  ];

  const mockupScreens = [
    "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGVkdWNhdGlvbiUyMGNvZGluZ3xlbnwxfHx8fDE3NTc3NTcwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc1Nzc1NzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1732284081090-8880f1e1905b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc3MDY4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#152238] to-[#001F54] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-3xl"></div>
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
            <Smartphone className="w-5 h-5 text-[#FFD700]" />
            <span className="text-[#FFD700] font-medium">
              ThynkEra Web App
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Learn Anywhere,
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
              Anytime
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of education with our
            revolutionary web application. Seamlessly integrated
            features for an unparalleled learning experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Device Selector */}
            <div className="flex space-x-4 mb-8">
              {devices.map((device, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveDevice(index)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-full transition-all duration-300 ${
                    activeDevice === index
                      ? "bg-gradient-to-r from-[#FFD700] to-[#FF6A00] text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <device.icon className="w-5 h-5" />
                  <span className="font-medium">
                    {device.name}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeFeature === index ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <Card
                    className={`p-6 bg-white/5 backdrop-blur-lg border transition-all duration-300 hover:shadow-xl ${
                      activeFeature === index
                        ? "border-[#FFD700]/50 shadow-lg shadow-[#FFD700]/20"
                        : "border-white/10 hover:border-[#FFD700]/30"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          activeFeature === index
                            ? "bg-gradient-to-br from-[#FFD700] to-[#FF6A00]"
                            : "bg-[#FFD700]/10"
                        }`}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            activeFeature === index
                              ? "text-white"
                              : "text-[#FFD700]"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {feature.description}
                        </p>

                        <motion.div
                          initial={false}
                          animate={{
                            height:
                              activeFeature === index
                                ? "auto"
                                : "0px",
                            opacity:
                              activeFeature === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-2 pt-2">
                            {feature.benefits.map(
                              (benefit, benefitIndex) => (
                                <div
                                  key={benefitIndex}
                                  className="flex items-center space-x-2"
                                >
                                  <Check className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                                  <span className="text-sm text-gray-400">
                                    {benefit}
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-[#001F54] to-[#152238] p-2 rounded-3xl shadow-2xl border border-[#FFD700]/20">
                <div className="bg-black rounded-2xl overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] h-6 flex items-center justify-between px-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="text-xs text-white font-medium">
                      ThynkEra
                    </div>
                    <div className="text-xs text-white">
                      100%
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div className="relative h-96 bg-gradient-to-b from-[#152238] to-[#001F54]">
                    <motion.img
                      key={activeDevice}
                      src={mockupScreens[activeDevice]}
                      alt="App Screen"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Overlay UI Elements */}
                    <div className="absolute inset-0 p-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#FFD700] to-[#FF6A00] rounded-full"></div>
                          <div>
                            <div className="text-white font-medium text-sm">
                              AI Assistant
                            </div>
                            <div className="text-gray-400 text-xs">
                              Online
                            </div>
                          </div>
                        </div>
                        <div className="text-white text-sm">
                          Ready to start your next lesson?
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] rounded-full p-3 flex items-center justify-center shadow-lg">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-[#FFD700] to-[#FF6A00] p-3 rounded-xl shadow-lg"
                >
                  <Star className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#FF6A00]/20 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future of Learning?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already
              transforming their careers with our revolutionary
              web application. Start your journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Request Demo
                <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 px-8 py-4 rounded-full transition-all duration-300 group"
              >
                Download App
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WebApp;