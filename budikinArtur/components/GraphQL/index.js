import React from "react";
import { View, Pressable, Text,StyleSheet} from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./Query";

const GraphQl = () => {
  const { loading, data } = useQuery(GET_CHARACTERS);
  
  if (loading) return <Text>Loading...</Text>;

  return data.characters.results.map(({ id, name, image }) => (
    <View key={id} style={styles.main}>
      <Text style={styles.commonText}>{name}</Text>
    </View>
  ));
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#606C38",
    alignItems: "center",
    flex: 1,
  },
  commonText: {
    fontFamily: "Monts",
    fontStyle: "normal",
    fontweight: 500,
    fontSize: 14,
    lineheight: 16,
    textAlign: "center",
    color: "#FEFAE0",
  },
});
export default GraphQl;
