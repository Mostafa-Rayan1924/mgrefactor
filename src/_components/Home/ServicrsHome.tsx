import { services } from "@/constants/Services";
import { servType } from "@/types/type";
import BallAnimation from "../sharable/BallAnimation";
import MainTitle from "../sharable/MainTitle";
import CircleIcon from "../sharable/CircleIcon";

const ServicrsHome = () => {
  return (
    <section className="relative ">
      <BallAnimation
        blur="blur-2xl dark:blur-3xl"
        x={"left-4"}
        y={"top-0"}
        w={"w-[200px] hidden lg:block"}
        h={"h-[200px]"}
      />
      <CircleIcon
        y={"bottom-4"}
        x={"right-6 hidden lg:block"}
        color={"text-primary"}
      />
      <MainTitle title="خدماتنا" />
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2  ">
          {services.map((service: servType, i: number) => (
            <div
              key={service.id}
              className="bg-accent relative overflow-hidden before:absolute before:top-0 before:even:left-0 before:odd:right-0 before:w-1 before:h-0 before:hover:h-full before:bg-primary  before:duration-500 rounded-lg p-4">
              <BallAnimation
                x={i % 2 == 0 ? "right-2" : "-left-2"}
                y={i % 2 == 0 ? "bottom-2" : "-top-2"}
                w="w-20"
                blur="blur-2xl"
                h="h-20"
              />
              <div className="flex gap-4">
                <service.icon className="size-8 flex-shrink-0 text-primary" />
                <div className="space-y-4">
                  <h2 className="font-semibold text-2xl">{service.title}</h2>
                  <p className="text-sm  sm:text-base opacity-80 ">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicrsHome;
