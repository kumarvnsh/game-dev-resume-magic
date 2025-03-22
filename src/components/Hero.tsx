
import { ArrowDownCircle, Target, Bomb, Flag } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [glitchText, setGlitchText] = useState("UNITY DEVELOPER");
  
  useEffect(() => {
    setIsVisible(true);
    
    // Simple glitch effect for the title
    const glitchInterval = setInterval(() => {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const textArray = glitchText.split('');
      const randomIndex = Math.floor(Math.random() * textArray.length);
      const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
      textArray[randomIndex] = randomChar;
      setGlitchText(textArray.join(''));
      
      // Reset after brief moment
      setTimeout(() => {
        setGlitchText("UNITY DEVELOPER");
      }, 100);
    }, 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 cod-noise bg-cod-black/90">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cod-darkgray/40 via-cod-black/80 to-cod-black"></div>
      
      {/* Decorative tactical elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 military-border"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border border-primary/30 military-border"></div>
      <div className="absolute top-1/4 right-1/4 opacity-20 rotate-12">
        <Target className="w-64 h-64 text-primary" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-primary/50 bg-primary/10">
              <span className="inline-block w-2 h-2 bg-primary animate-pulse"></span>
              <span className="text-xs font-mono tracking-widest text-primary" data-text={glitchText}>
                {glitchText}
              </span>
            </div>
          </div>
          
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 delay-500 glitch-effect ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            data-text="TACTICAL GAME DEVELOPMENT"
          >
            TACTICAL <span className="text-primary relative">GAME</span> DEVELOPMENT
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-mono transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Elite Unity Developer with battlefield expertise in AR/VR operations and multiplayer tactical systems. 
            Combining precision technical skills with strategic game design for high-impact user engagement.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="#about" 
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-none military-border military-border-bottom transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_0_15px_rgba(240,200,8,0.5)] group flex items-center"
            >
              <Flag className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              BEGIN MISSION
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 font-medium rounded-none military-border military-border-bottom transition-all duration-300 flex items-center"
            >
              <Bomb className="mr-2 h-4 w-4" />
              CONTACT OPERATIVE
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="text-primary h-10 w-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
