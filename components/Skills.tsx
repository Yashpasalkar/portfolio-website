
import React from 'react';
import { SKILLS } from '../constants';
import Section from './Section';

const SkillCard: React.FC<{ name: string }> = ({ name }) => (
    <div className="bg-slate-800 p-3 rounded-lg flex items-center justify-center text-center">
        <p className="text-slate-300 font-medium">{name}</p>
    </div>
);

const Skills: React.FC = () => {
    const categories = [...new Set(SKILLS.map(skill => skill.category))];

    return (
        <Section id="skills" title="Technical Skills">
            <div className="max-w-4xl mx-auto">
                {categories.map(category => (
                    <div key={category} className="mb-8">
                        <h3 className="text-xl font-semibold text-sky-400 mb-4">{category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {SKILLS.filter(skill => skill.category === category).map(skill => (
                                <SkillCard key={skill.name} name={skill.name} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
