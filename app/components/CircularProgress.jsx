import React from "react";
import { motion } from "framer-motion"; // Make sure this is the correct import

const CircularProgress = ({ progress, size }) => {
  const pixelGuardedSize = (typeof size === 'string' && size.endsWith("px")) ? size : size + "px"
  const sizeProps = !!size ? { width: pixelGuardedSize, height: pixelGuardedSize } : {} 

  return (
    <svg
      {...(sizeProps)}
      viewBox="0 0 100 100"
      strokeWidth={8}
      className="-rotate-90"
    >
      {/* Background Circle */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="gray"
        strokeOpacity={0.1}
        fill="none"
      />

      {/* Animated Progress Circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="46"
        stroke="currentColor"
        fill="none"
        strokeDasharray="1"
        strokeDashoffset="0"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      />
    </svg>
  );
};

export default CircularProgress;
