import React from "react";
import Link from "next/link";
import Image from 'next/image';

const PoweredBy: React.FC = () => {
  return (
    <div className="flex justify-center mt-3">
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <span>Developed by</span>
        <Link
          href="https://github.com/OmniS0FT/iQuest"
          target="_blank"
          className="flex items-center gap-1 decoration-transparent hover:decoration-transparent hover:text-gray-300 hover:bg-transparent"
        >
          <Image 
            src="/ele.png" 
            alt="Powered by logo" 
            width={14}
            height={14}
            className="inline-block"
          />
          <span>Omnisoft</span>
        </Link>
      </div>
    </div>
  );
};

export default PoweredBy;
