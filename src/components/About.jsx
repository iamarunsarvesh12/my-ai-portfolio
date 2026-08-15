import React from 'react';
import stackImage from '../assets/about/image.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.2 2c-29.6 0-27.8 12.8-27.8 12.8l.1 13.3h28.3v4H24.3C8.4 32.1 2 42.1 2 62.9c0 21.2 13.7 20.5 13.7 20.5h8.2v-11.8c0-16.7 14.3-15.7 14.3-15.7h27.9c13.2 0 13.7-12.2 13.7-12.2V14.8c.1-12.8-16.6-12.8-16.6-12.8zm-15 8.7c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z"/>
      <path fill="#FFD43B" d="M64.8 126c29.6 0 27.8-12.8 27.8-12.8l-.1-13.3H64.2v-4h39.5c15.9 0 22.3-10 22.3-30.8 0-21.2-13.7-20.5-13.7-20.5h-8.2v11.8c0 16.7-14.3 15.7-14.3 15.7H61.9c-13.2 0-13.7 12.2-13.7 12.2v29.9c-.1 12.8 16.6 12.8 16.6 12.8zm15-8.7c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z"/>
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Python</span>
  </div>
);

const SqlIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <ellipse cx="64" cy="32" rx="48" ry="18" fill="#F29111" />
      <path d="M16 32 v32 c0 9.94 21.49 18 48 18 s48-8.06 48-18 V32" fill="none" stroke="#F29111" strokeWidth="12" />
      <path d="M16 64 v32 c0 9.94 21.49 18 48 18 s48-8.06 48-18 V64" fill="none" stroke="#F29111" strokeWidth="12" />
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">SQL</span>
  </div>
);

const JavaIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#5382A1" d="M48.8 98.4s-5.6 3.1 3.9 4.2c11.6 1.4 20.4 1 33.6-1.5 0 0 3.8 2.3 8.3 4.2-22.1 8.5-52.6 1.9-45.8-6.9z"/>
      <path fill="#E76F00" d="M43.7 82.2s-6.3 4.4 3 5.4c11.4 1.3 25.1 1.2 41.5-2.2 0 0 2.7 2.9 6.2 4.3-25.7 6.4-58.4 2.8-50.7-7.5z"/>
      <path fill="#5382A1" d="M63.5 64.9c5.3 6.1-1.4 11.6-1.4 11.6s13.4-6.8 7.3-14.7c-5.6-7.2-9.9-10.7-20.2-19.8 0 0 3.7 8.2 14.3 22.9z"/>
      <path fill="#E76F00" d="M85.4 97c11.1-6.4 12.1-14.5 12.1-14.5s-2.1 4.5-9.3 7.8c-10.3 4.6-25.1 4.2-39.7 1.9 0 0 3.1 2.3 7.2 3.8 9 3.2 18.6 7.4 29.7 1z"/>
      <path fill="#5382A1" d="M37.9 109.9c15.2 3.8 45 4.5 59.4-1.9 0 0-4.3 3.6-10.4 5.3-17.5 4.8-43.1 3.4-53.7-2.3 0 0 1.9-.6 4.7-1.1z"/>
      <path fill="#E76F00" d="M82.2 47.9c4.8 5.6 1.7 13.9.7 17 0 0 7.8-4.8 4.2-11.4-3.9-7-6.2-9.8-15.6-17.6 0 0 5 3.3 10.7 12z"/>
      <path fill="#5382A1" d="M72.2 16c8.5 9.7-14.5 28.5-14.5 28.5s20.9-12.7 14.5-28.5z"/>
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Java</span>
  </div>
);

const DsaIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path d="M64 24 L28 56 L44 96 L84 96 L100 56 Z" fill="none" stroke="#A855F7" strokeWidth="5" strokeLinejoin="round" />
      <line x1="64" y1="24" x2="44" y2="96" stroke="#A855F7" strokeWidth="4" strokeDasharray="4 4" />
      <line x1="64" y1="24" x2="84" y2="96" stroke="#A855F7" strokeWidth="4" strokeDasharray="4 4" />
      <line x1="28" y1="56" x2="100" y2="56" stroke="#A855F7" strokeWidth="4" />
      <circle cx="64" cy="24" r="9" fill="#A855F7" />
      <circle cx="28" cy="56" r="9" fill="#38BDF8" />
      <circle cx="100" cy="56" r="9" fill="#38BDF8" />
      <circle cx="44" cy="96" r="9" fill="#34D399" />
      <circle cx="84" cy="96" r="9" fill="#34D399" />
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">DSA</span>
  </div>
);

const AiCvIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="none" stroke="#00E5FF" strokeWidth="6" d="M14 64C28 36 100 36 114 64C100 92 28 92 14 64Z" />
      <circle cx="64" cy="64" r="22" fill="none" stroke="#00E5FF" strokeWidth="6" />
      <circle cx="64" cy="64" r="10" fill="#00E5FF" />
      <path fill="none" stroke="#00E5FF" strokeWidth="4" d="M24 24h16M24 24v16M104 24h-16M104 24v16M24 104h16M24 104v-16M104 104h-16M104 104v-16" />
    </svg>
    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">AI & Vision</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Arun Sarvesh R — Data Science Enthusiast" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-base md:text-lg font-medium tracking-normal md:tracking-wide leading-relaxed mb-12 max-w-3xl text-white/95"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <SqlIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <JavaIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <DsaIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="700" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <AiCvIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
