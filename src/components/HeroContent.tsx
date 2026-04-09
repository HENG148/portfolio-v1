type TagListProps = {
  tags: readonly string[];
  varaint?: "default" | "outline";
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
}

type CTA = {
  label: string;
  variant?: "primary" | "outline";
  onClick?: () => void;
}

type HeroProps = {
  title: React.ReactNode;
  description: string;
  tags: readonly string[];
  actions: CTA[];
};

function TagList({ tags, varaint = "default" }: TagListProps) {
  const baseStyle =
    "px-3.5 py-1 text-xs rounded-md tracking-wide transition";

  const variants = {
    default: "text-neutral-400 border border-neutral-700",
    outline: "text-white border border-white",
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className={`${baseStyle} ${variants[varaint]}`}>
          {tag}
        </span>
      ))}
    </div>
  )
}

function Button({ children, variant = "primary", onClick }: ButtonProps) {
  const base =
    "px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors duration-200";

  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
  }
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

function CTAButtons({ actions }: { actions: CTA[] }) {
  return (
    <div className="flex flex-wrap gap-4 pt-2">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant={action.variant}
          onClick={action.onClick}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}

export default function HeroContent({
  title,
  description,
  tags,
  actions
}: HeroProps) {
  return (
    <div className="flex-1 flex w-full flex-col gap-7">
      <h1 className="font-primary text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight text-white">
        {title}
      </h1>
      <p className="text-neutral-400 text-base leading-relaxed max-w-md">
        {description}
      </p>
      <TagList tags={tags} />
      <CTAButtons actions={actions} />
    </div>
  )
}