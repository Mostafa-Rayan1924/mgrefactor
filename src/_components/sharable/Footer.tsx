"use client";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import Socialmedia from "./Socialmedia";
import { links } from "@/constants/NavLinks";
import { bussinessInfo } from "@/constants/bussinessInfo";
const Footer = () => {
  return (
    <footer className=" bg-background border-t border-border  py-[40px]">
      <div className="container grid grid-cols-1  text-center md:text-start  md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
        <div className="flex flex-col gap-4 md:gap-3">
          <h2 className="text-2xl font-semibold">شركة MG للمقاولات العامة</h2>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Socialmedia size="size-8" />
          </div>
          <p className="text-muted-foreground text-start leading-relaxed   max-w-full">
            شركتنا هي خيارك الأمثل لتحقيق المشاريع البنائية بأعلى مستويات الدقة
            والتميز. نحن نجمع بين الخبرة الواسعة والفريق المؤهل.
          </p>
        </div>
        <ul className="flex flex-col  gap-2 w-full ">
          {links.map((item) => {
            return (
              <Link
                href={item.url}
                key={item.id}
                target="_blank"
                className={` duration-300 flex items-center hover:ps-2 gap-2 pb-3 w-full border-b border-border  cursor-pointer  `}>
                <ArrowLeftCircle size={20} className="text-primary mt-[2px]" />
                {item.title}
              </Link>
            );
          })}
        </ul>

        <div className="flex flex-col gap-6">
          {bussinessInfo.map((item) => {
            return (
              <div className="flex items-center  md:flex-row flex-col gap-2 md:gap-4">
                <item.icon className="size-6 text-primary" />
                <div>
                  <p className="text-muted-foreground  ">{item.title}</p>
                  <p className="text-muted-foreground  ">{item.title2}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.580770717055!2d32.2976827246317!3d30.61758597464001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f8594731ee0417%3A0x791ce42b511578d3!2z2LXZitiv2YTZitmHINivINin2YXZhtmK2Ycg2LTYudio2KfZhg!5e0!3m2!1sar!2seg!4v1740403284028!5m2!1sar!2seg"
            loading="lazy"
            className="w-full h-[350px] sm:size-full rounded-lg object-cover"></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
