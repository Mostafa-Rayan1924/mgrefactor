import FilterProjects from "@/_components/Projects/FilterProjects";
import ImportantSec from "@/_components/Projects/importanPro/ImportantSec";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "شركة إم جي | المشاريع",
  description: "شركة ام جي للمقاولات العامة واعمال البحر",
};
const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const { category } = (await searchParams) || "All";
  return (
    <section
      style={{ marginTop: "140px" }}
      className="!mb-10 space-y-14  lg:space-y-20 container">
      <ImportantSec />
      <FilterProjects category={category} />
    </section>
  );
};

export default page;
