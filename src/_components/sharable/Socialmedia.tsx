import { socialLinks } from "@/constants/socialLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Socialmedia = () => {
  return (
    <div className="flex items-center flex-wrap justify-center mx-auto mt-8 sm:mt-10 gap-5">
      {socialLinks.map((link) => (
        <div
          key={link.id}
          className={` hover:-translate-y-2 duration-200  relative size-9 sm:size-12 grid place-items-center rounded-lg`}>
          <Link
            className={`p-2  rounded-lg text-white `}
            href={link.path}
            key={link.id}>
            <Image fill alt="socialmedia icon" src={link.icon} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Socialmedia;
