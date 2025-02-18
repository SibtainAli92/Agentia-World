"use client";
import { Bot } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const sentences = [
    "Hello! I'm your AI agent. How can I enhance your business today?",
    "I can help optimize your workflows with neural networks.",
    "Let me assist you with advanced data analytics.",
    "Would you like to explore our AI integration solutions?",
  ];

  const [displayText, setDisplayText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < sentences[sentenceIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + sentences[sentenceIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
      }, 2000);
    }
  }, [charIndex, sentenceIndex, sentences]);

  return (
    <section className="text-center text-white py-20 px-4">
      {/* Header Text */}
      <div className="flex justify-center items-center gap-3 mb-8">
        <div className="rounded-full bg-purple-400 w-2 h-2"></div>
        <p className="text-sm text-purple-400">POWERED BY PANAVERSITY</p>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Enterprise AI Agents
        </span>
        <br />
        for the Future
      </h1>

      {/* Chat Input Box */}
      <div className="mt-8 flex justify-center">
        <div className="border border-purple-950 rounded-lg flex items-center p-4 sm:p-5 gap-4 md:w-[600px] w-full h-auto sm:h-[100px] ">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
            <Bot size={22} strokeWidth={2} color="white" />
          </div>
          <div className="bg-white/10 p-3 lg:w-[600px] w-full">
            <input
              type="text"
              placeholder=""
              value={displayText}
              readOnly
              className="bg-transparent border-none outline-none text-white flex-1 w-full"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-14 flex flex-col sm:flex-row justify-center  items-center gap-10">
        <button
          className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg 
             text-lg font-bold h-[60px] w-full max-w-[260px] shadow-lg 
             transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
        >
          Deploy Your AI Agent →
        </button>

        <button
          className="border border-purple-950 px-6 py-3 rounded-lg text-lg font-bold 
             hover:border-purple-600 hover:shadow-md hover:shadow-purple-500/50 
             transition-all duration-500 ease-in-out w-full max-w-[260px]"
        >
          Watch Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;