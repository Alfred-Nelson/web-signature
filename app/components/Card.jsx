"use client";

import React from "react";
import { cj } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Card = ({ name, fullName, to, asImage }) => {
  return (
    <Link href={to} className="h-full transition ease-in-out duration-200">
      <div
        className={cj(
          "rounded-xl h-full relative",
          !asImage && "border bg-background",
          !asImage && "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
          "text-center text-3xl p-8",
          "grid grid-rows-[auto_1fr] gap-y-2"
        )}
      >
        {asImage && (
          <div className="bg-red-400">
            <Image
              fill
              alt={`${name}-logo`}
              src={asImage}
              className="object-contain"
            />
          </div>
        )}
        <span className={cj("text-4xl font-extrabold", asImage && "sr-only")}>
          {name}
        </span>
        <span
          className={cj(
            "text-lg font-bold text-foreground/20 leading-5 flex flex-col",
            asImage && "sr-only"
          )}
        >
          {fullName.map((each) => (
            <span key={each}>{each}</span>
          ))}
        </span>
      </div>
    </Link>
  );
};

export default Card;
