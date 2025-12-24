"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>
            <span className="text-xl font-bold text-white">Frex</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/vision" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Our Vision
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center">
                Divisions
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/labs" className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400">
                  Frex Labs
                </Link>
                <Link href="/solutions" className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400">
                  Frex Solutions
                </Link>
              </div>
            </div>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link href="/doctry" className="text-gray-300 hover:text-cyan-400 transition-colors">
              What is Doctry?
            </Link>
            <Link href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Careers
            </Link>
            <Link 
              href="/contact" 
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded-lg transition-all duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <Link href="/vision" className="block py-3 text-gray-300 hover:text-cyan-400">
              Our Vision
            </Link>
            <div className="py-3">
              <div className="text-gray-400 text-sm font-medium mb-2">Divisions</div>
              <Link href="/labs" className="block py-2 pl-4 text-gray-300 hover:text-cyan-400">
                Frex Labs
              </Link>
              <Link href="/solutions" className="block py-2 pl-4 text-gray-300 hover:text-cyan-400">
                Frex Solutions
              </Link>
            </div>
            <Link href="/blog" className="block py-3 text-gray-300 hover:text-cyan-400">
              Blog
            </Link>
            <Link href="/doctry" className="block py-3 text-gray-300 hover:text-cyan-400">
              What is Doctry?
            </Link>
            <Link href="/careers" className="block py-3 text-gray-300 hover:text-cyan-400">
              Careers
            </Link>
            <Link href="/contact" className="block py-3 text-cyan-400 font-semibold">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>
            <span className="text-xl font-bold text-white">Frex</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/vision" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Our Vision
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center">
                Divisions
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/labs" className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400">
                  Frex Labs
                </Link>
                <Link href="/solutions" className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400">
                  Frex Solutions
                </Link>
              </div>
            </div>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link href="/doctry" className="text-gray-300 hover:text-cyan-400 transition-colors">
              What is Doctry?
            </Link>
            <Link href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Careers
            </Link>
            <Link 
              href="/contact" 
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded-lg transition-all duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <Link href="/vision" className="block py-3 text-gray-300 hover:text-cyan-400">
              Our Vision
            </Link>
            <div className="py-3">
              <div className="text-gray-400 text-sm font-medium mb-2">Divisions</div>
              <Link href="/labs" className="block py-2 pl-4 text-gray-300 hover:text-cyan-400">
                Frex Labs
              </Link>
              <Link href="/solutions" className="block py-2 pl-4 text-gray-300 hover:text-cyan-400">
                Frex Solutions
              </Link>
            </div>
            <Link href="/blog" className="block py-3 text-gray-300 hover:text-cyan-400">
              Blog
            </Link>
            <Link href="/doctry" className="block py-3 text-gray-300 hover:text-cyan-400">
              What is Doctry?
            </Link>
            <Link href="/careers" className="block py-3 text-gray-300 hover:text-cyan-400">
              Careers
            </Link>
            <Link href="/contact" className="block py-3 text-cyan-400 font-semibold">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
