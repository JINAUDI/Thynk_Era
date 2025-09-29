import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimeouts = useRef<{ [key: string]: NodeJS.Timeout }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(dropdownTimeouts.current).forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('nav')) {
        setActiveDropdown(null);
        // Clear any pending timeouts
        Object.values(dropdownTimeouts.current).forEach(timeout => clearTimeout(timeout));
        dropdownTimeouts.current = {};
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownMouseEnter = (itemName: string) => {
    // Clear any existing timeout for this dropdown
    if (dropdownTimeouts.current[itemName]) {
      clearTimeout(dropdownTimeouts.current[itemName]);
      delete dropdownTimeouts.current[itemName];
    }
    setActiveDropdown(itemName);
  };

  const handleDropdownMouseLeave = (itemName: string) => {
    // Set a delay before closing the dropdown
    dropdownTimeouts.current[itemName] = setTimeout(() => {
      setActiveDropdown(null);
      delete dropdownTimeouts.current[itemName];
    }, 250); // 250ms delay
  };

  const menuItems = [
    {
      name: 'About',
      items: [
        { label: 'Our Vision', path: '/vision' },
        { label: 'Why Choose Us', path: '/why-thynkera' }
      ]
    },
    {
      name: 'Programs',
      items: [
        { label: 'All Programs', path: '/programs' },
        { label: 'Concept Classes', path: '/programs/concept-classes' },
        { label: 'Coding & Tech', path: '/programs/coding-tech' },
        { label: 'Innovation Lab', path: '/programs/innovation-lab' }
      ]
    },
    {
      name: 'Experience',
      items: [
        { label: 'Interactive Platform', path: '/web-app' },
        { label: 'SPARK Event', path: '/spark' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'Success Stories', path: '/testimonials' }
      ]
    }
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#001F54]/90 backdrop-blur-lg border-b border-[#FFD700]/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link 
              to="/" 
              className="relative group"
              onClick={() => {
                // Ensure we scroll to top when navigating to home
                setTimeout(() => window.scrollTo(0, 0), 100);
              }}
            >
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF6A00] bg-clip-text text-transparent">
                ThynkEra
              </h1>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FF6A00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleDropdownMouseEnter(item.name)}
                onMouseLeave={() => handleDropdownMouseLeave(item.name)}
              >
                <button className="flex items-center space-x-1 text-white hover:text-[#FFD700] transition-colors duration-300 group">
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FF6A00] transition-all duration-300 group-hover:w-full"></div>
                </button>

                {/* Dropdown */}
                <motion.div
                  className={`absolute top-full left-0 mt-2 w-48 bg-[#152238]/95 backdrop-blur-lg border border-[#FFD700]/20 rounded-lg shadow-xl ${
                    activeDropdown === item.name ? 'block' : 'hidden'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: activeDropdown === item.name ? 1 : 0, y: activeDropdown === item.name ? 0 : -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.path}
                      className="block px-4 py-3 text-sm text-white hover:text-[#FFD700] hover:bg-[#FFD700]/10 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </motion.div>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white hover:text-[#FFD700] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-[#001F54]/95 backdrop-blur-lg border-t border-[#FFD700]/20">
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-[#FFD700]/10 last:border-b-0">
              <button
                className="w-full flex items-center justify-between px-4 py-4 text-white hover:text-[#FFD700] hover:bg-[#FFD700]/10 transition-all"
                onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
              >
                <span>{item.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === item.name && (
                <div className="bg-[#152238]/50">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.path}
                      className="block px-8 py-3 text-sm text-white hover:text-[#FFD700] hover:bg-[#FFD700]/10 transition-all"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;