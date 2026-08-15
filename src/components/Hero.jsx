/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/yusuf-hero.mp4';
import heroAvatar from '../assets/about/image.png';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center pt-24 pb-16 lg:py-0 border-b border-white/5">
      
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#ff2a2a]/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Left Floating Social Bar for Extra Large Screens */}
      <div className="hidden xl:flex flex-col gap-5 fixed left-8 top-1/2 -translate-y-1/2 z-50">
        <a 
          href={socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:shadow-[0_0_20px_rgba(255,42,42,0.6)] transition-all duration-300 transform hover:scale-110"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:shadow-[0_0_20px_rgba(255,42,42,0.6)] transition-all duration-300 transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a 
          href={`mailto:${personalInfo.emails.primary}`} 
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:shadow-[0_0_20px_rgba(255,42,42,0.6)] transition-all duration-300 transform hover:scale-110"
          aria-label="Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      {/* Main 2-Column Responsive Grid */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text & CTAs (Strictly constrained to 6/12 columns on desktop) */}
        <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left w-full max-w-xl">
          {/* Mobile / Inline social badges */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex items-center gap-3 mb-6 xl:hidden"
          >
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 hover:text-white" aria-label="GitHub">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 hover:text-white" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href={`mailto:${personalInfo.emails.primary}`} className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 hover:text-white" aria-label="Email">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>

          {/* Greeting Badge */}
          <div 
            data-aos="fade-up"
            className="inline-block border border-[#ff2a2a]/30 bg-[#ff2a2a]/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#ff2a2a] uppercase mb-4 shadow-[0_0_15px_rgba(255,42,42,0.2)]"
          >
            Portfolio
          </div>

          {/* Main Headline */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black mb-5 tracking-tight leading-[1.15]"
          >
            {heroContent.greeting}, <br /> 
            <span className="text-[#ff2a2a] drop-shadow-[0_0_25px_rgba(255,42,42,0.5)] font-black">
              {heroContent.titleHighlight}
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="250"
            className="text-white/80 text-sm md:text-base font-medium mb-8 max-w-lg leading-relaxed"
          >
            {heroContent.subtitle}
          </p>

          {/* CTA Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="350"
            className="flex flex-row flex-wrap items-center gap-3 md:gap-4 w-full"
          >
            {/* Primary Button */}
            <a 
              href={heroContent.ctaPrimary.href}
              className="px-6 py-3 text-xs md:text-sm rounded-full bg-white text-black font-bold tracking-wide hover:bg-gray-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {heroContent.ctaPrimary.text}
            </a>
            
            {/* Secondary Button */}
            <a 
              href={heroContent.ctaSecondary.href}
              className="px-6 py-3 text-xs md:text-sm rounded-full bg-black/40 border border-white/20 text-white font-bold tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume Download Button */}
            <a 
              href={heroContent.ctaResume.href}
              download
              className="px-6 py-3 text-xs md:text-sm rounded-full bg-white/5 border border-white/20 text-white font-bold tracking-wide hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-md flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>
        </div>

        {/* Right Column: Unobscured Character Artwork Frame & Video Control */}
        <div className="lg:col-span-5 xl:col-span-6 flex flex-col items-center lg:items-end justify-center w-full mt-4 lg:mt-0 relative z-20">
          
          {/* Character Card Frame */}
          <div 
            data-aos="zoom-in" 
            data-aos-delay="300"
            className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-white/15 via-white/5 to-black/60 border border-white/20 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(255,42,42,0.15)] group transition-all duration-500 hover:border-[#ff2a2a]/40"
          >
            {/* Inner Image / Video Box */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-950 border border-white/10 shadow-inner">
              <img 
                src={heroAvatar} 
                alt="Arun Sarvesh R — Computer Science & Engineering Student" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />

              {/* Video Player overlay when activated */}
              <video
                ref={videoRef}
                loop
                muted={isMuted}
                playsInline
                className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <source src="/Hero Talking Video.mp4" type="video/mp4" />
                <source src={heroVideo} type="video/mp4" />
              </video>

              {/* Bottom Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Interactive Video Play Trigger Control */}
              <div 
                className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-black/90 hover:border-[#ff2a2a]/50 transition-all duration-300 shadow-xl"
                onClick={toggleVideo}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ff2a2a] text-white flex items-center justify-center shadow-[0_0_15px_rgba(255,42,42,0.6)] group-hover:scale-110 transition-transform shrink-0">
                    {!isPlaying || isMuted ? (
                      <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="text-white text-xs font-black tracking-wide">
                      {!isPlaying || isMuted ? "Play Video Reel" : "Pause Video Reel"}
                    </div>
                    <div className="text-white/60 text-[10px] font-mono uppercase tracking-wider">
                      Arun Sarvesh R • AI & Vision
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 px-2.5 py-1 rounded-full shrink-0">
                  {isPlaying ? 'LIVE' : 'HD'}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white/70 drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
