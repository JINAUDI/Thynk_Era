import React, { memo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BackButton = memo(() => {
  return (
    <Link to="/">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-24 left-6 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="glass neon-gold rounded-full p-3 backdrop-blur-lg bg-[#001F54]/30 border border-[#FFD700]/30 hover:border-[#FFD700]/60 hover:bg-[#FFD700]/10 transition-all duration-300 shadow-lg">
          <ArrowLeft className="w-6 h-6 text-[#FFD700]" />
        </div>
      </motion.div>
    </Link>
  );
});

BackButton.displayName = 'BackButton';

export default BackButton;