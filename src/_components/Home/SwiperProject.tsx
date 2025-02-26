"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Project } from "@/types/type";
import { useState } from "react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { Autoplay } from "swiper/modules";
import ProjectBox from "../sharable/ProjectBox";
// import required modules
const SwiperProject = ({ data }: { data: Project[] }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="relative">
      {/* slider */}
      <Swiper
        speed={800}
        slidesPerView={3}
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.3,
          },
        }}
        centeredSlides={true}
        spaceBetween={10}
        modules={[Autoplay]}
        loop={true}
        initialSlide={2}
        className="mySwiper">
        {data.map((item, index) => (
          <SwiperSlide
            key={item._id}
            className={`border border-border  relative rounded-lg  p-4 ${
              activeIndex === index ? "opacity-100" : "opacity-30"
            }`}>
            <ProjectBox item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* navigation btns */}
      <div className="flex items-center mt-3 sm:mt-6 gap-2">
        <button
          className={` ${
            swiper?.isBeginning ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => swiper?.slidePrev()}
          disabled={swiper?.isBeginning}>
          <ArrowRightCircleIcon size={30} className="hover:text-primary" />
        </button>
        <button
          className={` ${swiper?.isEnd ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => swiper?.slideNext()}
          disabled={swiper?.isEnd}>
          <ArrowLeftCircleIcon size={30} className="hover:text-primary" />
        </button>
      </div>
    </div>
  );
};

export default SwiperProject;
