"use client"; // Required for Next.js App Router

import { FaEnvelope, FaGlobe, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Ready to transform your business with AI?
        </motion.p>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row justify-between mt-10 gap-10">
          {/* Left: Contact Info */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-500" size={18} />
                <span>raaefkhan539@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaGlobe className="text-purple-500" size={18} />
                <span>www.agentia-world.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://github.com/SibtainAli92"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300" size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/muhammad-sibtain-ali-4404ba2b8/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300" size={20} />
              </motion.a>
              
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-md focus:ring focus:ring-purple-500/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                />
                <motion.input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-md focus:ring focus:ring-purple-500/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </div>
              <motion.input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-md focus:ring focus:ring-purple-500/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
              />
              <motion.textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-md focus:ring focus:ring-purple-500/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;