
import React from 'react';
import { NAME } from '../constants';
import { ChevronUpIcon } from './icons/ChevronUpIcon';

const Footer: React.FC = () => {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-900/50 border-t border-slate-800">
            <div className="container mx-auto px-6 py-6 text-center text-slate-500 relative">
                <button
                    onClick={handleScrollTop}
                    className="absolute -top-6 left-1/2 -translate-x-1/2 bg-sky-500 text-white rounded-full p-2 hover:bg-sky-600 transition-colors"
                    aria-label="Back to top"
                >
                    <ChevronUpIcon className="h-6 w-6" />
                </button>
                <p>&copy; {new Date().getFullYear()} {NAME}. All Rights Reserved.</p>
                <p className="text-xs mt-2">Built with React & Tailwind CSS.</p>
            </div>
        </footer>
    );
};

export default Footer;
