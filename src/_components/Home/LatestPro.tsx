import { getAllProjects } from "@/callingApi/api";
import MainTitle from "../sharable/MainTitle";
import SwiperProject from "./SwiperProject";

const LatestPro = async () => {
  let { data: projectData } = await getAllProjects();
  if (!projectData?.result || !projectData?.result) {
    return (
      <p className="text-center text-red-500">لا توجد مشاريع متاحة حاليًا</p>
    );
  }

  return (
    <section>
      <MainTitle title="احدث المشاريع" />
      <div className="w-[90%] mx-auto">
        <SwiperProject data={projectData?.result} />
      </div>
    </section>
  );
};

export default LatestPro;
