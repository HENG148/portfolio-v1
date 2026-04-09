'use client'

import { ApiResponse, Education } from "@/src/types/type";
import { useEffect, useState } from "react";
import EducationEntry from "../EducationEntry";

export default function EducationSection() {
  const [educations, setEducations] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/education")
      .then((r) => r.json() as Promise<ApiResponse>)
      .then((res) => {
        if (res.success) setEducations(res.data)
        else setError("Failed to load education data.");
      })
      .catch(() => setError("Network error."))
      .finally(() => setLoading(false))
  }, []);

  return (
    <section
      id="education"
      className="w-full font-sans antialiased">
      <div className="mx-auto max-w-7xl py-20 px-6 md:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Education
          </h2>
        </div>
        {loading && <p className="text-[#444] text-sm mt-16">Loading…</p>}
          {error && <p className="text-[#444] text-sm mt-16">{error}</p>}

          {!loading && !error && (
            <div className="">
              {educations.map((edu, idx) => (
                <EducationEntry key={edu._id} edu={edu} index={idx} />
              ))}
            </div>
          )}
      </div>
    </section>
  )
}