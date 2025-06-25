"use client";

import React from "react";
import { motion } from "@/lib/framer-motion";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ ease: "easeOut" }}
      className={cn(
        "fixed h-full w-sidebar bg-background",
        "border-r shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      )}
    >
        Hello
    </motion.aside>
  );
};

export default Sidebar;
