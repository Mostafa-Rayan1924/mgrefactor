import Image from "next/image";
import HeroInfo from "./HeroInfo";
import BallAnimation from "../sharable/BallAnimation";
import CircleIcon from "../sharable/CircleIcon";
import SquareIcon from "../sharable/SquareIcon";

const Hero = () => {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 100px)",
      }}
      className="mt-[100px] relative">
      <BallAnimation
        blur="blur-3xl"
        x={"left-0"}
        y={"top-0"}
        w={"w-[200px]"}
        h={"h-[200px]"}
      />
      <div className="container grid grid-cols-1 lg:grid-cols-5 gap-6">
        <HeroInfo />
        <div className="col-span-2 relative place-items-center lg:mt-[120px]">
          <CircleIcon
            y={"-top-10"}
            x={"right-0"}
            color={"text-primary hidden md:block "}
          />
          <SquareIcon
            y={"bottom-10 "}
            x={"left-0"}
            color={"text-blue-500 hidden md:block"}
          />
          <Image
            src={
              "https://res.cloudinary.com/dlaeaq6is/image/upload/v1740249717/1_xvfjsk.png"
            }
            width={609}
            height={350}
            alt="heroImg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
