import React from 'react';
import { IconSearch, IconBulb, IconInfoCircle } from '@tabler/icons-react';

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
          <button className="feedback-button" title="Search">
            <IconSearch size={18} />
          </button>
          <button className="feedback-button" title="About">
            <IconInfoCircle size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 