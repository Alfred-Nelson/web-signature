"use client"

import React from 'react';

const SVGSpinner = ({ className = 'text-current', size = 24 }) => {
  return (
    <svg
      className={`animate-spin ${className}`} // Apply animate-spin directly here
      xmlns="http://www.w3.org/2000/svg"
      width={size} // Dynamic width
      height={size} // Dynamic height
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor" // Make stroke color configurable via `text-` utility
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

export default SVGSpinner;