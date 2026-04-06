"use client";

import Reveal from "../components/Reveal";
import Image from "next/image";

// Make sure you put these images in: public/skills/
const skillCategories = [
  {
    title: "Frontend Architecture",
    skills: "React.js, Next.js, Tailwind CSS, & Responsive UI Design",
    image: "/projects/edu-project.png",
  },
  {
    title: "CMS & WordPress",
    skills: "Theme Development, Plugin Integration, & SEO Optimization",
    image: "/projects/edu-project1.png",
  },
  {
    title: "System Programming",
    skills: "Deep Learning with MATLAB, Python, & Java Logic",
    image: "/projects/edu-project2.png",
  },
  {
    title: "Development Tools",
    skills: "Version Control (Git/GitHub) & VS Code Workflow",
    image: "/projects/kidney-scan.png",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="pt-16 pb-28 px-6 max-w-7xl mx-auto">
      <Reveal>
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-start">
          <div>
            <h2 className="text-6xl font-serif leading-tight">
              Technical <br /> Skills
            </h2>
          </div>
          <div className="pt-10">
            <p className="text-gray-400 font-light leading-relaxed max-w-md">
              I have carefully built a stack of modern technologies that 
              function as a system—focusing on performance, clean architecture, 
              and intuitive user experiences.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group cursor-default">
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden bg-neutral-900 mb-6 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={400}
                  height={533} // 3:4 aspect ratio
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <h3 className="text-lg font-serif mb-2 group-hover:text-white transition-colors">
                {category.title}
              </h3>
              <p className="text-[11px] uppercase tracking-widest text-gray-500 leading-loose">
                {category.skills}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}