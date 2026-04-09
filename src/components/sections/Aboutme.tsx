'use client'

import { highlights, slides, tags } from "@/src/types/type";
import { motion, Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ImageCarousel from "../ui/Carousel";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    }
  }
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return(
    <section
      id="about"
      className="max-w-7xl mx-auto py-20 px-6 md:px-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-zinc-400 text-base md:text-[1.05rem] leading-relaxed"
          >
            I'm Rong Sokheng, an IT graduate from Royal University of Phnom Penh.
            I specialize in Full-stack development using React, Next.js,
            TypeScript, and Express.js to build scalable products.
          </motion.p>

          <motion.ul variants={container} className="flex flex-col gap-3">
            {highlights.map(({ text }) => (
              <motion.li
                key={text}
                variants={fadeUp}
                className="flex items-start gap-3 group"
              >
                <CheckCircle
                  size={17}
                  className="mt-0.5 shrink-0 text-zinc-400 group-hover:text-white transition"
                  strokeWidth={1.8}
                />
                <span className="text-zinc-300 text-sm group-hover:text-white transition">
                  {text}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={container}
            className="flex flex-wrap gap-2"
          >
            {tags.map(({ label }) => (
              <motion.span
                key={label}
                variants={fadeUp}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#fff",
                  color: "#fff",
                }}
                className="px-3 py-1 rounded-full border border-zinc-700 text-zinc-400 text-xs font-medium tracking-wide transition cursor-default select-none"
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <ImageCarousel slides={slides} />
        </motion.div>
      </div>
    </section>
  )
}