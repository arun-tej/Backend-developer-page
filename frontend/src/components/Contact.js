import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = ({ data }) => {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-px bg-gray-600 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 font-light">
            Ready to discuss opportunities and collaborate on exciting projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <a 
                href={`mailto:${data.email}`}
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <div className="p-3 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg">{data.email}</p>
                </div>
              </a>
              
              <a 
                href={`tel:${data.phone}`}
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <div className="p-3 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg">{data.phone}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-gray-800 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg">{data.location}</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8 border-t border-gray-800">
              <div className="flex items-center space-x-4">
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Message */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-medium text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or potential collaborations in backend development and systems architecture.
            </p>
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Send Message
              <Mail className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <div className="pt-16 mt-16 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Arun Tej Saibabu Gudavathi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;