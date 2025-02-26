import BallAnimation from "@/_components/sharable/BallAnimation";
import CircleIcon from "@/_components/sharable/CircleIcon";
import SquareIcon from "@/_components/sharable/SquareIcon";
import { Button, buttonVariants } from "@/components/ui/button";
import { servicesPage } from "@/constants/ServicesPage";
import { servPage } from "@/types/type";
import { Rakkas } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const font = Rakkas({
  subsets: ["latin"],
  weight: ["400"],
});
const page = () => {
  return (
    <section className="mt-[100px]">
      <div className="container">
        {servicesPage.map((item: servPage, i: number) => {
          return (
            <div
              key={item.id}
              className={`flex relative justify-between md:flex-row md:even:flex-row-reverse items-center flex-col  py-10 border-b border-border  gap-6`}>
              <BallAnimation
                blur="blur-3xl sm:block hidden"
                x={i % 2 !== 0 ? "right-0" : "-left-6"}
                y={i % 2 !== 0 ? "bottom-0" : "top-0"}
                w={"w-[200px]"}
                h={"h-[200px]"}
              />
              {i % 2 == 0 ? (
                <CircleIcon
                  y={"top-10"}
                  x={"left-0"}
                  color={"text-primary sm:block hidden"}
                />
              ) : (
                <SquareIcon
                  y={"bottom-10"}
                  x={"right-0"}
                  color={"text-primary  sm:block hidden"}
                />
              )}
              <div className="space-y-4  md:w-1/2">
                <h2
                  className={`text-3xl font-semibold  md:text-4xl lg:text-5xl ${font.className} `}>
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
                <Link href={"/contact"} className={buttonVariants()}>
                  تواصل معنا
                </Link>
              </div>
              <div className="md:w-1/2 grid place-items-center">
                <div className="relative size-[250px] sm:size-[350px] ">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default page;
