
import TransitionEffect from "@/components/TransitionEffect";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import ProjectCard from "@/components/ProjectCard";
import ModelViewer from "@/components/ModelViewer";
import { Gamepad2, User, Mail, MapPin, Phone, Target, Crosshair, Flag } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "AR INFILTRATION SYSTEM",
    description: "An augmented reality application that allows users to visualize 3D models in real-world environments with interactive elements.",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=2070&auto=format&fit=crop",
    tags: ["Unity", "AR", "C#", "3D Modeling"]
  },
  {
    title: "TACTICAL MULTIPLAYER SOLUTION",
    description: "A cooperative puzzle game that leverages Photon PUN for seamless multiplayer interactions across different platforms.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
    tags: ["Unity", "Photon PUN", "C#", "Game Design"]
  },
  {
    title: "VR COMBAT TRAINING",
    description: "A virtual reality training simulation designed for industrial safety procedures with realistic physics and interactions.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop",
    tags: ["Unity", "VR", "C#", "3D Modeling"]
  }
];

const Index = () => {
  return (
    <TransitionEffect>
      <div className="min-h-screen bg-cod-black cod-noise">
        <Navbar />
        
        <main>
          <Hero />
          
          {/* 3D Model Viewer Section */}
          <section className="py-20 relative">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2">
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium tracking-[0.2em] text-primary font-mono">TACTICAL DISPLAY</span>
                      </div>
                      <h2 className="text-3xl font-bold tracking-wider text-gray-100">MISSION VISUALIZATION</h2>
                    </div>
                    <p className="text-muted-foreground font-mono mb-6">
                      Advanced tactical interface system with real-time feedback monitoring. 
                      Deploy mission-critical visualizations with precision targeting capability.
                    </p>
                    <div className="border border-primary/30 p-4 bg-cod-darkgray/40 military-border military-border-bottom mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Crosshair className="h-4 w-4 text-primary" />
                        <span className="text-sm text-primary font-mono">SYSTEM STATUS</span>
                      </div>
                      <div className="font-mono text-xs text-muted-foreground">
                        <div className="flex justify-between mb-1">
                          <span>RENDER ENGINE:</span>
                          <span className="text-primary">ONLINE</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span>TACTICAL OVERLAY:</span>
                          <span className="text-primary">ACTIVE</span>
                        </div>
                        <div className="flex justify-between">
                          <span>TARGET ACQUISITION:</span>
                          <span className="text-primary">STANDBY</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 h-[400px] bg-cod-darkgray/40 border border-cod-gray/50 military-border military-border-bottom">
                    <ModelViewer className="h-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <About />
          
          <Experience />
          
          <Skills />
          
          <section id="projects" className="py-20 bg-cod-black/80 cod-noise">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Flag className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium tracking-[0.2em] text-primary font-mono">MISSION LOG</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-wider text-gray-100">FEATURED OPERATIONS</h2>
                  </div>
                  
                  <Link 
                    to="/projects" 
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors font-mono flex items-center"
                  >
                    VIEW ALL OPERATIONS <Crosshair className="ml-1 h-4 w-4" />
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
          
          <section id="contact" className="py-20 bg-cod-black cod-noise">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col gap-2 mb-12 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium tracking-[0.2em] text-primary font-mono">COMMUNICATION HUB</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-wider text-gray-100">REQUEST ASSISTANCE</h2>
                  <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-mono">
                    Secure communication channel established. Transmit mission parameters for tactical collaboration.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-8">
                    <div className="flex items-start gap-4 bg-cod-darkgray/40 p-4 border border-cod-gray/50 military-border military-border-bottom">
                      <div className="bg-primary/10 p-3">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 font-mono">OPERATIVE</h3>
                        <p className="text-muted-foreground">Vnsh Kumar</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 bg-cod-darkgray/40 p-4 border border-cod-gray/50 military-border military-border-bottom">
                      <div className="bg-primary/10 p-3">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 font-mono">COMMS</h3>
                        <a 
                          href="mailto:vnshkumar21@gmail.com" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          vnshkumar21@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 bg-cod-darkgray/40 p-4 border border-cod-gray/50 military-border military-border-bottom">
                      <div className="bg-primary/10 p-3">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 font-mono">DIRECT LINE</h3>
                        <a 
                          href="tel:+917972908179" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91 7972908179
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 bg-cod-darkgray/40 p-4 border border-cod-gray/50 military-border military-border-bottom">
                      <div className="bg-primary/10 p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 font-mono">HOME BASE</h3>
                        <p className="text-muted-foreground">Gurgaon, Haryana, India</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Link 
                      to="/contact" 
                      className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium military-border military-border-bottom transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_0_15px_rgba(240,200,8,0.5)] w-full text-center mb-6 font-mono"
                    >
                      ESTABLISH CONTACT
                    </Link>
                    
                    <div className="bg-cod-darkgray/40 p-6 border border-cod-gray/50 military-border military-border-bottom">
                      <div className="flex items-center gap-3 mb-4">
                        <Gamepad2 className="h-6 w-6 text-primary" />
                        <h3 className="font-semibold font-mono">RECRUITMENT NOTICE</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 font-mono">
                        Seeking tactical collaboration with development teams for high-impact gaming operations. 
                        Join forces to create elite gameplay experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="py-8 bg-cod-black border-t border-cod-gray">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Target className="text-primary h-5 w-5" />
                <span className="font-mono text-primary">VNSH KUMAR</span>
              </div>
              
              <p className="text-sm text-muted-foreground text-center md:text-right font-mono">
                © {new Date().getFullYear()} TACTICAL DEVELOPMENT SERVICES. ALL RIGHTS SECURED.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </TransitionEffect>
  );
};

export default Index;
