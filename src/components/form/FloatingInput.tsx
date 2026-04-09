import { useRef, useState } from "react";

interface FloatingInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  index?: number;
  error?: string;
}

export default function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  index = 0,
  error,
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isFloated = focused || value.length > 0;

  return (
    <div
      className="relative group"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Animated border glow */}
      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-500 pointer-events-none ${
          focused ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 70%)",
          boxShadow: error
            ? "0 0 0 1px rgba(248,113,113,0.4)"
            : "0 0 0 1px rgba(255,255,255,0.15), 0 1px 20px rgba(255,255,255,0.04)",
        }}
      />

      {/* Input */}
      <input
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full rounded-xl px-4 pt-6 pb-2.5 text-sm text-white bg-white/4 outline-none border transition-all duration-300 ${
          error
            ? "border-red-400/40 bg-red-400/3"
            : focused
            ? "border-white/20 bg-white/6"
            : "border-white/[0.07] hover:border-white/12"
        }`}
        style={{ caretColor: "white" }}
        autoComplete="off"
      />

      {/* Floating label */}
      <label
        htmlFor={name}
        onClick={() => inputRef.current?.focus()}
        className={`absolute left-4 cursor-text select-none transition-all duration-200 ease-out ${
          isFloated
            ? "top-2 text-[10px] tracking-widest uppercase text-white/40"
            : "top-1/2 -translate-y-1/2 text-sm text-white/30"
        }`}
      >
        {label}
      </label>

      {/* Error message */}
      {error && (
        <p className="mt-1.5 pl-1 text-[11px] text-red-400/80 leading-none">
          {error}
        </p>
      )}
    </div>
  );
}