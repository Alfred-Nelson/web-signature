import { Mada } from "next/font/google";
import "./globals.css";
import { cj } from "@/lib/utils";
import Header from "./Header";
import { AnimatePresence } from "@/lib/framer-motion";
import EndlessImageScroll from "./components/EndlessImageScroll";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Instagram from "../public/images/instagram.svg";
import Facebook from "../public/images/facebook.svg";
import LinkedIn from "../public/images/linkedin.svg";
import { Toaster } from "./components/ui/Sonner";

const fontMada = Mada({ subsets: ["latin"] });

export const metadata = {
  title: "Signature",
  description: "Where your signature gains value",
};

const backgroundImages = [
  {
    src: "/images/pexels-ravi-roshan-2875998-8576784.jpg",
    alt: "background-image-2",
    width: 1080,
    height: 720,
  },
  {
    src: "/images/pexels-theshantanukr-16504391.jpg",
    alt: "background-image-3",
    width: 1080,
    height: 720,
  },
  {
    src: "/images/pexels-tima-miroshnichenko-6694480.jpg",
    alt: "background-image-4",
    width: 1080,
    height: 720,
  },
  {
    src: "/images/olena-bohovyk-dIMJWLx1YbE-unsplash.jpg",
    alt: "background-image-1",
    width: 540,
    height: 720,
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cj(
          // "dark",
          fontMada.className
        )}
      >
        <Toaster />
        {/* <Header /> */}
        <div className="relative z-20 min-h-[100dvh] bg-background shadow-[0px_4px_16px_rgba(17,17,26,1),_0px_16px_32px_rgba(17,17,26,1),_0px_16px_56px_rgba(100,100,100,0.9)]">
          <div className="relative z-10">
            <AnimatePresence>{children}</AnimatePresence>
          </div>
          <div className="sticky bottom-0 h-0 w-0">
            <div className="absolute bottom-0 left-0 w-screen h-[100dvh]">
              <EndlessImageScroll images={backgroundImages} />
              <div
                className={cj(
                  "absolute inset-0 bg-background",
                  "mask-radial-[circle,rgba(0,0,0,0.90)_10%,rgba(0,0,0,1)_60%]"
                )}
              />
            </div>
          </div>
        </div>
        <footer className="sticky bottom-0 z-10 bg-stone-800 dark:bg-slate-950 text-background px-5 sm:px-12 md:px-24">
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-y-8 pt-16 pb-10">
            <div className="w-3/4 flex flex-col gap-y-6 text-lg font-semibold">
              <div className="w-full flex items-start gap-x-4 text-background dark:text-foreground">
                <MapPin
                  size={20}
                  className="translate-y-1 opacity-60 text-primary shrink-0"
                />
                <p className="w-full flex flex-col gap-y-0.5">
                  <span>Ayesha Tower</span>
                  <span>Opp. Reliance Petrol Pump</span>
                  <span>Calicut Rd, Valanchery</span>
                  <span>Kerala, 676582</span>
                </p>
              </div>
              <div className="w-full flex items-start gap-x-4 text-background dark:text-foreground">
                <Phone
                  size={20}
                  className="translate-y-1 opacity-60 text-primary shrink-0"
                />
                <div className="flex flex-col gap-y-0.5">
                  <p>+91 90745 70207</p>
                  <p>+91 85920 00085</p>
                </div>
              </div>
            </div>
            <div className="px-9 md:px-0">
              <div className="flex gap-x-4 md:gap-10 items-center w-fit">
                <Link
                  target="_blank"
                  href={
                    "https://www.facebook.com/profile.php?id=61574634887436"
                  }
                  className="w-10 h-6 text-primary px-2"
                >
                  <Facebook />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/signature.institute/"}
                  className="w-10 h-6 text-primary px-2"
                >
                  <Instagram />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/company/signature-institute/"}
                  className="w-10 h-6 max-w-10 max-h-8 text-primary px-2"
                >
                  <LinkedIn />
                </Link>
              </div>
            </div>
          </div>
          <div className="opacity-40 text-xs border-t border-background/30 py-4 text-center">
            © 2025 Signature Institute of Commerce & Management. All rights reserved
          </div>
        </footer>
      </body>
    </html>
  );
}
