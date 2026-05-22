import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function FAQ() {
  return (
    <ThemedView>
      <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>FAQ</ThemedText>
      <ThemedText>This is the FAQ page.</ThemedText>
    </ThemedView>
  );
}
