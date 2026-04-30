import Link from "next/link";
import Image from "next/image";
import { Project } from "../db/schema/project.schema";
import { ExternalLinkIcon, GitHubIcon } from "./icons/svg";
import { CldImage } from "next-cloudinary";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, category, description, tags, githubUrl, liveUrl, imageUrl } = project;

  return (
    <article className="bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#333333] hover:-translate-y-0.5">
      <div className="relative w-full h-50 bg-[#1a1a1a] overflow-hidden">
        {imageUrl ? (
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-[#161616]" />
        )}
      </div>
      <div className="px-5 py-4 flex flex-col gap-3">
        {category && (
          <p className="text-[11px] font-semibold tracking-widest text-white/35 uppercase">
            {category}
          </p>
        )}
        <h3 className="text-[17px] font-bold text-white leading-snug">
          {title}
        </h3>
        <p className="text-[13px] text-white/50 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[12px] text-white/50 border border-[#2a2a2a] rounded-md px-2.5 py-0.5">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-en gap-2 pt-1">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] font-medium text-white/60 border border-[#2a2a2a] rounded-lg px-3.5 py-1.5 transition-all hover:text-white hover:border-[#444444]"
            >
              <GitHubIcon />
              GitHub
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] font-medium text-white/60 border border-[#2a2a2a] rounded-lg px-3.5 py-1.5 transition-all hover:text-white hover:border-[#444444]"
            >
              <ExternalLinkIcon />
              Live
            </Link>
          )}
        </div>

      </div>
    </article>
  );
}