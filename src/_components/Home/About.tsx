import { buttonVariants } from "@/components/ui/button";
import SquareIcon from "../sharable/SquareIcon";
import Link from "next/link";
import CircleIcon from "../sharable/CircleIcon";
import BallAnimation from "../sharable/BallAnimation";

const About = () => {
  return (
    <section className="relative mt-6 sm:mt-0   ">
      <SquareIcon
        y={"-bottom-5"}
        x={"start-10 sm:start-40 animate-pulse"}
        color={"text-foreground"}
      />
      <BallAnimation
        blur="blur-3xl"
        x={"right-0"}
        y={"top-0"}
        w={"w-[200px]"}
        h={"h-[200px]"}
      />
      <div className="container">
        <div className="max-w-[700px]  relative p-4 sm:p-6 mx-auto bg-background/90 border border-border rounded-lg">
          <CircleIcon y={"-top-5"} x={"end-0"} color={"text-primary"} />
          <div className="flex flex-col gap-y-4 text-start">
            <h2 className="font-semibold text-xl text-primary">رسالتنا</h2>
            <h3 className="text-2xl font-bold text-foreground">
              تعرف اكثر عن اهدافنا
            </h3>
            <p className=" text-muted-foreground line-clamp-4  leading-relaxed">
              همتنا هي تحقيق رضا العملاء من خلال تحقيق أعلى مستوى من الخدمات
              عالية الجودة بأسعار عادلة ، كل ذلك بسبب الوقت المخطط والمراقب الذي
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
            <div className="text-center ">
              <Link href={`/about`} className={buttonVariants({ size: "lg" })}>
                اقرأ اكثر
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
