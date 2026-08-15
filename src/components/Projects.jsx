/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
import React from 'react';
import { projects, socialLinks } from '../data/portfolioData';

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ProjectCard = ({ project, aosDelay }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className={`relative rounded-3xl p-[1px] group transition-all duration-500 hover:-translate-y-1 ${
      project.isFlagship 
        ? 'bg-gradient-to-br from-[#ff2a2a]/60 via-white/10 to-[#ff2a2a]/40 hover:from-[#ff2a2a] hover:via-white/20 hover:to-[#ff2a2a]/70 hover:shadow-[0_20px_50px_rgba(255,42,42,0.2)]' 
        : 'bg-white/10 hover:bg-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
    }`}
  >
    <div className={`rounded-3xl p-7 md:p-10 h-full backdrop-blur-xl transition-all duration-500 ${
      project.isFlagship 
        ? 'bg-[#0f0f0f]/95 group-hover:bg-[#0f0f0f]/90' 
        : 'bg-[#111111]/95 group-hover:bg-[#111111]/90'
    }`}>
      {/* Badge */}
      {project.badge && (
        <span className="inline-block text-xs font-extrabold tracking-widest uppercase text-[#ff2a2a] bg-[#ff2a2a]/10 px-3.5 py-1 rounded-full border border-[#ff2a2a]/30 mb-5 shadow-[0_0_12px_rgba(255,42,42,0.2)]">
          {project.badge}
        </span>
      )}

      {/* Number + Title */}
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-4xl md:text-5xl font-black text-white/15 font-serif italic">{project.number}</span>
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-white transition-colors">{project.title}</h3>
      </div>

      {/* Description */}
      <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-medium">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techTags.map((tag) => (
          <span 
            key={tag}
            className="px-3.5 py-1 text-xs font-semibold text-white/80 bg-white/5 rounded-full border border-white/10 hover:bg-[#ff2a2a]/15 hover:border-[#ff2a2a]/40 hover:text-white transition-all duration-300 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        {/* GitHub */}
        {project.links.github && (
          <a 
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xs md:text-sm font-bold tracking-wide hover:bg-white hover:text-black transition-all duration-300 group/btn"
          >
            <GitHubIcon />
            GitHub
          </a>
        )}

        {/* Live Demo (single) */}
        {project.links.demo !== undefined && (
          <a 
            href={project.links.demo || '#'}
            target={project.links.demo ? "_blank" : undefined}
            rel={project.links.demo ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
              project.links.demo 
                ? 'bg-[#ff2a2a] text-white hover:bg-red-600 hover:shadow-[0_0_25px_rgba(255,42,42,0.5)]' 
                : 'bg-white/5 text-white/40 border border-white/10 cursor-not-allowed'
            }`}
          >
            <ExternalLinkIcon />
            {project.links.demo ? 'Live Demo' : 'Demo Coming Soon'}
          </a>
        )}

        {/* Frontend Demo (Karigar) */}
        {project.links.frontendDemo && (
          <a 
            href={project.links.frontendDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-xs md:text-sm font-bold tracking-wide hover:bg-red-600 hover:shadow-[0_0_25px_rgba(255,42,42,0.5)] transition-all duration-300"
          >
            <ExternalLinkIcon />
            Frontend Demo
          </a>
        )}

        {/* Backend API (Karigar) */}
        {project.links.backendApi && (
          <a 
            href={project.links.backendApi}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xs md:text-sm font-bold tracking-wide hover:bg-white/20 transition-all duration-300"
          >
            <ExternalLinkIcon />
            Backend API
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/5 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs font-bold text-white/70 uppercase tracking-widest mb-6 shadow-sm bg-white/5 backdrop-blur-md">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Work that speaks <br className="hidden md:block" />for itself
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A selection of projects that showcase my expertise in AI models, computer vision, data analysis, and modern engineering architecture.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              aosDelay={String((index + 1) * 100)}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-base md:text-lg hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 group backdrop-blur-md"
          >
            <GitHubIcon />
            Explore All My Repositories
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
