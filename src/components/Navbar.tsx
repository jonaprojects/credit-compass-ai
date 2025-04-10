
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, BarChart3, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm py-4">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">Credit Advisor</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-brand-purple transition-colors">Home</Link>
          <Link to="/features" className="text-gray-700 hover:text-brand-purple transition-colors flex items-center gap-1">
            <BarChart3 className="w-4 h-4" />
            Features
          </Link>
          <Link to="/demo" className="text-gray-700 hover:text-brand-purple transition-colors flex items-center gap-1">
            <PlayCircle className="w-4 h-4" />
            Try Demo
          </Link>
          <Link to="/impact" className="text-gray-700 hover:text-brand-purple transition-colors">Social Impact</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-brand-purple transition-colors">Pricing</Link>
          <div className="flex space-x-4">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="bg-brand-purple hover:bg-brand-purple/90" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-brand-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="text-gray-700 hover:text-brand-purple transition-colors py-2 flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <BarChart3 className="w-4 h-4" />
              Features
            </Link>
            <Link 
              to="/demo" 
              className="text-gray-700 hover:text-brand-purple transition-colors py-2 flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <PlayCircle className="w-4 h-4" />
              Try Demo
            </Link>
            <Link 
              to="/impact" 
              className="text-gray-700 hover:text-brand-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Social Impact
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-700 hover:text-brand-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
              </Button>
              <Button className="w-full bg-brand-purple hover:bg-brand-purple/90" asChild>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
