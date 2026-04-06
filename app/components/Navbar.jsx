"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">

      <div className="flex justify-center gap-10 py-6 text-sm tracking-[3px] text-white bg-black/40 backdrop-blur-md">

        <a href="#start">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>

        <div className="font-bold text-lg">
          SM
        </div>

        <a href="#experience">Experience</a>
        <a href="#testimonials">TESTIMONIALS</a>
        <a href="#contact">CONTACT</a>
        <a href="#footer">END</a>


      </div>

    </nav>
  );
}