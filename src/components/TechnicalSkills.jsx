/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import React from 'react';
import { technicalSkills } from '../data/portfolioData';

const SkillProgress = ({ name, level }) => (
  <div className="mb-5">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-white/90 text-sm font-semibold tracking-wide">{name}</span>
      <span className="text-[#ff2a2a] text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/20">{level}%</span>
    </div>
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden border border-white/5 p-[1px]">
      <div 
        className="h-full bg-gradient-to-r from-[#ff2a2a] via-rose-500 to-amber-400 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,42,42,0.5)]"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const SkillCard = ({ category, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7 hover:border-[#ff2a2a]/40 hover:shadow-[0_15px_45px_rgba(255,42,42,0.12)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      <h3 className="text-white text-lg font-black tracking-tight mb-6 pb-3 border-b border-white/10 uppercase flex items-center justify-between">
        <span>{category.title}</span>
        <span className="w-2 h-2 rounded-full bg-[#ff2a2a] shadow-[0_0_8px_#ff2a2a]" />
      </h3>
      <div>
        {category.skills.map((skill) => (
          <SkillProgress key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/5">
      {/* Background visual elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs font-bold text-white/70 uppercase tracking-widest mb-6 shadow-sm bg-white/5 backdrop-blur-md">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            My Skillset
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium">
            A comprehensive overview of my programming languages, frameworks, databases, and engineering concepts.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
