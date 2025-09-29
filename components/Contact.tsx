
import React from 'react';
import { CONTACT_INFO, LANGUAGES_KNOWN } from '../constants';
import Section from './Section';
import { PhoneIcon } from './icons/PhoneIcon';
import { MailIcon } from './icons/MailIcon';
import { LocationIcon } from './icons/LocationIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';

const Contact: React.FC = () => {
    return (
        <Section id="contact" title="Get In Touch">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-slate-400 mb-8">
                    I'm currently seeking new opportunities and would love to hear from you. Feel free to reach out for any collaborations or inquiries.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 text-slate-300">
                    <div className="flex items-center gap-3">
                        <MailIcon className="h-6 w-6 text-sky-400" />
                        <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-sky-400 transition-colors">{CONTACT_INFO.email}</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <PhoneIcon className="h-6 w-6 text-sky-400" />
                        <span>+91 {CONTACT_INFO.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <LocationIcon className="h-6 w-6 text-sky-400" />
                        <span>{CONTACT_INFO.location}</span>
                    </div>
                </div>
                 <div className="flex justify-center mt-8">
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-800 px-6 py-3 font-semibold text-white rounded-lg hover:bg-slate-700 transition-colors">
                        <LinkedinIcon className="h-5 w-5" />
                        Connect on LinkedIn
                    </a>
                 </div>
                 <div className="flex justify-center mt-8">
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-800 px-6 py-3 font-semibold text-white rounded-lg hover:bg-slate-700 transition-colors">
                        <LinkedinIcon className="h-5 w-5" />
                         GitHub
                    </a>
                 </div>

                 <div className="mt-12">
                     <h4 className="text-lg font-semibold text-white">Languages Known</h4>
                     <p className="text-slate-400 mt-2">{LANGUAGES_KNOWN}</p>
                 </div>
            </div>
        </Section>
    );
};

export default Contact;
