import { ContactItem } from "@/types/type";
import { Clock, MapPin, Phone } from "lucide-react";

export const contactForm: ContactItem[] = [
  {
    id: 1,
    icon: MapPin,
    title: "العنوان",
    desc: "مصر, الاسماعيلية, بجوار صيدلية امنية شعبان.",
  },
  {
    id: 2,
    icon: Phone,
    title: "للاتصال",
    desc: "+0201156581025 +0201277841419",
  },
  {
    id: 3,
    icon: Clock,
    title: "مواعيد العمل",
    desc: "من 9ص الي 11م",
  },
];
