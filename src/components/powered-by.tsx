import React from "react";
import Link from "next/link";
import UpstashLogo from "@/components/upstash-logo";

const PoweredBy: React.FC = () => {
  return (
    <div className="flex justify-center mt-3">
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <span>Powered by</span>
        <Link
          href="https://github.com/iBz-04/iQuest"
          target="_blank"
          className="flex items-center gap-1 decoration-transparent hover:decoration-transparent hover:text-gray-300 hover:bg-transparent"
        >
          <UpstashLogo size={14} />
          <span>Upstash</span>
        </Link>
      </div>
    </div>
  );
};

export default PoweredBy;
