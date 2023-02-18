import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Lab2 = () => {
  return (
    <View style={styles.container}>
      <Text>Hello from Sanaaia!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Lab2;
