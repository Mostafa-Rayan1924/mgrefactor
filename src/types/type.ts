import { LucideIcon } from "lucide-react";
import React from "react";

export interface servType {
  id: number;
  title: string;
  desc?: string;
  icon: LucideIcon;
}
export interface Project {
  _id: string;
  projectName: string;
  images: string[];
  engineer: {
    _id: string;
    name: string;
    role: string;
  };
  category: string;
  section: string;
  location: string;
  __v: number;
  imageCover: string;
}
export interface Faq {
  question: string;
  answer: string;
}
export interface busInfo {
  id: number;
  title: string;
  title2?: string;
  icon: LucideIcon;
}
export interface servPage {
  id: number;
  title: string;
  desc: string;
  img: string;
}
