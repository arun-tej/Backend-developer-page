import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' 
        : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-semibold text-gray-900 hover:text-gray-600 transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) animate-fade-in"
          >
            Arun Tej
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) hover:scale-105 animate-fade-in animate-delay-${(index + 1) * 100}`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) hover:scale-110 hover:bg-gray-100 rounded-lg animate-fade-in"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) hover:translate-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg ${
                  isMenuOpen ? 'animate-slide-in-left' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;