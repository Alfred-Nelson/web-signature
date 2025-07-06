"use client";

import React from "react";
import { motion, AnimatePresence } from "@/lib/framer-motion";

/**
 * @typedef {"idle" | "pending"} SubmitStatusType
 */

/**
 * @typedef StatusBasedStatusContentPropType
 * @property {SubmitStatusType} status
 * @property {{ [key in SubmitStatusType]: React.ReactNode }} content
 */

/**
 *
 * @param {StatusBasedStatusContentPropType} param0
 * @returns
 */
const StatusBasedSubmitContent = ({ status, content }) => {
  return (
    <span className="relative h-fit w-full">
        <span aria-hidden className="opacity-[0.01] flex items-center justify-center">{content[status]}</span>
      <AnimatePresence initial={false} mode="wait">
        {status === "idle" && (
          <motion.span
            key={status}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {content[status]}
          </motion.span>
        )}
        {status === "pending" && (
          <motion.span
            key={status}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute inset-0 flex items-center justify-center gap-x-4"
          >
            {content[status]}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export default StatusBasedSubmitContent;
