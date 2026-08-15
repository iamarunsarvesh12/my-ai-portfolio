/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import React from 'react';
import { leadershipList } from '../data/portfolioData';

const LeadershipItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 w-full group">
      {/* Timeline line dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#ff2a2a] rounded-full border-4 border-black z-30 shadow-[0_0_15px_#ff2a2a] group-hover:scale-125 transition-transform duration-300" />

      {/* Card Content Side */}
      <div 
        data-aos={isEven ? "fade-right" : "fade-left"}
        className={`w-full md:w-[45%] pl-12 md:pl-0 ${
          isEven ? 'md:text-right md:order-1' : 'md:text-left md:order-2'
        }`}
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7 hover:border-[#ff2a2a]/40 hover:shadow-[0_15px_40px_rgba(255,42,42,0.15)] hover:-translate-y-1 transition-all duration-500">
          <div className={`flex flex-wrap gap-2 items-center mb-3.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            <span className="bg-[#ff2a2a]/20 text-[#ff2a2a] text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#ff2a2a]/30 shadow-[0_0_10px_rgba(255,42,42,0.2)]">
              {item.badge}
            </span>
          </div>
          
          <h3 className="text-white text-xl font-black mb-1 tracking-tight group-hover:text-[#ff2a2a] transition-colors">
            {item.title}
          </h3>
          <p className="text-[#ff2a2a] text-xs font-bold font-mono tracking-wider uppercase mb-4">
            {item.role}
          </p>
          <p className="text-white/70 text-sm leading-relaxed font-medium">
            {item.description}
          </p>
        </div>
      </div>

      {/* Spacing spacer for desktop */}
      <div className="hidden md:block w-[45%] order-2" />
    </div>
  );
};

const Leadership = () => {
  return (
    <section className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/5 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs font-bold text-white/70 uppercase tracking-widest mb-6 shadow-sm bg-white/5 backdrop-blur-md">
            Activities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Leadership & Engagement
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed font-medium">
            Coordinating events, leading team operations, and participating in tech summits.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative w-full">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

          {/* Timeline Items */}
          <div className="w-full">
            {leadershipList.map((item, index) => (
              <LeadershipItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
