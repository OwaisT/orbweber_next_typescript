// app/layout.tsx (This is the root layout for all pages)
// import { Inter } from "next/font/google";
import Navbar from "@components/navbar/Navbar";
import "@styles/globals.css";
import "@styles/fonts.css";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/static/images/brand-logo.png" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
