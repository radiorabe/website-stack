"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";

const useProductFilters = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const filters = useMemo(
    () => ({
      author: searchParams.get("author") || "",
      program: searchParams.get("program") || "",
      searchTerm: searchParams.get("searchTerm") || "",
    }),
    [searchParams]
  );

  const setFilters = useCallback(
    (newFilters) => {
      // console.log("newFilters", newFilters);
      const currentParams = new URLSearchParams(searchParams.toString());

      Object.entries(newFilters).forEach(([key, value]) => {
        if (value) {
          currentParams.set(key, value);
        } else {
          currentParams.delete(key);
        }
      });

      const search = currentParams.toString();
      const query = search ? `?${search}` : "";
      const url = `${pathName.split("?")[0]}${query}`;

      router.replace(url, { scroll: false });
    },
    [router, searchParams]
  );

  return { filters, setFilters };
};

export default useProductFilters;
