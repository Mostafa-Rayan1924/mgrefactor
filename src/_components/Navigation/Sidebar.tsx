"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { links } from "@/constants/NavLinks";
import Socialmedia from "../sharable/Socialmedia";
import LoggedUserBtns from "./LoggedUserBtns";
const Sidebar = () => {
  let pathname = usePathname();
  let [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div
          className="border border-input cursor-pointer  bg-background size-10 rounded-md grid place-items-center
        ">
          <Menu className="size-6 " />
        </div>
      </SheetTrigger>
      <SheetContent className="h-screen overflow-y-auto">
        <SheetHeader onClick={() => setOpen(!open)}>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="text-xl text-center">
            اهلا وسهلا بك في شركة MG
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-3 py-8">
          {links.map((link) => (
            <Link
              key={link.id}
              onClick={() => setOpen(!open)}
              className={`${
                pathname === link.url ? "bg-accent text-primary" : ""
              } hover:bg-accent p-2
             rounded-lg`}
              href={link.url}>
              {link.title}
            </Link>
          ))}
          <div className="w-full flex items-center justify-center mt-4 ">
            <LoggedUserBtns />
          </div>
        </div>
        <SheetFooter>
          <div className="mt-4 mx-auto">
            <Socialmedia size="size-9 sm:size-12 " />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
