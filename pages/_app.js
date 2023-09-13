import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.css"; // Add this line
import "../styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div className="">
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
