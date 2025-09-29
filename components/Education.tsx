import React from 'react';
import { EDUCATION_DATA } from '../constants';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6 max-w-2xl mx-auto">
        {EDUCATION_DATA.map((edu, index) => (
          <div
            key={index}
            className="bg-slate-800 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
            <p className="text-lg text-sky-400 font-semibold mt-1">{edu.institution}</p>
            <div className="mt-4 flex justify-between items-center text-slate-300">
              <span>CGPA: {edu.cgpa}</span>
              <span>{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
