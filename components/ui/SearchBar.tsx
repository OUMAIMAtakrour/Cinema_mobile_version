// SearchBar.js
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchBar = ({ containerStyle }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View style={[styles.searchContainer, containerStyle]}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
        inputStyle={styles.input}
        iconColor="#fff"
        placeholderTextColor="rgba(255, 255, 255, 0.6)"
        theme={{
          colors: {
            primary: "#fff",
            surface: "rgba(255, 255, 255, 0.1)",
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  searchContainer: {
    width: "100%",
  },
  searchBar: {
    margin: 4,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    elevation: 0,
  },
  input: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SearchBar;
