import { servType } from "@/types/type";
import { Building, FileKey2, PencilRuler, Ship } from "lucide-react";

export const services: servType[] = [
  {
    id: 1,
    title: "خدمات البناء",
    icon: Building,
  },
  {
    id: 2,
    title: "ادارة البناء",
    icon: PencilRuler,
  },
  {
    id: 3,
    title: "انشاءات عامة",
    icon: FileKey2,
  },
  {
    id: 4,
    title: "انشاءات بحريه",
    icon: Ship,
  },
];
