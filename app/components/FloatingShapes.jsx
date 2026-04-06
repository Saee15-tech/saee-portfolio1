"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="fixed w-20 h-20 bg-green-400/20 rounded-full blur-2xl top-40 left-10"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="fixed w-32 h-32 bg-blue-400/20 rounded-full blur-2xl bottom-20 right-20"
      />
    </>
  );
}