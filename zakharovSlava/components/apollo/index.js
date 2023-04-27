import React from "react";
import {
  View,
  Pressable,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "./Query";

const GraphQl = () => {
  const { data, loading } = useQuery(CHARACTERS_QUERY);

  const CharactersItem = ({ results }) => {
    const { name, status, species, gender } = results;

    return (
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 50,
          marginBottom: 30,
          padding: 10,
          backgroundColor: "#ffffff",
        }}
      >
        <Text style={styles.text} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.text} numberOfLines={1}>
          {status}
        </Text>
        <Text style={styles.text} numberOfLines={1}>
          {species}
        </Text>
        <Text style={styles.text} numberOfLines={1}>
          {gender}
        </Text>
      </Pressable>
    );
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={data.characters.results}
      contentContainerStyle={{ padding: 30 }}
      renderItem={({ item }) => <CharactersItem results={item} />}
      keyExtractor={(item, index) => index}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    width: 80,
    textAlign: "center",
  },
});

export default GraphQl;
