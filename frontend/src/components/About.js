import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Code, Database, Cloud, Zap } from "lucide-react";

const About = ({ data }) => {
  const iconMap = {
    "Backend Expertise": Code,
    "ERP & Systems Integration": Database,
    "Performance Optimization": Zap,
    "DevOps & CI/CD": Cloud
  };

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            About
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        {/* Main Description */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-xl leading-relaxed text-gray-700 font-light">
            {data.text}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {data.highlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.title];
            return (
              <Card 
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-all duration-300 apple-hover-lift text-center"
              >
                <CardHeader className="pb-3">
                  <div className="mx-auto p-3 bg-gray-100 rounded-full mb-3 w-fit">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-lg font-medium text-gray-900">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
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
              <div key={index} className="text-center">
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