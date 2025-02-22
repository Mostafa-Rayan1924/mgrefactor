import { Button, buttonVariants } from "@/components/ui/button";
import { services } from "@/constants/Services";
import { cn } from "@/lib/utils";
import { servType } from "@/types/type";
import Link from "next/link";
const HeroInfo = () => {
  return (
    <div className="col-span-3 mt-[30px] lg:mt-[80px]">
      <div className=" space-y-4 xl:space-y-6">
        <h2 className="text-2xl  sm:text-3xl text-center lg:text-start lg:text-5xl font-bold">
          مرحبا بكم في شركة <span className="text-primary">MG</span>
        </h2>
        <p className="text-muted-foreground leading-7 text-center sm:text-start lg:max-w-[70%]">
          شركتنا هي خيارك الأمثل لتحقيق المشاريع البنائية بأعلى مستويات الدقة
          والتميز. نحن نجمع بين الخبرة الواسعة والفريق المؤهل والتكنولوجيا
          المتقدمة لتقديم حلول مبتكرة ومتكاملة في مجالات البناء والتشييد.
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <Link href={"/about"}>
            <Button
              className={cn(buttonVariants({ size: "lg" }), "text-white")}>
              قراءة المزيد
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" })
              )}>
              اتصل بنا
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-semibold">خدماتنا :</h3>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-3 mt-4 ">
          {services.map((service: servType) => (
            <div
              key={service.id}
              className="flex flex-col  gap-2 hover:border-primary duration-300 odd:hover:-translate-y-2.5    bg-accent py-4 even:bg-transparent even:border-border even:border-2 px-6 rounded-lg">
              <service.icon className="w-8 h-8 text-primary  " />
              <h2 className="font-semibold text-lg">{service.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
