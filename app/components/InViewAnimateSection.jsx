"use client";

import { useAnimate, useInView } from "motion/react";
import React, { useEffect } from "react";
import animFns from "@/lib/animationFuncs";
import "@/lib/typedef";

/** @typedef {React.HTMLAttributes<HTMLDivElement> & {sectionAnimFuncName: keyof animFns, children: React.ReactNode}} InViewAnimateSectionPropType */

/**
 *
 * @param {InViewAnimateSectionPropType} param0
 * @returns
 */
const InViewAnimateSection = ({ sectionAnimFuncName = "", children, ...props }) => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView && !!sectionAnimFuncName) {
      animFns[sectionAnimFuncName]({ scope, animate });
    }
  }, [inView]);

  return (
    <section ref={scope} {...props}>
      {children}
    </section>
  );
};

export default InViewAnimateSection;
