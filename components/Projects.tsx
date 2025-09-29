import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import Section from './Section';

// The card itself is largely unchanged, but the hover:scale-105 is removed
// as the new interaction is pausing the animation on the track.
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-sky-500/20 transition-shadow duration-300 h-full flex flex-col">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover flex-shrink-0" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{project.goal}</p>
            <p className="text-slate-400 text-sm mb-4 flex-grow"><span className="font-semibold text-slate-300">Key Features:</span> {project.features}</p>
            <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map(tech => (
                    <span key={tech} className="bg-slate-700 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const Projects: React.FC = () => {
    // Duplicate projects for a seamless, infinite scroll effect
    const duplicatedProjects = [...PROJECTS, ...PROJECTS];

    return (
        <Section id="projects" title="Projects">
            {/* 
              Masking container to hide the overflow and apply a fade-out effect at the edges.
              This creates a cleaner look for the marquee.
            */}
            <div 
                className="relative w-full overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
                }}
            >
                {/* The infinitely scrolling track */}
                <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                    {duplicatedProjects.map((project, index) => (
                        // Wrapper for each card to define its size and spacing
                        <div key={`${project.title}-${index}`} className="flex-shrink-0 w-[clamp(300px,30vw,400px)] p-4">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;