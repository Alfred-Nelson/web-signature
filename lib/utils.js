import { clsx } from "clsx";
import { twMerge, twJoin } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function cj(...inputs) {
  return twJoin(clsx(inputs))
}