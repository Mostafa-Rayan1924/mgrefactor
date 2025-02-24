import faqs from "@/constants/Faqs";
import MainTitle from "../sharable/MainTitle";
import Acc from "./Acc";
import CircleIcon from "../sharable/CircleIcon";

const Faq = () => {
  return (
    <section className="relative">
      <CircleIcon y={"top-0"} x={"right-10"} color={"text-muted-foreground "} />
      <MainTitle title="الاسئلة الشائعة" />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((item, i) => {
          return <Acc key={item.question} data={item} i={i} />;
        })}
      </div>
    </section>
  );
};

export default Faq;
