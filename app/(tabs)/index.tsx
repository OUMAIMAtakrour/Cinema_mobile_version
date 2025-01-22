// HomeScreen.js
import { StyleSheet, ScrollView, View } from "react-native";
import SearchBar from "@/components/ui/SearchBar";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchWrapper}>
        <SearchBar containerStyle={styles.search} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(28, 32, 41)",
  },
  searchWrapper: {
    paddingHorizontal: 14,
    width: "100%",
  },
  search: {
    marginVertical: 14,
    width: "100%",
  },
});
