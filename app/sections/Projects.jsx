"use client";

import Reveal from "../components/Reveal";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Kidney Stone Detection",
    description:
      "A deep learning system for detecting kidney stones in medical images, improving diagnostic accuracy and speed.",
    subText:
      "Utilizes MATLAB and CNN models for precise medical image analysis.",
    tech: "MATLAB • Deep Learning • CNN",
    image: "/projects/kidney-scan.png",
    theme: "dark",
    link: "#",
  },
  {
    id: "02",
    title: "KBP University, Satara",
    description:
      "KBP University’s official site with courses, resources, and announcements.",
    subText:
      "Explore academic programs, admissions, and campus updates.",
    tech: "Next.js • Tailwind",
    image: "/projects/edu-project.png",
    theme: "light",
    link: "https://unikbp.ac.in",
  },
  {
    id: "03",
    title: "CSC College, Satara",
    description:
      "CSC College site with courses, faculty info, and campus events.",
    subText:
      "Provides insights on academic programs, admissions, and college activities.",
    tech: "WordPress • SEO",
    image: "/projects/edu-project1.png",
    theme: "dark",
    link: "https://csc.ac.in",
  },
  {
    id: "04",
    title: "YCIS College, Satara",
    description:
      "YCIS College’s official portal for students and parents, featuring academic schedules, news, and online resources.",
    subText:
      "Access programs, faculty details, and student services online.",
    tech: "Next.js • Tailwind",
    image: "/projects/edu-project2.png",
    theme: "light",
    link: "https://ycis.ac.in",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const visibleProjects = [
    projects[index],
    projects[(index + 1) % projects.length],
  ];

  // Auto-slide effect
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 2) % projects.length);
      }, 4000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      <Reveal>
        <div className="max-w-[90%] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-[0.3em] text-white mb-4">
              Projects
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Carousel */}
          <div
            className="overflow-hidden relative h-[450px] flex justify-center items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={index}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.8 }}
                className="flex gap-6 w-max"
                style={{ willChange: "transform" }}
              >
                {visibleProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`flex-shrink-0 w-[500px] h-[420px] flex flex-col rounded-3xl overflow-hidden p-6 transition-transform duration-500 hover:-translate-y-2 ${
                      project.theme === "light"
                        ? "bg-[#F9E5DE] text-black"
                        : "bg-[#1A1A1A] text-white"
                    }`}
                  >
                    {/* Number & Title */}
                    <div className="mb-4">
                      <span className="text-4xl font-serif block mb-2">
                        {project.id}
                      </span>
                      <div
                        className={`h-[2px] mb-2 ${
                          project.theme === "light"
                            ? "bg-black/40"
                            : "bg-gray-700"
                        }`}
                      />
                      <h3 className="text-xl font-serif">{project.title}</h3>
                    </div>

                    {/* Image */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <div className="relative w-full h-44 mb-4 overflow-hidden rounded-3xl group">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 500px"
                          className="object-cover transition duration-700 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-3xl" />
                      </div>
                    </a>

                    {/* Description */}
                    <div className="space-y-1 flex-grow">
                      <p className="text-sm leading-relaxed opacity-90">
                        {project.description}
                      </p>
                      <p className="text-xs uppercase tracking-widest opacity-60">
                        {project.subText}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-2 pt-2 border-t border-black/10 text-[10px] uppercase tracking-widest opacity-60">
                      {project.tech}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  );
}