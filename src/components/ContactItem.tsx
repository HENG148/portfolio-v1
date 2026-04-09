interface ContactItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

export default function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: ContactItemProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href && { href })}
      className={`group flex items-start gap-4 transition-colors duration-200 ${
        href
          ? "text-white/50 hover:text-white"
          : "text-white/40"
      }`}
    >
      <span className="mt-0.5 flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.07] bg-white/4 group-hover:border-white/15 group-hover:bg-white/[0.07] transition-all duration-200 shrink-0">
        <Icon size={13} strokeWidth={1.5} />
      </span>

      <span className="flex flex-col gap-0.5">
        <span className="text-[10px] tracking-widest uppercase text-white/25 group-hover:text-white/40 transition-colors duration-200">
          {label}
        </span>
        <span className="text-sm">{value}</span>
      </span>
    </Wrapper>
  );
}