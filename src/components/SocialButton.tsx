import { ArrowUpRight } from "lucide-react";

interface SocialButtonProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export default function SocialButton({
  label,
  href,
  icon,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/[0.07] bg-white/3 text-white/40 hover:text-white hover:border-white/15 hover:bg-white/[0.07] transition-all duration-200"
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
      <ArrowUpRight
        size={10}
        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
      />
    </a>
  );
}