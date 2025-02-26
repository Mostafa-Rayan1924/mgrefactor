import BallAnimation from "@/_components/sharable/BallAnimation";
import CircleIcon from "@/_components/sharable/CircleIcon";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const ImportantSec = () => {
  return (
    <section className="relative">
      <BallAnimation
        blur="blur-2xl hidden md:block"
        x={"-left-6"}
        y={"top-0"}
        w={"w-[200px]"}
        h={"h-[200px]"}
      />

      <CircleIcon
        y={"bottom-0"}
        x={"right-0"}
        color={"text-primary hidden md:block"}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2  md:gap-8">
        <div>
          <div className="max-w-lg md:max-w-none space-y-4">
            <h2 className="text-2xl font-semibold  sm:text-3xl lg:text-4xl">
              اخر مشاريع <span className="text-primary">شركتنا</span>
            </h2>
            <p className=" leading-[2] text-muted-foreground">
              مشروع ميدان شامبليون واحد من اقوي المشاريع الاخيره التي تمت في
              مدينه الاسماعيليه بالفتره الاخيره تعاونا مع هيئة قناه السويس...
              المشروع شمل العديد من التطورات المبهره التي قامت بها الشركه علي
              الميدان...حيث قامت الشركه بتوسيعات واضافات ادت الي تحويل المكان من
              حديقه عامه الي حديقه اشبه بالحدائق السياحية واصبحت كمجمع للكافيهات
              والمطاعم.
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
        </div>

        <div className="h-[350px] size-full relative">
          <Image
            src="https://res.cloudinary.com/dlaeaq6is/image/upload/v1740592527/1_etr4uo.jpg"
            className="rounded "
            alt="image"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default ImportantSec;
