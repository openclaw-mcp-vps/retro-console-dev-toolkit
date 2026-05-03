import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retro Console Dev Toolkit — Modern Tools for Homebrew Retro Consoles",
  description: "Web-based IDE, debugger, and deployment pipeline for retro console homebrew development. Monaco Editor, WebAssembly emulators, and cloud cross-compilation."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="403cc93c-7c44-490b-95f9-0ddb2b315609"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
