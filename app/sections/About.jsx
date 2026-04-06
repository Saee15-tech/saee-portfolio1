"use client";

import Reveal from "../components/Reveal";

export default function About() {
  const educationData = [
    { title: "B.Voc Software Dev III", sub: "YCIS Satara", val: "Appearing" },
    { title: "B.Voc Software Dev II", sub: "YCIS Satara", val: "9.3 CGPA" },
    { title: "B.Voc Software Dev I", sub: "YCIS Satara", val: "8.67 CGPA" },
  ];

  const coreSkills = ["Teamwork", "Leadership", "Problem Solving", "Patience"];

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto text-white">
      <Reveal>
          {/* Header */}
<div className="text-center mb-16">
  <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-[0.3em] text-white mb-4">
    About Me & Core Values
  </h2>
  <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
</div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN */}
          <div className="md:col-span-4 space-y-8">
            
            {/* Education */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-blue-400 mb-4 block font-semibold italic">
                  Education
                </span>

              {educationData.map((edu, i) => (
                <Reveal key={i} delay={i * 150}>
                  <div className="bg-[#0f172a] border border-gray-800 p-4 rounded-lg flex justify-between items-center hover:border-blue-500/50 transition duration-500 hover:scale-[1.02]">
                    <div>
                      <p className="text-sm font-semibold">{edu.title}</p>
                      <p className="text-[10px] text-gray-500 uppercase">
                        {edu.sub}
                      </p>
                    </div>
                    <span className="text-xs text-blue-400 font-mono">
                      {edu.val}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Core Skills */}
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-4">
                Core Skills
              </span>

              <div className="grid grid-cols-2 gap-4">
                {coreSkills.map((skill, i) => (
                  <Reveal key={i} delay={i * 150}>
                    <div className="border border-blue-900/30 bg-[#0a0f1e]/50 p-4 rounded-lg text-center hover:scale-[1.05] transition duration-500">
                      <p className="text-[10px] text-blue-400 mb-1 font-bold">
                        0{i + 1}
                      </p>
                      <p className="text-xs uppercase tracking-wider">
                        {skill}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-8 w-full">
            <Reveal>
              <div className="bg-[#0a0f1e] border border-blue-900/50 p-8 md:p-12 rounded-xl shadow-2xl relative overflow-hidden hover:scale-[1.01] transition duration-700">

                {/* Glow */}
                <div className="absolute -top-24 -left-24 w-80 h-48 bg-blue-600/10 blur-[100px]" />

                <span className="text-[10px] uppercase tracking-widest text-blue-400 mb-4 block font-semibold italic">
                  — Personal Bio
                </span>

                <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                  WordPress & Front-end Developer <br />
                  <span className="text-gray-400 italic text-2xl">
                    Crafting Digital Excellence
                  </span>
                </h3>

                <p className="text-gray-400 leading-relaxed text-lg mb-8 max-w-2xl">
                  Hands-on experience in building responsive, user-friendly
                  websites. Skilled in{" "}
                  <span className="text-white">
                    React.js, Tailwind CSS
                  </span>
                  , and WordPress CMS workflows. With a background in Software
                  Development and exposure to deep learning, I bridge the gap
                  between technical logic and visual aesthetics.
                </p>

                <div className="pt-6 border-t border-blue-900/30">
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">
                    Languages
                  </h4>
                  <p className="text-blue-200 font-medium">
                    Marathi • English • Hindi
                  </p>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </Reveal>
    </section>
  );
}