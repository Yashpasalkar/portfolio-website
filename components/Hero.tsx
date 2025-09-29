import React from 'react';
import { NAME, HEADLINE, CONTACT_INFO } from '../constants';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { GithubIcon } from './icons/GithubIcon';
import { MailIcon } from './icons/MailIcon';
import { DownloadIcon } from './icons/DownloadIcon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen gap-8 md:gap-12 lg:gap-20 -mt-16 px-6">
        
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="animate-fade-in-down">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter">
                    {NAME}
                </h1>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl text-sky-400 font-medium tracking-wide">
                    {HEADLINE}
                </p>
            </div>
            <div className="mt-8 flex justify-center md:justify-start space-x-6 animate-fade-in-up">
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
                    <LinkedinIcon className="h-8 w-8" />
                    <span className="sr-only">LinkedIn</span>
                </a>
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
                    <GithubIcon className="h-8 w-8" />
                    <span className="sr-only">GitHub</span>
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
                    <MailIcon className="h-8 w-8" />
                    <span className="sr-only">Email</span>
                </a>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up">
              <a 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });}}
                className="px-8 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="Resume.pdf"
                download="Resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-3 border border-sky-500 text-sky-400 font-bold rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <DownloadIcon className="h-5 w-5" />
                Download Resume
              </a>
            </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 animate-fade-in">
             <img
                src="photo.jpeg"
                alt="A portrait of Radhika Rajagoli"
                className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-8 border-slate-800 shadow-2xl shadow-sky-900/40"
              />
        </div>

    </section>
  );
};

export default Hero;