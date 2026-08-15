/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to make navbar more solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.firstName},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen 
          ? 'bg-[#ff2a2a] py-4 shadow-2xl border-b border-white/20'
          : isScrolled 
            ? 'bg-black/70 backdrop-blur-xl py-4 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-black tracking-tight whitespace-nowrap group">
            {personalInfo.brandName}<span className="text-[#ff2a2a] group-hover:text-white transition-colors duration-300">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-white/80 hover:text-white text-sm font-semibold tracking-wide relative group transition-colors duration-300 py-1"
            >
              {link}
              {/* Smooth hover underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#ff2a2a]"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href={personalInfo.resumeUrl}
            download
            className="px-5 py-2 rounded-full bg-white/5 border border-white/20 text-white text-xs font-bold tracking-wide hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
          <a 
            href={hireMeMailto}
            className="px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wide hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 backdrop-blur-md inline-block"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2 rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[#ff2a2a] shadow-2xl border-b border-white/20' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-2 pb-2 flex flex-col gap-2">
             <a 
               href={personalInfo.resumeUrl}
               download
               onClick={() => setIsOpen(false)} 
               className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-black text-white font-bold text-sm hover:bg-gray-900 transition-colors w-full text-center shadow-md"
             >
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
               </svg>
               Download Resume (PDF)
             </a>
             <a 
               href={hireMeMailto}
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-2.5 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
