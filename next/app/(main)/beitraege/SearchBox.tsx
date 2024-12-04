"use client";
import { useEffect, useState } from "react";
import useProductFilters from "@/lib/useProductFilter";
import { View, Text } from "@/lib/server-react-native";
import Fonts from "@/lib/Fonts";
import Colors from "@/lib/Colors";
import SearchIcon from "./SearchIcon";
import Metrics from "@/lib/Metrics";

export default function SearchBox({}) {
  const { filters, setFilters } = useProductFilters();
  const [searchTerm, setSearchTerm] = useState(filters.searchTerm);
  // const [category, setCategory] = useState(filters.author);
  // const [maxPrice, setMaxPrice] = useState(filters.program);

  // Sync local state with URL parameters on initial load
  useEffect(() => {
    setSearchTerm(filters.searchTerm);
    // setCategory(filters.category);
    // setMaxPrice(filters.maxPrice);
  }, [filters]);

  // Update URL parameters when local state changes (with debounce)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilters({ searchTerm });
    }, 500); // Debounce delay

    return () => clearTimeout(timeoutId);
  }, [searchTerm, setFilters]);

  return (
    <div>
      <View
        style={[
          {
            borderColor: Colors.black,
            borderRadius: 9,
            borderWidth: 1,
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 3,
            paddingHorizontal: Metrics.halfBaseMargin,
          },
        ]}
      >
        <input
          style={{
            ...Fonts.style.TTtextLink,
            flexShrink: 1,
            color: Colors.black,
            borderWidth: 0,
          }}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Suche..."
        />
        <SearchIcon></SearchIcon>
      </View>
    </div>
  );
}
