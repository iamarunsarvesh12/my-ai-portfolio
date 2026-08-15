/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import React from 'react';
import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-white/5 relative z-20">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1.5 text-white/70">
          {footerContent.taglines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        
        <div className="flex flex-col gap-1.5 md:items-center text-white/70">
          <p>{footerContent.credential}</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1 font-bold text-white">View Work</a>
        </div>
        
        <div className="flex flex-col gap-1.5 md:items-end text-white/70">
          <p>Available for opportunities</p>
          <p className="font-bold text-white">{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-white/90 hover:text-[#ff2a2a] transition-colors duration-700 w-full text-center cursor-default">
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold text-white">Contact</a>
            <span className="text-white/30">•</span>
            <a href={personalInfo.resumeUrl} download className="underline hover:text-[#ff2a2a] transition-colors underline-offset-4 decoration-1 font-bold text-white/90">Download Resume</a>
          </div>
          <p className="text-white/50 font-mono text-[9px] md:text-[10px]">
            {footerContent.copyright}
          </p>
        </div>
        
        <div className="flex flex-col gap-3 md:items-center">
          <a href={`mailto:${personalInfo.emails.primary}`} className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase text-white/80 font-mono">
            {personalInfo.emails.primary}
          </a>
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-2">
            {/* GitHub */}
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#d4d4d4] hover:text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#d4d4d4] hover:text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* Email */}
            <a 
              href={`mailto:${personalInfo.emails.primary}`}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#d4d4d4] hover:text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300"
              aria-label="Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a 
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold text-white/90"
          >
            Explore My GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
