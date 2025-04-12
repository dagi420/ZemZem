import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Zemzem Logo" className="h-20 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-primary hover:text-accent transition-colors">Home</a>
            <a href="#products" className="text-primary hover:text-accent transition-colors">Products</a>
            <a href="#about" className="text-primary hover:text-accent transition-colors">About</a>
            <a href="#contact" className="text-primary hover:text-accent transition-colors">Contact</a>
            <a href="tel:+1234567890" className="flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-accent transition-colors">
              <Phone size={18} className="mr-2" />
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-primary hover:bg-gray-50">Home</a>
              <a href="#products" className="block px-3 py-2 text-primary hover:bg-gray-50">Products</a>
              <a href="#about" className="block px-3 py-2 text-primary hover:bg-gray-50">About</a>
              <a href="#contact" className="block px-3 py-2 text-primary hover:bg-gray-50">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}