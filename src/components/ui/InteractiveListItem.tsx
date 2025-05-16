'use client'

import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface InteractiveListItemProps {
  IconComponent: React.ElementType;
  label: string;
  onClick?: () => void;
  href?: string; // For navigation links
  // Add other props like 'badge' or 'toggle' if needed in the future
}

export const InteractiveListItem: React.FC<InteractiveListItemProps> = ({
  IconComponent,
  label,
  onClick,
  href,
}) => {
  const content = (
    <div className="flex items-center justify-between w-full p-4 group">
      <div className="flex items-center">
        <IconComponent className="w-5 h-5 text-gray-400 mr-4 group-hover:text-sky-400 transition-colors" />
        <span className="text-base text-gray-100 group-hover:text-sky-300 transition-colors">{label}</span>
      </div>
      <FaChevronRight className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" />
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className="block bg-gray-900 hover:bg-gray-800/70 active:bg-gray-800 transition-colors rounded-lg mb-2 shadow-sm"
        // For Next.js Link component, you'd replace <a> with <Link> and pass href
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left bg-gray-900 hover:bg-gray-800/70 active:bg-gray-800 transition-colors rounded-lg mb-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {content}
    </button>
  );
};
