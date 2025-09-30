import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, GitFork, ExternalLink, Github, Calendar } from "lucide-react";

const Projects = ({ data }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of my open-source contributions and personal projects demonstrating backend development expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.featured.map((project, index) => (
            <Card 
              key={index}
              className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 apple-hover-lift group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-gray-600" />
                    <CardTitle className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-700 leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Language and Topics */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.languageColor }}
                    ></div>
                    <span className="text-sm font-medium text-gray-700">
                      {project.language}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.topics.slice(0, 4).map((topic, topicIndex) => (
                      <Badge 
                        key={topicIndex}
                        variant="outline"
                        className="text-xs border-gray-300 text-gray-600 hover:border-gray-400"
                      >
                        {topic}
                      </Badge>
                    ))}
                    {project.topics.length > 4 && (
                      <Badge 
                        variant="outline"
                        className="text-xs border-gray-300 text-gray-500"
                      >
                        +{project.topics.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Dates and Links */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>Updated {formatDate(project.updatedAt)}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md hover:bg-gray-100 transition-colors duration-200"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-600 hover:text-gray-900" />
                        </a>
                      )}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md hover:bg-gray-100 transition-colors duration-200"
                        title="View Repository"
                      >
                        <Github className="w-4 h-4 text-gray-600 hover:text-gray-900" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/arun-tej"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 apple-hover-scale"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;