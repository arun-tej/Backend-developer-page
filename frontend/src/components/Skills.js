import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = ({ data }) => {
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

    // Observe each card for staggered animation
    cardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          card.classList.add('revealed');
        }, index * 150);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className="text-center mb-16 section-reveal"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.categories.map((category, index) => (
            <Card 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="border-0 shadow-sm hover:shadow-md transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) apple-hover-lift section-reveal"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-medium text-gray-900">
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) apple-hover-scale"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;