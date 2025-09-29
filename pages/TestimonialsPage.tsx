import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

// Import Components
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

const testimonials = [
  {
    name: "Arjun Sharma",
    course: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "ThynkEra transformed my understanding of technology. The personalized approach and cutting-edge curriculum prepared me for the future job market. I landed my dream job at a top tech company!"
  },
  {
    name: "Priya Patel",
    course: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The AI program at ThynkEra is exceptional. The mentors are industry experts who provided real-world insights. The hands-on projects helped me build a strong portfolio."
  },
  {
    name: "Rahul Verma",
    course: "Data Science",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "From zero coding knowledge to becoming a data scientist - ThynkEra made it possible. The structured learning path and continuous support kept me motivated throughout."
  },
  {
    name: "Sneha Gupta",
    course: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The design thinking approach at ThynkEra is revolutionary. I learned to create user-centered designs that solve real problems. My portfolio stands out in the competitive design market."
  },
  {
    name: "Vikash Kumar",
    course: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "ThynkEra's cybersecurity program is comprehensive and up-to-date with current threats. The practical labs and ethical hacking sessions were incredibly valuable."
  },
  {
    name: "Ananya Singh",
    course: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The digital marketing course covers everything from strategy to execution. The real campaign projects gave me hands-on experience that employers value."
  },
  {
    name: "Karthik Reddy",
    course: "Blockchain Development",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Learning blockchain at ThynkEra opened up new career opportunities. The curriculum is cutting-edge and the instructors are pioneers in the field."
  },
  {
    name: "Deepika Rao",
    course: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The cloud computing program is perfectly structured for beginners and experts alike. I got certified in AWS and Azure and now lead cloud initiatives at my company."
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="glass rounded-2xl p-8 hover:neon-gold transition-all duration-300 group"
  >
    {/* Rating Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <span key={i} className="text-[#FFD700] text-xl">★</span>
      ))}
    </div>

    {/* Testimonial Text */}
    <p className="text-gray-300 mb-6 leading-relaxed italic">
      "{testimonial.text}"
    </p>

    {/* User Info */}
    <div className="flex items-center gap-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover border-2 border-[#FFD700]/30"
      />
      <div>
        <h4 className="text-white font-bold group-hover:text-[#FFD700] transition-colors">
          {testimonial.name}
        </h4>
        <p className="text-gray-400 text-sm">{testimonial.course}</p>
      </div>
    </div>
  </motion.div>
);

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <BackButton />
      
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-40 pb-24 bg-gradient-to-b from-[#001F54] to-[#152238] relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6A00]/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Real testimonials from our amazing students who are building their future with ThynkEra
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                5000+
              </div>
              <div className="text-gray-300">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                4.9/5
              </div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Grid */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-[#152238] to-[#001F54]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-[#001F54] via-[#0A3D91] to-[#152238] relative overflow-hidden"
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Success Story
              <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                Starts Here
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of students who are building their future with ThynkEra
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/programs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">👉 Start Your Journey</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}