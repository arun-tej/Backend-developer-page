import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = ({ data }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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

    // Staggered animation for cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          card.classList.add('revealed');
        }, index * 200);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className="text-center mb-16 section-reveal"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Education
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {data.map((edu, index) => (
            <Card 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="border-0 shadow-sm hover:shadow-md transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) apple-hover-lift section-reveal"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-full transition-all duration-300 group-hover:bg-gray-200">
                    <GraduationCap className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-medium text-gray-900 mb-2 transition-colors duration-300">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-700 font-medium mb-3 transition-colors duration-300">
                      {edu.institution}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1 transition-all duration-300 hover:text-gray-900">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </div>
                      {edu.location && (
                        <div className="flex items-center gap-1 transition-all duration-300 hover:text-gray-900">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;