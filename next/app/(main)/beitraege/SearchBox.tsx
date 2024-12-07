"use client";
import { useEffect, useState } from "react";
import useProductFilters from "@/lib/useProductFilter";
import { View, Text } from "@/lib/server-react-native";
import Fonts from "@/lib/Fonts";
import Colors from "@/lib/Colors";
import SearchIcon from "./SearchIcon";
import Metrics from "@/lib/Metrics";
import ButtonFull from "@/components/ButtonFull";
import FilterLabel from "@/components/FilterLabel";

export default function SearchBox({ programName, authorName }) {
  const { filters, setFilters } = useProductFilters();
  const [searchTerm, setSearchTerm] = useState(filters.searchTerm);
  const [author, setAuthor] = useState(filters.author);
  const [program, setProgram] = useState(filters.program);

  // Sync local state with URL parameters on initial load
  useEffect(() => {
    setSearchTerm(filters.searchTerm);
    setAuthor(filters.author);
    setProgram(filters.program);
  }, [filters]);

  // Update URL parameters when local state changes (with debounce)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilters({ searchTerm, author, program });
    }, 500); // Debounce delay

    return () => clearTimeout(timeoutId);
  }, [searchTerm, author, program, setFilters]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <ButtonFull href={"/beitraege"} label={"Alle Beiträge"} />
        {author && (
          <FilterLabel
            label={authorName}
            style={{ paddingLeft: Metrics.doubleBaseMargin }}
            onPress={() => setAuthor("")}
          />
        )}
        {program && (
          <FilterLabel
            label={programName}
            style={{ paddingLeft: Metrics.doubleBaseMargin }}
            onPress={() => setProgram("")}
          />
        )}
        {/* {searchFilters.map((filter) => {
          return (
            <FilterLabel
              label={filter.value}
              style={{ paddingLeft: Metrics.doubleBaseMargin }}
              onPress={() =>
                setSearchFilters(
                  searchFilters.filter(
                    (item) =>
                      item.type !== filter.type || item.value !== filter.value
                  )
                )
              }
            />
          );
        })} */}
      </div>

      {/* <Button url={""} label={"suche"} /> */}
      <View
        style={[
          {
            borderColor: Colors.black,
            borderRadius: 9,
            borderWidth: 1,
            // alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 3,
            paddingHorizontal: Metrics.halfBaseMargin,
          },
        ]}
      >
        <input
          id="inputID"
          style={{
            ...Fonts.style.TTtextLink,
            flexShrink: 1,
            color: Colors.black,
            borderWidth: 0,
          }}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          // onSubmit={(e) =>
          //   setSearchFilters([
          //     ...searchFilters,
          //     { type: "searchTerm", value: e.target.value },
          //   ])
          // }
          placeholder="Suche"
        />
        <SearchIcon></SearchIcon>
      </View>
    </div>
  );
}
