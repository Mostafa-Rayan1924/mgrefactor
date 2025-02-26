"use client";
import { btns } from "@/types/type";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const FilterBtn = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selected = useMemo(
    () => searchParams.get("category") || "",
    [searchParams]
  );
  return (
    <div className="flex items-center gap-4 mb-6 sm:mb-10 flex-wrap justify-center">
      {Object.entries(btns).map(([key, value]) => (
        <button
          onClick={() => {
            if (selected === value) return;
            const params = new URLSearchParams(searchParams);
            if (value) {
              params.set("category", value);
            } else {
              params.delete("category");
            }
            router.push(`?${params.toString()}`, { scroll: false });
          }}
          key={value}
          className={`px-2 text-sm ${
            selected === value ? "bg-primary text-white" : ""
          } sm:text-base sm:px-4 py-2 rounded-lg border hover:px-6 hover:border-primary duration-300 `}>
          {key}
        </button>
      ))}
    </div>
  );
};

export default FilterBtn;
