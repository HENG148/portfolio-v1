"use client";

import { useState } from "react";
import FloatingInput from "./FloatingInput";
import FloatingTextarea from "../FloatingTextarea";
import { Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type Status = "idle" | "sending" | "sent" | "error";

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Enter a valid email";
  if (!form.subject.trim()) errors.subject = "Subject is required";
  if (!form.message.trim()) errors.message = "Message is required";
  else if (form.message.length > 2000) errors.message = "Max 2000 characters";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) setServerError("");
  };

  const handleSubmit = async () => {
    const errors = validate(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus("sending");
    setFieldErrors({});
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setForm(initialForm);
      }, 3000);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  const isSent = status === "sent";
  const isSending = status === "sending";

  return (
    <div className="w-full relative rounded-2xl border border-white/[0.07] bg-white/2 p-8 flex flex-col gap-6 overflow-hidden">
      {/* Subtle top-edge highlight */}
      {/* <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
        }}
      /> */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-2/3 h-px pointer-events-none
          bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]
        "
      />

      <div className="space-y-1">
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-medium">
          Get in touch
        </p>
        <h3 className="text-lg font-semibold text-white tracking-tight">
          Send a message
        </h3>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-3"> {/* flex flex-col gap-3 */}
        <FloatingInput
          label="Your name"
          name="name"
          value={form.name}
          onChange={handleChange}
          index={0}
          error={fieldErrors.name}
        />
        <FloatingInput
          label="Email address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          index={1}
          error={fieldErrors.email}
        />
        <FloatingInput
          label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          index={2}
          error={fieldErrors.subject}
        />
        <FloatingTextarea
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          index={3}
          error={fieldErrors.message}
        />
      </div>

      {/* Server error */}
      {status === "error" && serverError && (
        <div className="flex items-start gap-2.5 rounded-lg border border-red-500/20 bg-red-500/6 px-3.5 py-3">
          <svg
            className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            />
          </svg>
          <p className="text-xs text-red-400 leading-relaxed">{serverError}</p>
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={isSending || isSent}
        className={`relative w-full flex items-center justify-center gap-2.5 rounded-xl py-3.5 text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 ${
          isSent
            ? "bg-white/6 text-white/50 border border-white/10 cursor-default"
            : "bg-white text-black hover:bg-white/90 active:scale-[0.985] cursor-pointer"
        }`}
      >
        {isSending ? (
          <>
            <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            Sending…
          </>
        ) : isSent ? (
          <>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Message sent
          </>
        ) : (
          <>
            <Send size={13} strokeWidth={2} />
            Send message
          </>
        )}
      </button>
    </div>
  );
}