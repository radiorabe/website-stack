"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

const useProductFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = useMemo(
    () => ({
      type: searchParams.get("type") || "",
      id: searchParams.get("id") || "",
    }),
    [searchParams]
  );

  const setFilters = useCallback(
    (newFilters) => {
      const currentParams = new URLSearchParams(searchParams.toString());

      Object.entries(newFilters).forEach(([key, value]) => {
        if (value) {
          currentParams.set(key, value);
        } else {
          currentParams.delete(key);
        }
      });

      // const search = currentParams.toString();
      // const query = search ? `?${search}` : '';
      // const url = `${router.asPath.split('?')[0]}${query}`;

      // router.replace(url, { scroll: false });
    },
    [router, searchParams]
  );

  return { filters, setFilters };
};

export default useProductFilters;