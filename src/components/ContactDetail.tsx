import { contactInfo } from "../types/type";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactItem from "./ContactItem";
import SocialButton from "./SocialButton";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Phnom Penh, Cambodia",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: contactInfo.linkedin,
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">...</svg>,
  },
  {
    label: "Instagram",
    href: contactInfo.instagram,
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">...</svg>,
  },
];

export default function ContactDetails() {
  return (
    <div className="flex flex-col justify-center gap-12 py-4">
      {/* Title */}
      <div className="space-y-4">
        <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-medium">
          Contact
        </p>
        <h2 className="text-5xl font-bold tracking-tight text-white leading-none">
          Let&apos;s Connect
        </h2>
        <p className="text-sm text-white/40 leading-relaxed max-w-xs">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      {/* Details */}
      <ul className="flex flex-col gap-5">
        {details.map((item) => (
          <li key={item.label}>
            <ContactItem {...item} />
          </li>
        ))}
      </ul>

      {/* Socials */}
      <div className="flex items-center gap-3">
        {socials.map((item) => (
          <SocialButton key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}