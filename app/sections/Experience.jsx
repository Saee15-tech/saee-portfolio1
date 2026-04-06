"use client";

import { useState, useEffect, useRef } from "react";
import Reveal from "../components/Reveal";
import Image from "next/image";

export default function Experience() {
  const certs = [
    { id: 1, name: "PYTHON", img: "/certificates/python.png", info: "Python Programming Basics & Advanced" },
    { id: 2, name: "WORDPRESS", img: "/certificates/wordpress.png", info: "Developed WordPress Websites" },
    { id: 3, name: "REACT", img: "/certificates/react.png", info: "React.js Frontend Development" },
    { id: 4, name: "JAVA", img: "/certificates/java.png", info: "Java Programming & OOP Concepts" },
    { id: 5, name: "AI", img: "/certificates/ai.jpg", info: "Artificial Intelligence & ML" },
    { id: 6, name: "AWS Training", img: "/certificates/awstraining.jpg", info: "AWS Cloud Fundamentals" },
    { id: 7, name: "C#", img: "/certificates/csharp.jpg", info: "C# Development Skills" },
    { id: 8, name: "DIGITAL MARKETING", img: "/certificates/digitalmarketing.jpg", info: "Marketing Strategies Online" },
    { id: 9, name: "GENERATIVE AI AWS", img: "/certificates/GenerativeAIAWS.jpg", info: "Generative AI on AWS" },
    { id: 10, name: "GOOGLE ANALYTICS", img: "/certificates/GoogleAnalytics.jpg", info: "Web Analytics Expertise" },
    { id: 11, name: "GOOGLE SHEETS", img: "/certificates/Googlesheets.jpg", info: "Spreadsheet Automation" },
    { id: 12, name: "MATLAB", img: "/certificates/matlab.jpg", info: "MATLAB for Data Analysis" },
    { id: 13, name: "MS EXCEL", img: "/certificates/msexcel.jpg", info: "Advanced Excel Skills" },
  ];

  const [popupImg, setPopupImg] = useState(null);
  const sliderRef = useRef(null);
  const pauseRef = useRef(false);

  // Continuous swipe
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const swipe = () => {
      if (pauseRef.current) return;

      const cardWidth = slider.clientWidth; // one full card
      if (slider.scrollLeft + cardWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    };

    const interval = setInterval(swipe, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" className="pt-16 pb-16 px-4 md:px-6 lg:px-6 max-w-7xl mx-auto">
      <Reveal>
        <h2 className="text-3xl font-bold text-white mb-16 text-center">
          Experience & Certifications
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN */}
          <div>
            <div className="relative group p-8 md:p-10 bg-[#020617] overflow-hidden border border-white/5 transition-all duration-700 hover:border-orange-200/20">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: "url(https://www.transparenttextures.com/patterns/topography.png)",
                }}
              />
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[1px] w-8 bg-orange-300/50"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-orange-200/70">
                  Experience
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                  Web Development Intern
                </h3>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
                  June 2025 – Feb 2026
                </p>
                <h4 className="text-orange-200/90 text-sm tracking-widest uppercase mb-6">
                  YCIS Satara
                </h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li>• Developed responsive websites using WordPress</li>
                  <li>• Improved UI using Tailwind</li>
                  <li>• Bug fixing & optimization</li>
                  <li>• Team collaboration</li>
                </ul>
                <div className="mt-8 flex gap-4 flex-wrap">
                  <a
                    href="https://unikbp.ac.in/"
                    target="_blank"
                    className="px-5 py-2 text-xs uppercase tracking-widest border border-orange-200/40 text-orange-200 transition hover:bg-orange-200 hover:text-black"
                  >
                    KBP University
                  </a>
                  <a
                    href="https://rayatshikshan.edu/"
                    target="_blank"
                    className="px-5 py-2 text-xs uppercase tracking-widest border border-white/20 text-white transition hover:border-orange-200 hover:text-orange-200"
                  >
                    Rayat
                  </a>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-200/0 via-orange-200/5 to-orange-200/0 opacity-0 group-hover:opacity-100 transition duration-1000 blur-2xl" />
            </div>
          </div>

          {/* RIGHT COLUMN - CERTIFICATES */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-orange-300/50"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-orange-200/70">
                Certifications
              </span>
            </div>

            <div
              ref={sliderRef}
              className="flex overflow-hidden w-full h-[400px] relative"
              onMouseEnter={() => (pauseRef.current = true)}
              onMouseLeave={() => (pauseRef.current = false)}
            >
              {[...certs, ...certs].map((c, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-full h-full cursor-pointer"
                  onClick={() => setPopupImg(c.img)}
                >
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    className="object-contain rounded-xl"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 70vw"
                  />

                  {/* Bottom overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 opacity-0 hover:opacity-100 transition p-4 rounded-b-xl text-white">
                    <p className="font-bold text-base md:text-lg">{c.name}</p>
                    <p className="text-sm md:text-base">{c.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* POPUP */}
      {popupImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setPopupImg(null)}
        >
          <div className="relative w-full max-w-3xl h-[80vh]">
            <Image
              src={popupImg}
              alt="Certificate"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 50vw"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={() => setPopupImg(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}