import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Database, Cloud, Zap } from "lucide-react";

const About = ({ data }) => {
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

    // Staggered animation for highlight cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          card.classList.add('revealed');
        }, index * 150);
      }
    });

    return () => observer.disconnect();
  }, []);

  const iconMap = {
    "Backend Expertise": Code,
    "ERP & Systems Integration": Database,
    "Performance Optimization": Zap,
    "DevOps & CI/CD": Cloud
  };

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className="text-center mb-16 section-reveal"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            About
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        {/* Main Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl leading-relaxed text-gray-700 font-light section-reveal">
            {data.text}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {data.highlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.title];
            return (
              <Card 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="border-0 shadow-sm hover:shadow-md transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) apple-hover-lift section-reveal text-center"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto p-3 bg-gray-100 rounded-full mb-4 w-fit">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-lg font-medium text-gray-900">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center section-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;