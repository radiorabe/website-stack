"use client";
import { useServerInsertedHTML } from "next/navigation";
import { StyleSheet } from "react-native";
import { flush } from "react-native-media-query";
export function RNMQProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    const style = flush();
    const sheet = StyleSheet.getSheet();

    return (
      <>
        {style}
        <style
          dangerouslySetInnerHTML={{ __html: sheet.textContent }}
          id={sheet.id}
        />
      </>
    );
  });
  return <>{children}</>;
}
