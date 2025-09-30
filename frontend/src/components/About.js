import React, { useEffect, useRef } from "react";

const About = ({ data }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className="text-center mb-16 section-reveal"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            About
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="prose prose-lg prose-gray max-w-none text-center">
          <p className="text-xl leading-relaxed text-gray-700 font-light section-reveal">
            {data.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;