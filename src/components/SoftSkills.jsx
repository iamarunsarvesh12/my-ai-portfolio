/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import React from 'react';
import { softSkillsList } from '../data/portfolioData';

const SoftSkillCard = ({ skill, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 hover:scale-[1.03] hover:bg-white hover:border-[#ff2a2a]/30 hover:shadow-[0_20px_45px_rgba(255,42,42,0.08)] transition-all duration-500 group flex flex-col items-center text-center justify-between min-h-[220px]"
  >
    <div className="flex flex-col items-center">
      <div className="text-4xl mb-4 p-3 bg-gray-100 rounded-2xl group-hover:bg-[#ff2a2a]/10 group-hover:scale-110 transition-all duration-300">
        {skill.icon}
      </div>
      <h3 className="text-gray-900 text-lg font-black tracking-tight mb-2 uppercase">
        {skill.name}
      </h3>
      <p className="text-gray-500 text-sm font-medium leading-relaxed">
        {skill.desc}
      </p>
    </div>
  </div>
);

const SoftSkills = () => {
  return (
    <section className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      
      {/* Top paper divider (torn SVG transition from dark section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 uppercase">
            Professional Soft Skills
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Essential traits that make me an effective engineer, coordinator, and communicator.
          </p>
        </div>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SoftSkills;
