
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gamepad2, Target, Crosshair } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cod-black/90 backdrop-blur-md border-b border-cod-gray/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-bold text-xl group"
        >
          <Target className="text-primary transition-transform duration-500 group-hover:rotate-12" />
          <span className="font-mono tracking-wider transition-colors duration-300 hover:text-primary">VNSH KUMAR</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-mono tracking-wider transition-colors hover:text-primary flex items-center ${
                location.pathname === link.path ? 'text-primary' : ''
              }`}
            >
              {location.pathname === link.path && (
                <Crosshair className="h-3 w-3 mr-1 text-primary" />
              )}
              {link.name.toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-cod-black/95 backdrop-blur-lg transform md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl font-mono tracking-wider transition-colors hover:text-primary flex items-center ${
                location.pathname === link.path ? 'text-primary' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {location.pathname === link.path && (
                <Crosshair className="h-4 w-4 mr-2 text-primary" />
              )}
              {link.name.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
