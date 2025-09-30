import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = ({ data }) => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.categories.map((category, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm hover:shadow-md transition-all duration-300 apple-hover-lift"
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
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-all duration-300"
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