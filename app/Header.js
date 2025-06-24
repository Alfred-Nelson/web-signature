"use client";

import React from "react";
import { motion } from "motion/react";
import { cj } from "@/lib/utils";
import NamedLogo from "../public/images/namedLogo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <motion.header
      initial={{ y: "-120%" }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut" }}
      className={cj(
        "h-16 z-20 w-[calc(100%-32px)]",
        "sticky top-2 left-4 px-8",
        "flex items-center justify-between",
        "rounded-full bg-foreground/[0.02]",
        "backdrop-blur-md"
      )}
    >
      <Link href={"/"}>
        <div className="h-14 max-h-14 flex items-center rounded-md">
          <NamedLogo />
        </div>
      </Link>
      <div className="flex items-center gap-x-4">
        <Link href={"/courses"}>Courses</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </motion.header>
  );
};

export default Header;
