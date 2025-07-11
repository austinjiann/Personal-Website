import React from 'react';
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { Moon } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 relative overflow-hidden">
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="max-w-3xl mx-auto px-8 relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between py-6 relative z-10">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link href="https://x.com/austinjian_" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform duration-200">
              <SiX />
            </Link>
            <Link href="https://www.linkedin.com/in/austin-jian" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform duration-200">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/austinjiann" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform duration-200">
              <FaGithub />
            </Link>
            <Link href="mailto:Austin.jian07@gmail.com" className="text-2xl hover:scale-110 transition-transform duration-200">
              <FiMail />
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-gray-400 hover:text-gray-200 transition-colors">
              home
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-gray-200 transition-colors">
              projects
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-gray-200 transition-colors">
              blog
            </Link>
            <Moon className="w-4 h-4" />
          </nav>
        </header>
        {/* Main Content */}
        <div className="pt-8 pb-8 flex flex-col items-center text-center">
          <h1 className="text-8xl font-bold mb-8">Blog</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Coming soon!</p>
        </div>
        {/* Footer */}
        <footer className="pb-12">
          <div className="flex flex-col items-center space-y-6">
            <div className="text-sm text-gray-500">2025 © Austin Jian</div>
          </div>
        </footer>
      </div>
    </div>
  )
} 