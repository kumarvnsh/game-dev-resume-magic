
import { useState, useEffect } from 'react';
import TransitionEffect from "@/components/TransitionEffect";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "AR Visualization Tool",
    description: "An augmented reality application that allows users to visualize 3D models in real-world environments with interactive elements.",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=2070&auto=format&fit=crop",
    tags: ["Unity", "AR", "C#", "3D Modeling"]
  },
  {
    title: "Multiplayer Puzzle Game",
    description: "A cooperative puzzle game that leverages Photon PUN for seamless multiplayer interactions across different platforms.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
    tags: ["Unity", "Photon PUN", "C#", "Game Design"]
  },
  {
    title: "VR Training Simulation",
    description: "A virtual reality training simulation designed for industrial safety procedures with realistic physics and interactions.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop",
    tags: ["Unity", "VR", "C#", "3D Modeling"]
  },
  {
    title: "Mobile Hyper-Casual Game",
    description: "A fast-paced, addictive mobile game with simple mechanics and increasing difficulty levels.",
    image: "https://images.unsplash.com/photo-1609136650573-563c31ba27db?q=80&w=1974&auto=format&fit=crop",
    tags: ["Unity", "C#", "Mobile", "UI/UX"]
  },
  {
    title: "Interactive Educational Game",
    description: "An educational game that teaches programming concepts through interactive puzzles and challenges.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1974&auto=format&fit=crop",
    tags: ["Unity", "C#", "Educational", "Game Design"]
  },
  {
    title: "3D Adventure Game Prototype",
    description: "A third-person adventure game prototype with advanced character controller and interactive environment.",
    image: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=2069&auto=format&fit=crop",
    tags: ["Unity", "C#", "3D Modeling", "Animation"]
  }
];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Extract unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );
  
  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <TransitionEffect>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <Link 
                  to="/" 
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
                </Link>
                
                <div className="flex flex-col gap-2 mb-8">
                  <span className="text-sm font-medium text-primary">MY WORK</span>
                  <h1 className="text-4xl font-bold">Projects</h1>
                  <p className="text-muted-foreground max-w-2xl mt-2">
                    A showcase of my work in game development, AR/VR applications and interactive experiences.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-12">
                  <button
                    className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                      selectedTag === null
                        ? 'bg-primary text-white'
                        : 'bg-secondary hover:bg-secondary/80 text-foreground'
                    }`}
                    onClick={() => setSelectedTag(null)}
                  >
                    All
                  </button>
                  
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                        selectedTag === tag
                          ? 'bg-primary text-white'
                          : 'bg-secondary hover:bg-secondary/80 text-foreground'
                      }`}
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              <div 
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    delay={index * 100}
                  />
                ))}
              </div>
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground">No projects found with the selected tag.</p>
                </div>
              )}
            </div>
          </div>
        </main>
        
        <footer className="py-8 bg-card border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-right">
                © {new Date().getFullYear()} Vnsh Kumar. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </TransitionEffect>
  );
};

export default Projects;
