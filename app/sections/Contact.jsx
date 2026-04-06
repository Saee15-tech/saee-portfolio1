"use client";

import Reveal from "../components/Reveal";
import { motion } from "framer-motion";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#020617] text-white min-h-screen">
      <Reveal>
        {/* Main Title Styling */}
        <motion.div
          className="text-center mb-16 space-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-[11px] uppercase tracking-[0.4em] text-gray-400 font-bold">
            Let's Build Something Extraordinary
          </h2>
          <h3 className="text-4xl font-bold tracking-wider">CONTACT ME</h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: THE FORM CARD */}
          <motion.div
            className="lg:col-span-6 relative group h-[500px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Neon Glow */}
            <div className="absolute -inset-0.5 bg-blue-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative bg-[#0a0f1e] border border-blue-500/30 p-8 md:p-12 rounded-xl h-full flex flex-col justify-between shadow-[0_0_25px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-shadow duration-500">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400 mb-6 block font-semibold italic">
                    — Get In Touch
                  </span>

                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Name</label>
                      <input 
                        type="text" 
                        placeholder="Name"
                        className="w-full bg-[#0f172a] border border-blue-900/50 rounded-lg p-4 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all text-sm placeholder-gray-600 shadow-inner"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Email</label>
                      <input 
                        type="email" 
                        placeholder="Email"
                        className="w-full bg-[#0f172a] border border-blue-900/50 rounded-lg p-4 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all text-sm placeholder-gray-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1 font-serif">Message</label>
                      <textarea 
                        rows="3"
                        placeholder="Share your vision or simply say hello..."
                        className="w-full bg-[#0f172a] border border-blue-900/50 rounded-lg p-4 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all text-sm resize-none placeholder-gray-600"
                      ></textarea>
                    </div>

                    {/* Submit Button INSIDE the form column with full glow */}
                    <button className="w-full mt-2 relative py-4 bg-[#0a0f1e] border border-blue-500/30 rounded-xl text-white font-bold tracking-[0.2em] uppercase group hover:text-blue-200 transition-all overflow-hidden shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.7)]">
                      <span className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-50 rounded-xl animate-pulse"></span>
                      <span className="relative z-10">Submit</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: INFO CARDS */}
          <motion.div
            className="lg:col-span-6 flex flex-col gap-6 h-[500px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex-1 flex flex-col gap-6">
              {/** Reusable Card Component **/}
              {[
                { title: "Direct Message", info: "saee.mohite15@gmail.com", type: "Email", num: "01" },
                { title: "Project Inquiries", info: "9226574523", type: "Phone", num: "02" },
                { title: "Let's Connect", info: "Satara, Maharashtra", type: "Location", num: "03" },
              ].map((card, idx) => (
                <div key={idx} className="flex-1 relative overflow-hidden bg-[#0a0f1e] border border-gray-800 p-8 rounded-xl flex justify-between items-center group hover:border-blue-500/50 transition-all duration-500 shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                  {/* Glow layer */}
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-40 rounded-xl animate-pulse"></div>
                  {/* Bottom line dark */}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#0a0f1e]"></div>
                  <div className="space-y-2 relative z-10">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{card.title}</p>
                    <p className="text-xl font-medium tracking-tight">{card.info}</p>
                  </div>
                  <div className="text-right relative z-10">
                    <p className="text-[10px] text-blue-500 uppercase tracking-widest mb-1 font-bold">{card.type}</p>
                    <p className="text-4xl font-mono text-blue-600/20 group-hover:text-blue-500 transition-colors duration-500">{card.num}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </Reveal>
    </section>
  );
}