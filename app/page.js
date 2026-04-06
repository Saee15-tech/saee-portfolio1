"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

import dynamic from "next/dynamic";
const Projects = dynamic(() => import("./sections/Projects"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-[#050505] text-white overflow-x-hidden relative">

      {/* background glow */}
      {/* <div className="glow1"></div>
      <div className="glow2"></div> */}

      {/* mouse glow */}
      {/* <MouseGlow /> */}

      {/* floating shapes */}
      {/* <FloatingShapes /> */}

   
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      

    </main>
  );
}