import React from "react";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = ({ data }) => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-light text-gray-900 tracking-tight">
              {data.name}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-light">
              {data.title}
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {data.location}
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex items-center justify-center space-x-8 pt-8">
            <a
              href={`mailto:${data.email}`}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 group apple-hover-scale apple-hover-lift"
            >
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
            </a>
            <a
              href={`tel:${data.phone}`}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 group apple-hover-scale apple-hover-lift"
            >
              <Phone className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 group apple-hover-scale apple-hover-lift"
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 group apple-hover-scale apple-hover-lift"
            >
              <Github className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16">
            <button
              onClick={scrollToNext}
              className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 apple-hover-scale animate-bounce"
            >
              <ArrowDown className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;