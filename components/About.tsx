
import React from 'react';
import { PROFESSIONAL_OVERVIEW } from '../constants';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
          {PROFESSIONAL_OVERVIEW}
        </p>
      </div>
    </Section>
  );
};

export default About;
