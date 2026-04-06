"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="start" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/40 to-[#020617]" />

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 px-4"
      >
        <p className="tracking-[8px] text-gray-300 text-xs md:text-sm">
          FRONTEND DEVELOPER
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-serif font-semibold">
          SAEE MOHITE
        </h1>

        <p className="mt-6 text-gray-300 text-sm md:text-base">
          Next.js • WordPress • React • Tailwind
        </p>
      </motion.div>
    </section>
  );
}