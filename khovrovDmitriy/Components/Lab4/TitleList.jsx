import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { DARK_MODE } from "../Lab5/DarkModeConstStates";

const TitleList = () => {
  const darkModeState = useSelector((state) => state.darkMode.value);
  return (
    <View style={styles.container}>
      <Text
        style={darkModeState == DARK_MODE ? styles.textDarkMode : styles.text}
      >
        Список задач
      </Text>
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
  textDarkMode: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
