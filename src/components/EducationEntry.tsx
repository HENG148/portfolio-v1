import { Education } from "../types/type";
import GraduatedIcon from "./icons/svg";

export default function EducationEntry({ edu }: { edu: Education; index: number }) {
  return (
    <div className="group relative flex gap-6 pb-12 last:pb-0">
      {/* Timeline dot and line */}
      <div className="relative flex flex-col items-center">
        <div className="relative z-10 mt-1 h-3 shrink-0">
          <div className="h-3 w-3 rounded-full border-neutral-500 bg-neutral-900 transition-colors duration-300 group-hover:border-white group-hover:bg-white" />
        </div>
        <div className="mt-2 w-px flex-1 bg-linear-to-b from-neutral-700 to-transparent" />
      </div>

      <div className="flex-1 pb-2 w-full">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start mt-3 gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center text-neutral-500 justify-center rounded-lg border border-neutral-700 bg-neutral-800/60 transition-colors duration-300 group-hover:text-neutral-300 group-hover:border-neutral-500">
              <GraduatedIcon />
            </div>
            <div className="flex-1">
              <h3 className="text-[0.95rem] font-semibold leading-snug tracking-tight text-white">
                {edu.title}
              </h3>
              <p className="mt-0.5 text-sm text-neutral-400">{edu.school}</p>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-neutral-700/70 bg-neutral-800/40 px-3 py-1 text-xs font-medium tracking-wide text-neutral-400">
            {edu.year}
          </span>
        </div>
      </div>
    </div>
  );
}