
import TransitionEffect from "@/components/TransitionEffect";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import ProjectCard from "@/components/ProjectCard";
import { Gamepad2, User, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

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
  }
];

const Index = () => {
  return (
    <TransitionEffect>
      <div className="min-h-screen">
        <Navbar />
        
        <main>
          <Hero />
          
          <About />
          
          <Experience />
          
          <Skills />
          
          <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-primary">MY WORK</span>
                    <h2 className="text-3xl font-bold">Featured Projects</h2>
                  </div>
                  
                  <Link 
                    to="/projects" 
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View All Projects →
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
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
              </div>
            </div>
          </section>
          
          <Education />
          
          <Certifications />
          
          <section id="contact" className="py-20 bg-secondary">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col gap-2 mb-12 text-center">
                  <span className="text-sm font-medium text-primary">GET IN TOUCH</span>
                  <h2 className="text-3xl font-bold">Let's Work Together</h2>
                  <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Name</h3>
                        <p className="text-muted-foreground">Vnsh Kumar</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a 
                          href="mailto:vnshkumar21@gmail.com" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          vnshkumar21@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a 
                          href="tel:+917972908179" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91 7972908179
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-muted-foreground">Gurgaon, Haryana, India</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Link 
                      to="/contact" 
                      className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full text-center mb-6"
                    >
                      Send a Message
                    </Link>
                    
                    <div className="bg-card rounded-lg border border-border p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Gamepad2 className="h-6 w-6 text-primary" />
                        <h3 className="font-semibold">Looking for a Game Developer?</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        If you're looking for a passionate game developer to bring your ideas to life, I'd love to hear from you. Let's create something amazing together!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="py-8 bg-card border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Gamepad2 className="text-primary h-5 w-5" />
                <span className="font-medium">VNSH KUMAR</span>
              </div>
              
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

export default Index;
