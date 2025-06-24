"use client";

import React from "react";
import { cj } from "@/lib/utils";
import Link from "next/link";

const Card = ({ name, fullName, to}) => {
  return (
    <Link href={to} className="h-full transition ease-in-out duration-200">
      <div
        className={cj(
          "rounded-xl h-full border bg-background",
          "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
          "text-center text-3xl p-8",
          "grid grid-rows-[auto_1fr] gap-y-2",
        )}
      >
        <span className="text-4xl font-extrabold">{name}</span>
        <span className="text-lg font-bold text-foreground/20 leading-5 flex flex-col">
          {fullName.map((each) => (
            <span key={each}>{each}</span>
          ))}
        </span>
      </div>
    </Link>
  );
};

export default Card;
