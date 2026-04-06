"use clinets"
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <section id="footer" >
    <footer className="relative border-t border-gray-800 bg-black pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Brand / Logo Area */}
        <div className="mb-8">
          <h2 className="text-white text-xl font-bold tracking-tighter hover:text-blue-500 transition-colors cursor-pointer">
            SAEE<span className="text-blue-500">MOHITE</span>
          </h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#experiance" className="hover:text-blue-500 transition-colors">Experiance</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5 mb-12">
          <SocialIcon href="#" icon={<Github size={20} />} />
          <SocialIcon href="#" icon={<Twitter size={20} />} />
          <SocialIcon href="#" icon={<Linkedin size={20} />} />
          <SocialIcon href="#" icon={<Mail size={20} />} />
        </div>

        {/* Bottom Copyright Section */}
        <div className="w-full pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            © 2026 Saee Mohite — Built with Passion
          </p>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            All Rights Reserved
          </p>
        </div>
      </div>

      {/* Glowing Line / Subtle Neon Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent shadow-[0_0_10px_rgba(37,99,235,0.7)]" />
    </footer>
    </section>
  );
}

// Helper component for Social Icons with glow
function SocialIcon({ href, icon }) {
  return (
    <a 
      href={href} 
      className="p-2 rounded-full border border-gray-800 text-gray-400 hover:text-blue-400 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(37,99,235,0.7)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}
