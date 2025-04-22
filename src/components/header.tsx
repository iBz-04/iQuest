import React from 'react';
import { IconBulb, IconInfoCircle } from '@tabler/icons-react';

const Header: React.FC = () => {
  return (
    <header className="glass-nav sticky top-0 z-20 w-full py-3 px-4 md:px-6">
      <div className="max-w-screen-md mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-black border border-zinc-800 text-white">
            <IconBulb size={20} />
          </div>
          <span className="font-bold tracking-tight text-gray-100">iQuest</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="tooltip">
            <button className="feedback-button" aria-label="About iQuest">
              <IconInfoCircle size={18} />
            </button>
            <div className="tooltip-content">
              <p className="font-medium mb-1">About iQuest</p>
              <p className="text-xs text-gray-300">
                iQuest helps you find international scholarships from Scholars4Dev. 
                Ask questions about scholarships, deadlines, and eligibility requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 