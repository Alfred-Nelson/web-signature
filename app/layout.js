import { Figtree } from "next/font/google";
import "./globals.css";
import { cj } from "./lib/utils";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
})

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Signature",
  description: "Where your signature gains value",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={cj(figtree.variable, `antialiased dark`)}
      >
        {children}
      </body>
    </html>
  );
}
