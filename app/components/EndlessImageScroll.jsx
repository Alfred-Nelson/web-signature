"use client";

import React, { lazy, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTime,
  useTransform,
  useVelocity,
} from "@/lib/framer-motion";
import { cj } from "@/lib/utils";

const EndlessImageScroll = ({
  images,
  baseVelocity = 30, // Default speed factor
}) => {
  const { scrollY } = useScroll();
  const vY = useVelocity(scrollY);
  const dX = useTransform(vY, [-240, 0, 240], [0.6, 0.18, 0.6]);
  const time = useTime();
  const springX = useSpring("0%", {
    damping: 50,
    stiffness: 400,
  });

  // useMotionValueEvent(vY, "change", () => console.log(vY.get(), 'china'))

  useMotionValueEvent(time, "change", (latest) => {
    try {
      const xVal = Math.abs(parseFloat(springX.get()));
      const dXVal = parseFloat(dX.get());
      const newXVal = (xVal + dXVal) % 50;
      if (newXVal < xVal) {
        springX.jump(`${-parseFloat(newXVal + 0.1)}%`);
      } else {
        springX.set(`${-parseFloat(newXVal)}%`);
      }
    } catch (e) {
      console.error(e);
    }
  });

  if (!images || images.length === 0) {
    return null;
  }

  const doubledImages = [...images, ...images];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-[100dvh] overflow-hidden relative"
    >
      <motion.div
        className={
          "flex h-full w-max " + `${springX.get()} ` + springX.get() + "%"
        }
        style={{ x: springX }}
      >
        {/* Map over the doubled images array */}
        {/* {images.map((image, index) => ( */}
        {doubledImages.map((image, index) => (
          <div
            {...(index > images.length - 1 ? { "aria-hidden": "true" } : {})}
            key={index}
            className={cj("relative h-full flex-shrink-0 bg-foreground")}
            style={{
              width: "auto",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 1920}
              height={image.height || 1080}
              priority={index < images.length}
              className={cj(
                "h-[100dvh] w-auto object-cover max-w-none",
                "mask-linear-[to_right,transparent_5%,black_30%,black_70%,transparent_95%]"
              )}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default EndlessImageScroll;
