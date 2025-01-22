// HomeScreen.js
import { StyleSheet, ScrollView, View, Text } from "react-native";
import SearchBar from "@/components/ui/SearchBar";
import Carousel from "@/components/ui/Carousel";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchWrapper}>
        <Text style={styles.text}>Hello,User</Text>

        <SearchBar containerStyle={styles.search} />
        <Carousel></Carousel>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    margin: 4,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "600",
  },
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
