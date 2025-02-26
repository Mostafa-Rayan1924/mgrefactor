import { Project } from "@/types/type";
import { Building2Icon, ChartBarStacked } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectBox = ({ item }: { item: Project }) => {
  return (
    <Link className="space-y-3" href={`/projects/${item._id}`} key={item._id}>
      <div className="w-full  h-[250px] relative">
        <Image
          className="rounded-lg"
          src={item.images[0]}
          alt={item.projectName}
          fill
        />
      </div>
      <h2 className="flex items-center gap-2 ">
        <Building2Icon className="size-6 text-primary" />
        <span className="line-clamp-1">{item.projectName}</span>
      </h2>
      <h2 className="text-muted-foreground flex items-center gap-2 ">
        <ChartBarStacked className="size-6 text-primary" />
        {item.section}
      </h2>
    </Link>
  );
};

export default ProjectBox;
