"use client"; // Required for Framer Motion animations in Next.js

import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Fade in & slide up
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover="hoverEffect" // Use a named variant for hover animation
      className="bg-white/5 p-6 rounded-lg shadow-lg
                 border border-purple-500/10 hover:border-purple-500/30 
                 transition-all duration-300 text-center group"
    >
      <motion.div
        variants={{
          hoverEffect: { rotate: 30, filter: "hue-rotate(15deg)" } // Inner box rotates & color shifts on hover
        }}
        transition={{ duration: 0.3 }}
        className="flex justify-center items-center mb-4"
      >
        <motion.div
          variants={{
            hoverEffect: { scale: 1.1 } // Inner box scales up when outer box is hovered
          }}
          className="p-5 bg-gradient-to-r from-purple-600 to-blue-600 
                     rounded-lg text-white flex items-center justify-center"
          style={{ width: "70px", height: "70px" }} // Keeps the icon box size fixed
        >
          {icon}
        </motion.div>
      </motion.div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-300 text-sm mt-2">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;