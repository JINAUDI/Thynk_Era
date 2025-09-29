import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

// Import Components
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

const galleryItems = [
  {
    id: 1,
    title: "AI Workshop in Progress",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop",
    description: "Students exploring the frontiers of artificial intelligence in our interactive workshop sessions."
  },
  {
    id: 2,
    title: "Coding Bootcamp",
    category: "Bootcamp",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
    description: "Intensive coding sessions where students build real-world applications."
  },
  {
    id: 3,
    title: "Innovation Lab",
    category: "Lab",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
    description: "Our state-of-the-art innovation lab where ideas come to life."
  },
  {
    id: 4,
    title: "Team Collaboration",
    category: "Teamwork",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    description: "Students collaborating on breakthrough projects and solutions."
  },
  {
    id: 5,
    title: "Tech Presentation",
    category: "Presentation",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=300&fit=crop",
    description: "Students presenting their innovative projects to industry experts."
  },
  {
    id: 6,
    title: "Mentorship Session",
    category: "Mentoring",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop",
    description: "One-on-one mentorship sessions with industry professionals."
  },
  {
    id: 7,
    title: "Design Thinking Workshop",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=500&h=300&fit=crop",
    description: "Creative design thinking sessions for UI/UX students."
  },
  {
    id: 8,
    title: "Hackathon Victory",
    category: "Event",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop",
    description: "Celebrating our students' victory at the national hackathon."
  },
  {
    id: 9,
    title: "Data Science Lab",
    category: "Lab",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    description: "Advanced data science laboratory with cutting-edge tools."
  },
  {
    id: 10,
    title: "Industry Visit",
    category: "Visit",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
    description: "Students visiting leading tech companies for real-world exposure."
  },
  {
    id: 11,
    title: "Graduation Ceremony",
    category: "Event",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=500&h=300&fit=crop",
    description: "Celebrating the success of our graduating students."
  },
  {
    id: 12,
    title: "Virtual Reality Demo",
    category: "Demo",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=500&h=300&fit=crop",
    description: "Exploring virtual reality technologies in our VR lab."
  }
];

const categories = ["All", "Workshop", "Bootcamp", "Lab", "Teamwork", "Presentation", "Mentoring", "Event", "Visit", "Demo"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
              Our
              <span className="block bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore the moments that define excellence in education
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Categories */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="py-10 bg-[#152238]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#FFD700] to-[#FF6A00] text-[#001F54]"
                    : "border-2 border-[#FFD700]/30 text-[#FFD700] hover:border-[#FFD700] hover:bg-[#FFD700]/10"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-20 bg-gradient-to-b from-[#152238] to-[#001F54]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedImage(item)}
                  className="glass rounded-2xl overflow-hidden cursor-pointer hover:neon-gold transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-block bg-[#FFD700] text-[#001F54] px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-bold mb-2 group-hover:text-[#FFD700] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-4xl w-full glass rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#FFD700] text-[#001F54] px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}