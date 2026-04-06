"use client";

import { useState, useEffect } from "react"; // <-- import useEffect here
import Reveal from "../components/Reveal";

const initialTestimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer at ABC Corp",
    text: "Working with Saee was amazing! Their coding skills and attention to detail are top-notch.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager at XYZ Ltd",
    text: "Saee delivers high-quality projects on time. Professional, reliable, and creative!",
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [form, setForm] = useState({ name: "", role: "", message: "" });
  const [active, setActive] = useState(0);

  // Auto-slide
  useEffect(() => { // <-- just useEffect, not React.useEffect
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.message) return;
    const newTestimonial = {
      id: testimonials.length + 1,
      name: form.name,
      role: form.role,
      text: form.message,
    };
    setTestimonials([...testimonials, newTestimonial]);
    setForm({ name: "", role: "", message: "" });
    setActive(testimonials.length); // show new testimonial
  };

  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
      <Reveal>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Testimonials Slider */}
          <div>
            <div className="text-center lg:text-left mb-12 lg:mb-0">
              <div className="w-32 h-[1px] bg-gray-700 mx-auto mb-4"></div>
              <h2 className="text-5xl font-serif text-white">Testimonials</h2>
            </div>
            <div className="overflow-hidden w-full relative">
              <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="flex-shrink-0 w-full px-6 flex flex-col items-center text-center"
                  >
                    <p className="text-gray-300 italic mb-4">"{t.text}"</p>
                    <h4 className="text-white font-semibold">{t.name}</h4>
                    <p className="text-orange-300 text-sm">{t.role}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-3 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === active ? "bg-orange-300" : "bg-gray-600"
                    }`}
                    onClick={() => setActive(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Feedback Form */}
          <div className="bg-[#020617] p-8 rounded-xl border border-white/10 shadow-lg">
            <h3 className="text-2xl font-serif mb-6 text-white">Leave Feedback</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="px-4 py-2 bg-[#0B0F1A] border border-gray-700 text-white rounded-md focus:outline-none focus:border-orange-300"
                required
              />
              <input
                type="text"
                name="role"
                placeholder="Your Role / Company"
                value={form.role}
                onChange={handleChange}
                className="px-4 py-2 bg-[#0B0F1A] border border-gray-700 text-white rounded-md focus:outline-none focus:border-orange-300"
                required
              />
              <textarea
                name="message"
                placeholder="Your Feedback"
                value={form.message}
                onChange={handleChange}
                className="px-4 py-2 bg-[#0B0F1A] border border-gray-700 text-white rounded-md focus:outline-none focus:border-orange-300 resize-none"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="mt-2 px-6 py-2 bg-orange-300 text-black font-semibold rounded-md hover:bg-orange-400 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}