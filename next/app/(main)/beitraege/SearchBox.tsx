"use client";
import { useEffect, useState } from "react";
import useProductFilters from "@/lib/useProductFilter";
import { View, Text } from "@/lib/server-react-native";
import Fonts from "@/lib/Fonts";
import Colors from "@/lib/Colors";
import SearchIcon from "./SearchIcon";
import Metrics from "@/lib/Metrics";
import Button from "@/components/Button";
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
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "-" + Metrics.baseMargin,
        }}
      >
        <Button
          href={"/beitraege"}
          label={"Alle Beiträge"}
          full
          textColor={Colors.white}
          style={{
            paddingRight: Metrics.doubleBaseMargin,
            marginTop: Metrics.baseMargin,
          }}
        />
        {author && (
          <Button
            // href={"/beitraege"}
            label={authorName}
            onPress={() => setAuthor("")}
            style={{
              paddingRight: Metrics.doubleBaseMargin,
              marginTop: Metrics.baseMargin,
            }}
          />
        )}
        {program && (
          <Button
            label={programName}
            onPress={() => setProgram("")}
            style={{
              paddingRight: Metrics.doubleBaseMargin,
              marginTop: Metrics.baseMargin,
            }}
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
      </View>

      <View
        style={[
          {
            borderColor: Colors.black,
            borderRadius: 9,
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 3,
            paddingHorizontal: Metrics.halfBaseMargin,
            height: 38,
          },
        ]}
      >
        <input
          id="inputID"
          style={{
            // display: "flex",
            ...Fonts.style.TTtextLink,
            // flexShrink: 1,
            color: Colors.black,
            borderWidth: 0,
            width: "25vw",
            maxWidth: 150,
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
    </View>
  );
}
