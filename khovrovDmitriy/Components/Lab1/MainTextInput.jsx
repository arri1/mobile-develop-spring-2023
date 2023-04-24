import { StyleSheet, TextInput } from "react-native";

const MainTextInput = ({ text, setText }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={setText}
      value={text}
      placeholder="Название задачи"
    />
  );
};

export default MainTextInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    borderColor: "black",
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "silver",
    borderColor: "#838FFF",
  },
});
