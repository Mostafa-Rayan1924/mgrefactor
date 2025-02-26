import FilterProjects from "@/_components/Projects/FilterProjects";
import ImportantSec from "@/_components/Projects/importanPro/ImportantSec";

const page = async ({
  searchParams,
}: {
  searchParams: { category?: string };
}) => {
  const { category } = (await searchParams) || "All";
  return (
    <section className="mt-[140px!important] !mb-10 space-y-14  lg:space-y-20 container">
      <ImportantSec />
      <FilterProjects category={category} />
    </section>
  );
};

export default page;
