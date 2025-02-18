"use client";
import { useState } from "react";
import Link from "next/link";
import { Bot, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black">
      <header className="flex justify-between items-center py-4 bg-black mx-auto text-white max-w-[1440px] px-6 sm:px-12 lg:px-20">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center gap-2">
          <span className="text-purple-500 text-2xl">
            <Bot size={32} strokeWidth={2} color="#a855f7" />
          </span>
          Agentia World
        </div>

        <div className="flex gap-8 items-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="#features" className="hover:text-purple-400">
            Features
          </Link>
          <Link href="#technology" className="hover:text-purple-400">
            Technology
          </Link>
          <Link href="#agents" className="hover:text-purple-400">
            Agents
          </Link>
          <Link href="#pricing" className="hover:text-purple-400">
            Pricing
          </Link>
          <Link href="#contact" className="hover:text-purple-400">
            Contact
          </Link>
        </nav>

        {/* Launch Console Button (Visible on all screens) */}
        <Link
          href="#console"
          className="hidden md:block bg-gradient-to-r from-purple-500 to-blue-500 
                     hover:from-purple-600 hover:to-blue-600 px-4 py-2 rounded-lg text-white"
        >
          Launch Console
        </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden block"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-1 bg-black w-full rounded-lg shadow-lg flex flex-col items-start p-5 md:hidden">
            <Link
              href="#features"
              className="py-2 text-lg hover:text-purple-400 w-full"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#technology"
              className="py-2 text-lg hover:text-purple-400 w-full"
              onClick={() => setIsOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="#agents"
              className="py-2 text-lg hover:text-purple-400 w-full"
              onClick={() => setIsOpen(false)}
            >
              Agents
            </Link>
            <Link
              href="#pricing"
              className="py-2 text-lg hover:text-purple-400 w-full"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="py-2 text-lg hover:text-purple-400 w-full"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#console"
              className="mt-4 w-full bg-gradient-to-r from-purple-500 to-blue-500 
                         hover:from-purple-600 hover:to-blue-600 text-white py-2 text-center rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Launch Console
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;