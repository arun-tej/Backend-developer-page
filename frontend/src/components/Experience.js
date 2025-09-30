import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Calendar } from "lucide-react";

const Experience = ({ data }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      },
      { threshold: 0.1 }
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
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Experience
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {data.map((job, index) => (
            <Card 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="border-0 shadow-sm hover:shadow-lg transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) apple-hover-lift section-reveal"
            >
              <CardHeader className="pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-medium text-gray-900 mb-2 transition-colors duration-300">
                      {job.position}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-700 font-medium">
                      {job.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1 transition-all duration-300 hover:text-gray-900">
                      <Calendar className="w-4 h-4" />
                      {job.duration}
                    </div>
                    <div className="flex items-center gap-1 transition-all duration-300 hover:text-gray-900">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  {job.achievements.map((achievement, achIndex) => (
                    <li 
                      key={achIndex} 
                      className="flex items-start gap-3 transition-all duration-300 hover:text-gray-900"
                      style={{ animationDelay: `${achIndex * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0 transition-colors duration-300"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                {job.technologies && job.technologies.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-900 mb-3">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="border-gray-300 text-gray-700 transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) hover:border-gray-500 hover:text-gray-900 apple-hover-scale"
                          style={{ animationDelay: `${techIndex * 0.05}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;