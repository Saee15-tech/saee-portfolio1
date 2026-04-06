"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
      }}
      className="fixed w-[300px] h-[300px] rounded-full
      bg-green-400/20 blur-3xl pointer-events-none z-0"
    />
  );
}