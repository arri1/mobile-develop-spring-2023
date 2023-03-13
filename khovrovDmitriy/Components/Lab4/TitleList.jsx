import { StyleSheet, View, Text } from "react-native";

const TitleList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Список задач</Text>
    </View>
  );
};

export default TitleList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    color: "black",
    borderBottomWidth: 1,
    borderBottomColor: "#777777",
    marginTop: 10,
    padding: 5,
    boxShadow: "10px 5px 5px red",
  },
  text: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});
