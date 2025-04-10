
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Google Gemini Clone",
      description: "Gemini Clone is a web application that mimics a chat interface similar to Google's Gemini. It allows users to interact with a generative language model, view suggestions, and toggle between light and dark themes. The app fetches responses from a generative language API and displays them with a typing effect.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      technologies: ["JavaScript", "React", "API Integration", "CSS"],
      github: "https://github.com/manojkumar/gemini-clone",
      demo: "https://gemini-clone.example.com",
      date: "August 2024"
    },
    {
      title: "Polls App",
      description: "TrueVote is a simple Django polling application, following the official Django documentation tutorial. TrueVote allows users to view and vote on polls created by administrators. It includes functionality to display recent polls, view poll details, vote on choices, and see poll results.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      technologies: ["Python", "Django", "HTML", "CSS"],
      github: "https://github.com/manojkumar/polls-app",
      demo: "https://polls.example.com",
      date: "June 2024"
    },
    {
      title: "EduSphere",
      description: "Developed Edusphere, an e-learning website using React, Django, and Bootstrap. Demonstrated expertise in creating intuitive interfaces, integrating backend functionalities, and ensuring a smooth user experience. Highlights proficiency in leveraging modern technologies for impactful online education solutions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Django", "Bootstrap", "PostgreSQL"],
      github: "https://github.com/manojkumar/edusphere",
      demo: "https://edusphere.example.com",
      date: "Mar 2024"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs bg-blue-50">{project.date}</Badge>
                </div>
                <CardDescription className="line-clamp-2 mt-1">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-theme-blue flex items-center"
                >
                  <Github className="h-4 w-4 mr-1" /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-theme-blue flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
