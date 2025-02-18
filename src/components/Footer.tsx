import { Bot } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-6">
      <div className="max-w-7xl mx-auto md:pl-10 pl-0 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-white text-xl font-bold flex items-center justify-center md:justify-start">
            <span className="text-purple-500 text-2xl mr-2">
              <Bot size={32} strokeWidth={2} color="#a855f7" />  
            </span> Agentia World
          </h2>
          <p >
            Next-generation AI agents powering the future of enterprise intelligence.
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4 text-xl">
            <FaGithub className="cursor-pointer hover:text-white" />
            <FaLinkedin className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Product Section */}
        <div>
          <h3 className="text-white font-semibold mb-2">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">API</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-white font-semibold mb-2">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
            <li><a href="#" className="hover:text-white">Compliance</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-md text-gray-400 mb-4 mt-12">
        © 2025 Agentia World. Powered by Panaversity. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;