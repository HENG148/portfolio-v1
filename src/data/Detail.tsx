import { Mail, MapPin, Phone } from "lucide-react";
import { contactInfo } from "../types/type";

export const details = [
  {
    icon: <Mail />,
    lable: "Email",
    value: contactInfo.email
  },
  {
    icon: <Phone />,
    label: "Phone",
    value: contactInfo.phone
  },
  {
    icon: <MapPin />,
    label: "Location",
    value: "Phnom Penh,"
  }
]