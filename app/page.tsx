"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, Twitter, Linkedin, Github, Mail, ExternalLink, Moon } from "lucide-react"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X (Twitter) icon
import { FiMail } from "react-icons/fi";

// Typewriter Animation Component
function TypewriterText() {
  return (
    <div className="text-8xl font-bold">Austin Jian</div>
  )
}

export default function HomePage() {
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
      {/* Single Container for All Content */}
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

        {/* Centered Animated Name */}
        <div className="py-4">
          <div className="flex items-center justify-center gap-8">
            {/* Typewriter Text */}
            <div>
              <TypewriterText />
            </div>
            
          </div>
        </div>

        {/* Main Content */}
        <main className="py-4">
          <div className="space-y-6">
            {/* Currently Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="font-medium italic">Currently:</span>
              </div>

              <div className="ml-4 space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Excited to study{" "}
                    <Link href="https://uwaterloo.ca/future-students/programs/computer-science" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white font-normal transition-all duration-150 hover:font-bold hover:text-white hover:no-underline focus:font-bold focus:text-white focus:no-underline">
                      computer science
                    </Link>{" "}
                    at the{" "}
                    <Link href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white font-normal transition-all duration-150 hover:font-bold hover:text-white hover:no-underline focus:font-bold focus:text-white focus:no-underline">
                      University of Waterloo
                    </Link>{" "}
                    in September 2025
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    SWE @{" "}
                    <Link href="https://www.goplace.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white font-normal transition-all duration-150 hover:font-bold hover:text-white hover:no-underline focus:font-bold focus:text-white focus:no-underline">
                       Go Place
                    </Link>
                    , where I'm upgrading and maintaining their fullstack web platform
                    
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    SWE Intern @{" "}
                    <Link href="https://www.thecyc.org/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white font-normal transition-all duration-150 hover:font-bold hover:text-white hover:no-underline focus:font-bold focus:text-white focus:no-underline">
                       Canadian Youth Champions
                    </Link>
                    , where I'm developing their app
                    
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Posting daily on{" "}
                    <Link href="https://x.com/austinjian_" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white font-normal transition-all duration-150 hover:font-bold hover:text-white hover:no-underline focus:font-bold focus:text-white focus:no-underline">
                       Twitter
                    </Link>{" "}
                    to document my journey in computer science
                    
                  </span>
                </div>

                
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="font-medium italic">Previously:</span>
              </div>

              <div className="ml-4 space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Graduated highschool
                    
                  </span>
                </div>
              </div>

              <div className="ml-4 space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Scaled and launched a {" "}
                    <Link href="https://github.com/austinjiann/Preppin" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white font-normal transition-all duration-150 hover:font-bold hover:text-white hover:no-underline focus:font-bold focus:text-white focus:no-underline">
                       meal planning business
                    </Link>{" "}
                    to 1000+ users and $1.5k+ in revenue
                  </span>
                </div>
              </div>
              

              


              
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="font-medium italic">What I'm up to outside of work:</span>
              </div>

              <div className="ml-4 space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Staying active by playing badminton, going to the gym, and going out w/ friends
                  </span>
                </div>
              </div>

              <div className="ml-4 space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Playing video games (previously top 1% in Valorant)
                  </span>
                </div>
              </div>

              <div className="ml-4 space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Eating yummy food and doomscrolling on Tiktok and Instagram
                  </span>
                </div>
              </div>
            </div>
            

            {/* CTA Buttons */}
            <div className="pt-4 space-y-4">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-neutral-800 text-gray-200 border border-gray-600 rounded-lg py-4 text-lg underline underline-offset-2 decoration-white font-normal transition-all duration-150 hover:font-bold hover:text-white hover:no-underline focus:font-bold focus:text-white focus:no-underline"
              >
                check out my resume
              </Link>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="pb-12">
          <div className="flex flex-col items-center space-y-6">
            {/* Copyright */}
            <div className="text-sm text-gray-500">2025 © Austin Jian</div>
          </div>
        </footer>
      </div>
    </div>
  )
}