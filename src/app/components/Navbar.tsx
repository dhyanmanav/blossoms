import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../imports/logo.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#products', label: 'Products' },
    { href: '#how', label: 'How It Works' },
    { href: '#why', label: 'Why Us' },
    { href: '#policies', label: 'Policies' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={logo} alt="Blossoms Inspirella" className="h-16 lg:h-20 w-auto object-contain" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-800 text-sm font-bold uppercase tracking-wider hover:text-gray-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdJD2JxAZcsmwOVk9jYk5fXXXowSMUD3Z2FmPjjpv_rK1FM2A/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
              >
                Order Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-800 hover:text-gray-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 bg-white shadow-xl">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-800 text-base font-bold uppercase tracking-wide py-3 border-b border-gray-100 hover:text-gray-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdJD2JxAZcsmwOVk9jYk5fXXXowSMUD3Z2FmPjjpv_rK1FM2A/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black text-white px-6 py-3 rounded-full text-base font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}