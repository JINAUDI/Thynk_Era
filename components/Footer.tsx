import React from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const quickLinks = [
    {
      category: "Programs",
      links: [
        "Concept Classes",
        "Coding & Tech",
        "Innovation Lab",
        "Pathway Program",
      ],
    },
    {
      category: "About",
      links: [
        "Our Story",
        "Vision & Mission",
        "Faculty",
        "Campus",
      ],
    },
    {
      category: "Resources",
      links: [
        "Blog",
        "Documentation",
        "Help Center",
        "Community",
      ],
    },
    {
      category: "Connect",
      links: ["Events", "Careers", "Partnerships", "Media Kit"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-blue-300" },
    {
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-400",
    },
    { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    { icon: Youtube, href: "#", color: "hover:text-red-400" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#001F54] to-[#000000] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FF6A00]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="p-2 bg-gradient-to-br from-[#FFD700] to-[#FF6A00] rounded-xl">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                    ThynkEra
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  ThynkEra Institute — Because the world doesn't
                  need more followers. It needs fearless
                  creators.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300 hover:text-[#FFD700] transition-colors group">
                    <MapPin className="w-5 h-5 text-[#FFD700] group-hover:scale-110 transition-transform" />
                    <span>
                      124/471, 2nd floor, SFS chouraha, Madhyam
                      Marg Mansarova
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-300 hover:text-[#FFD700] transition-colors group">
                    <Phone className="w-5 h-5 text-[#FFD700] group-hover:scale-110 transition-transform" />
                    <span>+91 80582 66071, 91192 12688</span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-300 hover:text-[#FFD700] transition-colors group">
                    <Mail className="w-5 h-5 text-[#FFD700] group-hover:scale-110 transition-transform" />
                    <span>hello@thynkera.com</span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-300 hover:text-[#FFD700] transition-colors group">
                    <MessageCircle className="w-5 h-5 text-[#FFD700] group-hover:scale-110 transition-transform" />
                    <span>
                      WhatsApp: +91 80582 66071, 91192 12688
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 mt-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`p-3 bg-white/5 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10 hover:scale-110`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-4 gap-8">
                {quickLinks.map((section, sectionIndex) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: sectionIndex * 0.1,
                    }}
                  >
                    <h4 className="text-white font-semibold mb-6 text-lg">
                      {section.category}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300 group flex items-center"
                          >
                            <span>{link}</span>
                            <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Stay Updated with ThynkEra
                </h3>
                <p className="text-gray-300 mb-6">
                  Get the latest updates on programs, events,
                  and tech innovations directly in your inbox.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD700] focus:bg-white/15 transition-all"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-semibold px-6 py-3 rounded-full transition-all duration-300 group whitespace-nowrap">
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            >
              <div className="text-gray-400 text-sm">
                © 2025 ThynkEra Institute. All rights reserved.
                Building fearless creators for tomorrow.
              </div>

              <div className="flex space-x-6 text-sm">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-[#FFD700] to-[#FF6A00] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group z-50"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowRight className="w-6 h-6 text-white -rotate-90 group-hover:scale-110 transition-transform" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;