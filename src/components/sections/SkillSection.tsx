import { skillCategories } from "@/src/types/type";
import SkillCard from "../SkillCard";

export default function SkillSection() {
  return (
    <section
      id="skill"
      className="font-sans bg-[#0d0d0d] px-6 py-20 flex flex-col items-center">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Skills</h2>
        <p className="text-[#888] text-base tracking-wide">
          Tools and technologies I use to build products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl">
        {skillCategories.map((cate) => (
          <SkillCard key={cate.title} category={cate} />
        ))}
      </div>
    </section>
  )
}