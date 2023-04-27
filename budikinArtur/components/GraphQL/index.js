import React from "react";
import { View, Pressable, Text } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./Query";

const GraphQl = () => {
  const { loading, data } = useQuery(GET_CHARACTERS);

  if (loading) return <Text>Loading...</Text>;

  return data.characters.results.map(({ id, name, image }) => (
    <View key={id}>
      <Text>{name}</Text>
    </View>
  ));
};
export default GraphQl;
