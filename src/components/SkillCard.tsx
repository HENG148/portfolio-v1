import { SkillCategory } from "../types/type";

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  return (
    <div className="group rounded-2xl border border-white/[0.07] bg-white/3 p-6 flex flex-col gap-5 hover:border-white/15 hover:bg-white/5 transition-all duration-300 ease-out">
      <h3 className="text-sm font-semibold text-white tracking-widest uppercase">
        {category.title}
      </h3>
 
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#aaa] tracking-wide hover:border-white/20 hover:text-white transition-colors duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}