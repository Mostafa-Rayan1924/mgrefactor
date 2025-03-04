import { getAllProjects } from "@/callingApi/api";
import MainTitle from "../sharable/MainTitle";
import ProjectBox from "../sharable/ProjectBox";
import FilterBtn from "./FilterBtn";

async function FilterProjects({ category }: { category: string }) {
  let { data: projectData } = await getAllProjects(category);
  if (!projectData?.result) {
    return (
      <p className="text-center text-red-500">لا توجد مشاريع متاحة حاليًا</p>
    );
  }
  return (
    <section>
      <MainTitle title="اخر المشاريع" />
      <FilterBtn />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData?.result?.map((item: any, i: number) => (
          <div className="border border-border p-3 rounded-lg hover:border-primary duration-300">
            <ProjectBox key={i} item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FilterProjects;
