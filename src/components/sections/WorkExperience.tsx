'use client'

import { Experience } from "@/src/types/type"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import ExperienceCard from "../ExperienceCard"

const SkeletonCard: React.FC = () => (
  <div className="flex gap-6 pb-12 animate-pulse">
    <div className="flex flex-col items-center">
      <div className="h-3 w-3 rounded-full bg-neutral-700" />
      <div className="mt-2 w-px flex-1 bg-neutral-800" />
    </div>
    <div className="flex-1 space-y-3">
      <div className="h-4 w-1/3 rounded bg-neutral-800" />
      <div className="h-3 w-1/4 rounded bg-neutral-800" />
      <div className="h-3 w-full rounded bg-neutral-800" />
      <div className="h-3 w-5/6 rounded bg-neutral-800" />
    </div>
  </div>
)

export const WorkExperience: React.FC = () => {
  const [experience, setExperience] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchExperience() {
      try {
        const res = await fetch("/api/experience")
        if (!res.ok) throw new Error("Failed to fetch")
        const json: { success: boolean; data: Experience[] } = await res.json()
        if (!json?.data) throw new Error("Invalid format")
        setExperience(json.data)
      } catch (err) {
        setError("Could not load work experience.")
      } finally {
        setLoading(false)
      }
    }
    fetchExperience()
  }, []);

   return (
     <section
       id="experience"
       className="w-full antialiased"
     >
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl tracking-tight font-bold text-white sm:text-5xl">
            Work Experience
          </h2>
          <p className="text-base text-neutral-500 mt-3">
            Recent roles focused on shipping modern products.
          </p>
        </motion.div>

        <div>
          {loading && [...Array(3)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}

          {error && (
            <p className="text-center text-sm text-red-400">{error}</p>
          )}

          {!loading && !error && experience.map((exp, i) => (
            <motion.div
              key={exp._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}