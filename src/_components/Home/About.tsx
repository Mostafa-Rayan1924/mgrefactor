import { buttonVariants } from "@/components/ui/button";
import SquareIcon from "../sharable/SquareIcon";
import Link from "next/link";
import CircleIcon from "../sharable/CircleIcon";
import BallAnimation from "../sharable/BallAnimation";

const About = ({ show }: { show?: boolean }) => {
  return (
    <section className="relative mt-6 sm:mt-0 overflow-hidden">
      <SquareIcon
        y="-bottom-5"
        x="start-5 sm:start-10 md:start-40 animate-pulse"
        color="text-foreground"
      />

      <BallAnimation
        blur="blur-3xl"
        x="right-0"
        y="top-0"
        w="w-[120px] sm:w-[200px]"
        h="h-[120px] sm:h-[200px]"
      />

      <div className="relative w-full px-3 sm:px-5">
        <div className="max-w-[700px] relative mx-auto p-4 sm:p-6 md:p-8 bg-background/90 border border-border rounded-lg">
          <CircleIcon y="-top-5" x="end-0" color="text-primary" />

          <div className="flex flex-col gap-y-3 sm:gap-y-4 text-start">
            <h2 className="font-semibold text-lg sm:text-xl text-primary">
              رسالتنا
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-relaxed">
              تعرف أكثر عن أهدافنا
            </h3>

            <p
              className={`text-sm sm:text-base text-muted-foreground leading-7 sm:leading-relaxed ${
                show ? "line-clamp-4" : ""
              }`}>
              مهمتنا هي تحقيق رضا العملاء من خلال تحقيق أعلى مستوى من الخدمات
              عالية الجودة بأسعار عادلة، كل ذلك بسبب الوقت المخطط والمراقب الذي
              تم تأريخه من قبل العميل. عمل قائم على القيمة لجميع أصحاب المصلحة
              لدينا نهج فريق واحد لتنفيذ المشروع مع جميع عملائنا تنفيذ المشاريع
              بأحدث الحلول الهندسية والتكنولوجية أعلى مستوى من الصحة والسلامة
              والجودة والاستدامة في جميع مشاريعنا وأقسامنا. توفير "النمو من خلال
              التعلم" لجميع موظفيها والسماح لفرقنا بالتطور والازدهار من خلال
              التعليم والتدريب. أنشطة الأعمال المستدامة التي تستخدم أحدث
              التقنيات والإدارة مع الفوائد المشتركة ليس فقط أثناء البناء ولكن
              أيضًا أثناء دورة حياة المبنى. تحقيق مكانة نموذج الأعمال التجارية
              من خلال مستويات عالية من الاحتراف والالتزام بالجودة والسلامة
              والصحة والبيئة لكل من عملائنا وموظفينا.
            </p>

            {show && (
              <div className="text-center pt-2">
                <Link
                  href="/about"
                  className={buttonVariants({
                    size: "lg",
                    className: "w-full sm:w-auto",
                  })}>
                  اقرأ أكثر
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
