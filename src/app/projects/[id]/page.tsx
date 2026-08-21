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
  const { id } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}project/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return {
        title: "المشروع",
      };
    }

    const project = await res.json();

    return {
      title: project?.data?.result?.projectName ?? "المشروع",
    };
  } catch {
    return {
      title: "المشروع",
    };
  }
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const response = await getProjectById(id);

  if (!response?.data?.result) {
    throw new Error("لم يتم العثور على المشروع");
  }

  const data = response.data.result;

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
              اسم المشروع : {data?.projectName}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <UserSquare className="text-primary size-6 mt-[2px]" />

            <h2 className="text-base sm:text-lg text-muted-foreground font-semibold">
              المسؤول: {data?.engineer?.name}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <CopySlashIcon className="text-primary size-6 mt-[2px]" />

            <h2 className="text-base sm:text-lg font-semibold">
              دور المسؤول: {data?.engineer?.role}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <Settings2Icon className="text-primary size-6 mt-[2px]" />

            <h2 className="text-base sm:text-lg text-muted-foreground font-semibold">
              التصنيف: {data?.section}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <LocateFixedIcon className="text-primary size-6 mt-[2px]" />

            <h2 className="text-base sm:text-lg font-semibold">
              الموقع: {data?.location}
            </h2>
          </div>
        </div>

        {/* gallery */}
        <SwiperCard images={data?.images} />
      </div>
    </section>
  );
};

export default Page;
