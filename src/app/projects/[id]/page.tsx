import { getProjectById } from "@/callingApi/api";
import {
  Building,
  CopySlashIcon,
  LocateFixedIcon,
  Settings2Icon,
  UserSquare,
} from "lucide-react";
import SwiperCard from "./SwiperCard";
import MainTitle from "@/_components/sharable/MainTitle";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}project/${(await params).id}`
  );
  const project = await res.json();

  return {
    title: project.data.result.projectName,
  };
}
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  let { data } = await getProjectById(id);
  console.log(data.result.projectName);
  if (!data) {
    return (
      <p className="h-[80vh] flex items-center justify-center text-center text-3xl font-semibold text-red-500">
        بحث خاطئ اعد المحاولة
      </p>
    );
  }
  return (
    <section className="mt-[140px] mb-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* info side */}
        <div className="space-y-6 h-fit border border-border rounded-lg py-7 px-4">
          <div className="mt-2">
            <MainTitle title="معلومات المشروع" />
          </div>
          <div className="flex items-center gap-2">
            <Building className="text-primary size-6 mt-[2px]" />
            <h2 className="text-base sm:text-lg font-semibold">
              اسم المشروع : {data?.result?.projectName}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <UserSquare className="text-primary size-6 mt-[2px]" />
            <h2 className="text-base sm:text-lg text-muted-foreground font-semibold">
              المسؤول: {data?.result?.engineer?.name}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <CopySlashIcon className="text-primary size-6 mt-[2px]" />
            <h2 className="text-base sm:text-lg font-semibold">
              دور المسؤول: {data?.result?.engineer?.role}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Settings2Icon className="text-primary size-6 mt-[2px]" />
            <h2 className="text-base sm:text-lg text-muted-foreground font-semibold">
              التصنيف: {data?.result?.section}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <LocateFixedIcon className="text-primary size-6 mt-[2px]" />
            <h2 className="text-base sm:text-lg font-semibold">
              الموقع: {data?.result?.location}
            </h2>
          </div>
        </div>
        {/* gallery */}

        <SwiperCard images={data?.result?.images} />
      </div>
    </section>
  );
};
export default page;
